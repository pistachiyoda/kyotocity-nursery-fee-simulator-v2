// 所得税除計算モデル
export class IncomeDeductionCalculatorModel {
  // 基礎控除の計算
  calcBasicDeduction(income: number): number {
    if (income <= 430000) return income;
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

  // 配偶者特別控除
  calcSpouseSpecialDeduction(myIncome: number, spouseIncome: number) {
    if (myIncome < spouseIncome) return 0;
    if (spouseIncome <= 480000 || spouseIncome > 1330000) return 0;
    if (myIncome <= 9000000) {
      if (spouseIncome <= 1000000) return 330000;
      if (spouseIncome <= 1050000) return 310000;
      if (spouseIncome <= 1100000) return 260000;
      if (spouseIncome <= 1150000) return 210000;
      if (spouseIncome <= 1200000) return 160000;
      if (spouseIncome <= 1250000) return 110000;
      if (spouseIncome <= 1300000) return 60000;
      if (spouseIncome <= 1330000) return 30000;
    }
    if (myIncome <= 9500000) {
      if (spouseIncome <= 1000000) return 220000;
      if (spouseIncome <= 1050000) return 210000;
      if (spouseIncome <= 1100000) return 180000;
      if (spouseIncome <= 1150000) return 140000;
      if (spouseIncome <= 1200000) return 110000;
      if (spouseIncome <= 1250000) return 80000;
      if (spouseIncome <= 1300000) return 40000;
      if (spouseIncome <= 1330000) return 20000;
    }
    if (myIncome <= 10000000) {
      if (spouseIncome <= 1050000) return 110000;
      if (spouseIncome <= 1100000) return 90000;
      if (spouseIncome <= 1150000) return 70000;
      if (spouseIncome <= 1200000) return 60000;
      if (spouseIncome <= 1250000) return 40000;
      if (spouseIncome <= 1300000) return 20000;
      if (spouseIncome <= 1330000) return 10000;
    }
    return 0;
  }

  calcTotalIncomeDeduction(myIncome: number, spouseIncome: number): number {
    const basicDeduction = this.calcBasicDeduction(myIncome);
    const spouseDeduction = this.calcSpouseDeduction(myIncome, spouseIncome);
    const specialSpouseDeduction = this.calcSpouseSpecialDeduction(
      myIncome,
      spouseIncome
    );
    return basicDeduction + spouseDeduction + specialSpouseDeduction;
  }
}
