import { CalculatorModel } from "./calculatorModel";

describe("calculatorModel", () => {
  const calculator = new CalculatorModel();

  test("課税所得の計算", () => {
    const result = calculator.calcTaxableIncome(3000000);
    expect(result).toBe(2570000); // 基礎控除のみ実装
  });

  test("市民税算出所得税の計算", () => {
    const result = calculator.calcCityTaxCalculateIncome(3000000);
    expect(result).toBe(180000);
  });

  test("市民税所得割額の計算", () => {
    const result = calculator.calcCityTaxIncome(3000000, 180000);
    expect(result).toBe(150000);
  });

  test("市民税額の計算", () => {
    const result = calculator.calcCityTax(0);
    expect(result).toBe(3500);
  });
});
