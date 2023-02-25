import { Input } from "../inputModel";
import { Output } from "../outputModel";
import { CivilTaxAdjustedDeductionCalculatorModel } from "./civilTaxAdjustedDeductionCalculator";
import { IncomeDeductionCalculatorModel } from "./incomeDeductionCalculator";

export class CalculatorModel {
  #oldCivilTaxRate: number;
  #civilTaxPerCapita: number;
  #civilTaxAdjustedDeductionCalculatorModel: CivilTaxAdjustedDeductionCalculatorModel;
  #incomeDeductionCalculatorModel: IncomeDeductionCalculatorModel;

  constructor() {
    this.#oldCivilTaxRate = 0.06;
    this.#civilTaxPerCapita = 3500;
    this.#civilTaxAdjustedDeductionCalculatorModel =
      new CivilTaxAdjustedDeductionCalculatorModel();
    this.#incomeDeductionCalculatorModel = new IncomeDeductionCalculatorModel();
  }

  // 課税所得の計算
  calcTaxableIncome(income: number): number {
    const incomeDeduction =
      this.#incomeDeductionCalculatorModel.calcTotalIncomeDeduction(income);
    return income - incomeDeduction;
  }

  // 市民税算出所得割額の計算
  calcCityTaxCalculateIncome(taxableIncome: number): number {
    return taxableIncome * this.#oldCivilTaxRate;
  }

  // 市民税所得割の計算
  calcCityTaxIncome(income: number, cityTaxCalculateIncome: number): number {
    const civilTaxAdjustedDeduction =
      this.#civilTaxAdjustedDeductionCalculatorModel.calcCivilTaxAdjustedDeduction(
        income
      );
    return cityTaxCalculateIncome - civilTaxAdjustedDeduction;
  }

  // 市民税額の計算
  calcCityTax(cityTaxIncome: number): number {
    return cityTaxIncome + this.#civilTaxPerCapita;
  }

  calcOutputs(inputList: Input[]): Output[] {
    const result: Output[] = [];

    inputList.map((input) => {
      const taxableIncome = this.calcTaxableIncome(input.income);
      const cityTaxCalculateIncome =
        this.calcCityTaxCalculateIncome(taxableIncome);
      const cityTaxIncome = this.calcCityTaxIncome(
        input.income,
        cityTaxCalculateIncome
      );
      const cityTax = this.calcCityTax(cityTaxIncome);
      result.push({
        taxableIncome,
        cityTaxCalculateIncome,
        cityTaxIncome,
        cityTax,
      });
    });
    return result;
  }
}
