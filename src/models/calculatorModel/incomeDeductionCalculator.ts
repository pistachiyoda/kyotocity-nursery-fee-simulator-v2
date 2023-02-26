// 所得税除計算モデル
export class IncomeDeductionCalculatorModel {
  // 基礎控除の計算
  calcBasicDeduction(income: number): number {
    if (income <= 24000000) return 430000;
    if (income <= 24500000) return 290000;
    if (income <= 25000000) return 150000;
    return 0;
  }

  // 配偶者控除
  calcSpouseDeduction(myIncome: number, spouseIncome: number) {
    if (myIncome < spouseIncome) return 0;
    if (myIncome > 10000000) return 0;
    if (spouseIncome > 480000) return 0;
    if (myIncome <= 9000000) return 330000;
    if (myIncome <= 9500000) return 220000;
    return 110000;
  }

  calcTotalIncomeDeduction(myIncome: number, spouseIncome: number): number {
    const basicDeduction = this.calcBasicDeduction(myIncome);
    const spouseDeduction = this.calcSpouseDeduction(myIncome, spouseIncome);
    return basicDeduction + spouseDeduction;
  }
}
