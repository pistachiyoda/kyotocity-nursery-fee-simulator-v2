// 所得税除計算モデル
export class IncomeDeductionCalculatorModel {
  calcIncomeDeduction(income: number): number {
    return income * 0.1;
  }
}
