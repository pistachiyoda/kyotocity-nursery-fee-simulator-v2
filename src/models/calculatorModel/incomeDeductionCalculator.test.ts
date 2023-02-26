import { IncomeDeductionCalculatorModel } from "./incomeDeductionCalculator";

describe("IncomeDeductionCalculatorModel", () => {
  const calculator = new IncomeDeductionCalculatorModel();

  test("基礎控除の計算", () => {
    const result1 = calculator.calcBasicDeduction(25000001);
    expect(result1).toBe(0);
    const result2 = calculator.calcBasicDeduction(25000000);
    expect(result2).toBe(150000);
    const result3 = calculator.calcBasicDeduction(24500000);
    expect(result3).toBe(290000);
    const result4 = calculator.calcBasicDeduction(24000000);
    expect(result4).toBe(430000);
  });

  test("配偶者控除の計算", () => {
    const result1 = calculator.calcSpouseDeduction(400000, 4000000);
    expect(result1).toBe(0);
    const result2 = calculator.calcSpouseDeduction(10000001, 400000);
    expect(result2).toBe(0);
    const result3 = calculator.calcSpouseDeduction(4000000, 480001);
    expect(result3).toBe(0);
    const result4 = calculator.calcSpouseDeduction(9000000, 480000);
    expect(result4).toBe(330000);
    const result5 = calculator.calcSpouseDeduction(9500000, 480000);
    expect(result5).toBe(220000);
    const result6 = calculator.calcSpouseDeduction(10000000, 480000);
    expect(result6).toBe(110000);
  });
});
