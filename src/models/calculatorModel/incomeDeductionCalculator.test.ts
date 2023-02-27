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

  test("配偶者特別控除の計算", () => {
    const result1 = calculator.calcSpouseSpecialDeduction(500000, 5000000);
    expect(result1).toBe(0);
    const result2 = calculator.calcSpouseSpecialDeduction(10000001, 500000);
    expect(result2).toBe(0);
    const result3 = calculator.calcSpouseSpecialDeduction(5000000, 480000);
    expect(result3).toBe(0);
    const result4 = calculator.calcSpouseSpecialDeduction(5000000, 1330001);
    expect(result4).toBe(0);
    // 本人の合計所得金額900万円以下
    const result5 = calculator.calcSpouseSpecialDeduction(9000000, 1000000);
    expect(result5).toBe(330000);
    const result6 = calculator.calcSpouseSpecialDeduction(9000000, 1050000);
    expect(result6).toBe(310000);
    const result7 = calculator.calcSpouseSpecialDeduction(9000000, 1100000);
    expect(result7).toBe(260000);
    const result8 = calculator.calcSpouseSpecialDeduction(9000000, 1150000);
    expect(result8).toBe(210000);
    const result9 = calculator.calcSpouseSpecialDeduction(9000000, 1200000);
    expect(result9).toBe(160000);
    const result10 = calculator.calcSpouseSpecialDeduction(9000000, 1250000);
    expect(result10).toBe(110000);
    const result11 = calculator.calcSpouseSpecialDeduction(9000000, 1300000);
    expect(result11).toBe(60000);
    const result12 = calculator.calcSpouseSpecialDeduction(9000000, 1330000);
    expect(result12).toBe(30000);
    // 本人の合計所得金額950万円以下
    const result13 = calculator.calcSpouseSpecialDeduction(9500000, 1000000);
    expect(result13).toBe(220000);
    const result14 = calculator.calcSpouseSpecialDeduction(9500000, 1050000);
    expect(result14).toBe(210000);
    const result15 = calculator.calcSpouseSpecialDeduction(9500000, 1100000);
    expect(result15).toBe(180000);
    const result16 = calculator.calcSpouseSpecialDeduction(9500000, 1150000);
    expect(result16).toBe(140000);
    const result17 = calculator.calcSpouseSpecialDeduction(9500000, 1200000);
    expect(result17).toBe(110000);
    const result18 = calculator.calcSpouseSpecialDeduction(9500000, 1250000);
    expect(result18).toBe(80000);
    const result19 = calculator.calcSpouseSpecialDeduction(9500000, 1300000);
    expect(result19).toBe(40000);
    const result20 = calculator.calcSpouseSpecialDeduction(9500000, 1330000);
    expect(result20).toBe(20000);
    // 本人の合計所得金額1000万円以下
    const result22 = calculator.calcSpouseSpecialDeduction(10000000, 1050000);
    expect(result22).toBe(110000);
    const result23 = calculator.calcSpouseSpecialDeduction(10000000, 1100000);
    expect(result23).toBe(90000);
    const result24 = calculator.calcSpouseSpecialDeduction(10000000, 1150000);
    expect(result24).toBe(70000);
    const result25 = calculator.calcSpouseSpecialDeduction(10000000, 1200000);
    expect(result25).toBe(60000);
    const result26 = calculator.calcSpouseSpecialDeduction(10000000, 1250000);
    expect(result26).toBe(40000);
    const result27 = calculator.calcSpouseSpecialDeduction(10000000, 1300000);
    expect(result27).toBe(20000);
    const result28 = calculator.calcSpouseSpecialDeduction(10000000, 1330000);
    expect(result28).toBe(10000);
  });
});
