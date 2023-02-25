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
});
