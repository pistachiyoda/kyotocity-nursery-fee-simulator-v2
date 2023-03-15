import { CalculatorModel } from "./calculatorModel";

describe("calculatorModel", () => {
  const calculator = new CalculatorModel();

  test("給与所得の計算（給与収入 - 給与所得控除）", () => {
    const result1 = calculator.calcIncome(550999);
    expect(result1).toBe(0);
    const result2 = calculator.calcIncome(551000);
    expect(result2).toBe(1000);
    const result3 = calculator.calcIncome(1618999);
    expect(result3).toBe(1068999);
    const result4 = calculator.calcIncome(1619000);
    expect(result4).toBe(1069000);
    const result5 = calculator.calcIncome(1620000);
    expect(result5).toBe(1070000);
    const result6 = calculator.calcIncome(1622000);
    expect(result6).toBe(1072000);
    const result7 = calculator.calcIncome(1624000);
    expect(result7).toBe(1074000);
    const result8 = calculator.calcIncome(1628000);
    expect(result8).toBe(1076800);
    const result9 = calculator.calcIncome(1777777);
    expect(result9).toBe(1165600);
    const result10 = calculator.calcIncome(1800000);
    expect(result10).toBe(1180000);
    const result11 = calculator.calcIncome(3333333);
    expect(result11).toBe(2252400);
    const result12 = calculator.calcIncome(3600000);
    expect(result12).toBe(2440000);
    const result13 = calculator.calcIncome(5555555);
    expect(result13).toBe(4001600);
    const result14 = calculator.calcIncome(6600000);
    expect(result14).toBe(4840000);
    const result15 = calculator.calcIncome(8000000);
    expect(result15).toBe(6100000);
    const result16 = calculator.calcIncome(8500000);
    expect(result16).toBe(6550000);
  });

  test("課税所得の計算", () => {
    const result = calculator.calcTaxableIncome(3000000, 400000);
    expect(result).toBe(2240000); // 基礎控除,配偶者控除のみ実装
  });

  test("市民税算出所得税の計算", () => {
    const result = calculator.calcCityTaxCalculateIncome(3000000);
    expect(result).toBe(180000);
  });

  test("市民税所得割額の計算1", () => {
    const inputInfo = {
      generalInfo: {
        isWelfareHousehold: false,
        isSingleParentHousehold: false,
        numberOfChildren: 1,
      },
      individualInfoInputList: [
        { employmentIncome: 0 },
        { employmentIncome: 0 },
      ],
    };
    const result = calculator.calcCityTaxIncome(
      5000000,
      2000000,
      inputInfo,
      1000000
    );
    expect(result).toBe(1000000);
  });

  test("市民税所得割額の計算2", () => {
    const inputInfo = {
      generalInfo: {
        isWelfareHousehold: false,
        isSingleParentHousehold: 0,
        numberOfChildren: 1,
      },
      individualInfoInputList: [
        { employmentIncome: 0 },
        { employmentIncome: 0 },
      ],
    };
    const result = calculator.calcCityTaxIncome(4360000, 0, inputInfo, 1000000);
    expect(result).toBe(997500);
  });

  test("市民税所得割額の計算3", () => {
    const inputInfo = {
      generalInfo: {
        isWelfareHousehold: false,
        isSingleParentHousehold: false,
        numberOfChildren: 1,
      },
      individualInfoInputList: [
        { employmentIncome: 0 },
        { employmentIncome: 0 },
      ],
    };
    const result = calculator.calcCityTaxIncome(
      5000000,
      500000,
      inputInfo,
      1000000
    );
    expect(result).toBe(997500);
  });
});
