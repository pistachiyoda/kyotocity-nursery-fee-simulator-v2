// 所得税除計算モデル
export class IncomeDeductionCalculatorModel {
  // 基礎控除の計算
  calcBasicDeduction(income: number): number {
    if (income <= 24000000) return 430000;
    if (income <= 24500000) return 290000;
    if (income <= 25000000) return 150000;
    return 0;
  }

  calcTotalIncomeDeduction(income: number): number {
    const basicDeduction = this.calcBasicDeduction(income);
    return basicDeduction;
  }
}
