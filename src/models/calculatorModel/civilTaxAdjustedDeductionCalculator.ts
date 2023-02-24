// 市民税調整控除額計算モデル
export class CivilTaxAdjustedDeductionCalculatorModel {
  calcCivilTaxAdjustedDeduction(income: number) {
    return income * 0.01;
  }
}
