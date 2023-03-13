import { Family } from "../family";
import { IndividualInfoInput } from "../inputModel/individualInfoInputModel";
import { Output } from "../outputModel";
import { CivilTaxAdjustedDeductionCalculatorModel } from "./civilTaxAdjustedDeductionCalculator";
import { IncomeDeductionCalculatorModel } from "./incomeDeductionCalculator";

export class CalculatorModel {
  #oldCivilTaxRate: number;
  #civilTaxAdjustedDeductionCalculatorModel: CivilTaxAdjustedDeductionCalculatorModel;
  #incomeDeductionCalculatorModel: IncomeDeductionCalculatorModel;

  constructor() {
    this.#oldCivilTaxRate = 0.06;
    this.#civilTaxAdjustedDeductionCalculatorModel =
      new CivilTaxAdjustedDeductionCalculatorModel();
    this.#incomeDeductionCalculatorModel = new IncomeDeductionCalculatorModel();
  }

  // 対象所得の計算（給与所得 - 給与所得控除）
  truncateLessThan1000 = (num: number) => {
    return Math.floor(num / 1000) * 1000;
  };

  calcIncome(employmentIncome: number): number {
    if (employmentIncome < 551000) return 0;
    if (employmentIncome < 1619000) return employmentIncome - 550000;
    if (employmentIncome < 1620000) return 1069000;
    if (employmentIncome < 1622000) return 1070000;
    if (employmentIncome < 1624000) return 1072000;
    if (employmentIncome < 1628000) return 1074000;
    if (employmentIncome < 1800000)
      return this.truncateLessThan1000(employmentIncome / 4) * 2.4 + 100000;
    if (employmentIncome < 3600000)
      return this.truncateLessThan1000(employmentIncome / 4) * 2.8 - 80000;
    if (employmentIncome < 6600000)
      return this.truncateLessThan1000(employmentIncome / 4) * 3.2 - 440000;
    if (employmentIncome < 8500000) return employmentIncome * 0.9 - 1100000;
    if (8500000 <= employmentIncome) return employmentIncome - 1950000;
    return 0;
  }

  // 課税所得の計算
  calcTaxableIncome(myIncome: number, spouseIncome: number): number {
    const incomeDeduction =
      this.#incomeDeductionCalculatorModel.calcTotalIncomeDeduction(
        myIncome,
        spouseIncome
      );
    return myIncome - incomeDeduction;
  }

  // 市民税算出所得割額の計算
  calcCityTaxCalculateIncome(taxableIncome: number): number {
    return taxableIncome * this.#oldCivilTaxRate;
  }

  // 市民税所得割の計算
  calcCityTaxIncome(income: number, cityTaxCalculateIncome: number): number {
    const civilTaxAdjustedDeduction =
      // 仮実装
      this.#civilTaxAdjustedDeductionCalculatorModel.calcCivilTaxAdjustedDeduction(
        income
      );
    // const cityTaxIncome = cityTaxCalculateIncome - civilTaxAdjustedDeduction;
    // return cityTaxIncome < 0 ? 0 : cityTaxIncome;
    return cityTaxCalculateIncome - civilTaxAdjustedDeduction;
  }

  calcOutputs(individualInputList: IndividualInfoInput[]): Output[] {
    const result: Output[] = [];

    individualInputList.map((input, index) => {
      const spouseIncome = this.calcIncome(
        individualInputList[
          index === Family.MOTHER ? Family.FATHER : Family.MOTHER
        ].employmentIncome
      );
      const income = this.calcIncome(input.employmentIncome);
      const taxableIncome = this.calcTaxableIncome(income, spouseIncome);
      const cityTaxCalculateIncome =
        this.calcCityTaxCalculateIncome(taxableIncome);
      const cityTaxIncome = this.calcCityTaxIncome(
        income,
        cityTaxCalculateIncome
      );
      result.push({
        income,
        taxableIncome,
        cityTaxCalculateIncome,
        cityTaxIncome,
      });
    });
    return result;
  }
}
