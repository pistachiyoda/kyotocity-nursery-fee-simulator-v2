import { Family } from "../family";
import { InputInfo } from "../inputModel/inputInfoModel";

// 市民税調整控除額計算モデル
export class CivilTaxAdjustedDeductionCalculatorModel {
  // ひとり親情報、自分の給与控除後所得、配偶者の給与控除後所得
  calcPersonelDeduction(
    myIncome: number,
    spouseIncome: number,
    input: InputInfo
  ) {
    if (input.generalInfo.isSingleParentHousehold === Family.FATHER)
      return 10000;
    if (input.generalInfo.isSingleParentHousehold === Family.MOTHER)
      return 50000;

    if (myIncome < spouseIncome) return 0;
    // 配偶者控除
    if (spouseIncome < 480000 && myIncome <= 9000000) return 50000;
    if (spouseIncome < 480000 && myIncome <= 9500000) return 40000;
    if (spouseIncome < 480000 && myIncome <= 10000000) return 20000;
    // 配偶者特別控除
    if (spouseIncome < 500000 && myIncome <= 9000000) return 50000;
    if (spouseIncome < 500000 && myIncome <= 9500000) return 40000;
    if (spouseIncome < 500000 && myIncome <= 10000000) return 20000;
    if (spouseIncome < 550000 && myIncome <= 9000000) return 30000;
    if (spouseIncome < 550000 && myIncome <= 9500000) return 20000;
    if (spouseIncome < 550000 && myIncome <= 10000000) return 10000;
    return 0;
  }

  calcCivilTaxAdjustedDeduction(
    myIncome: number,
    spouseIncome: number,
    input: InputInfo
  ) {
    if (myIncome >= 25000000) return 0;

    const personelDeduction = this.calcPersonelDeduction(
      myIncome,
      spouseIncome,
      input
    );

    if (personelDeduction === 0) return 0;

    if (myIncome <= 2000000) {
      const val =
        personelDeduction + 50000 > myIncome
          ? myIncome
          : personelDeduction + 50000;
      return val * 0.05;
    }
    if (myIncome > 2000000) {
      const val = personelDeduction + 50000 - (myIncome - 2000000);
      return (val < 50000 ? 50000 : val) * 0.05;
    }

    return 0;
  }
}
