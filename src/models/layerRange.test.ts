import { layerSpecifierModel } from "./layerSpecifierModel";

describe("layerSpecifierModel", () => {
  const layerSpecifier = new layerSpecifierModel();

  test("世帯住民税による階層の算出", () => {
    const inputInfo1 = {
      generalInfo: {
        isWelfareHousehold: true,
        isSingleParentHousehold: false,
        numberOfChildren: 1,
      },
      individualInfoInputList: [
        { employmentIncome: 0 },
        { employmentIncome: 0 },
      ],
    };
    const result1 = layerSpecifier.specifyLayer(34999, 0, inputInfo1);
    expect(result1).toBe(1);

    const inputInfo2 = {
      generalInfo: {
        isWelfareHousehold: false,
        isSingleParentHousehold: true,
        numberOfChildren: 1,
      },
      individualInfoInputList: [
        { employmentIncome: 2043999 },
        { employmentIncome: 0 },
      ],
    };
    const result2 = layerSpecifier.specifyLayer(34999, 0, inputInfo2);
    expect(result2).toBe(2);

    const inputInfo3 = {
      generalInfo: {
        isWelfareHousehold: false,
        isSingleParentHousehold: false,
        numberOfChildren: 2,
      },
      individualInfoInputList: [
        { employmentIncome: 1820000 },
        { employmentIncome: 1030000 },
      ],
    };
    const result3 = layerSpecifier.specifyLayer(34999, 1820000, inputInfo3);
    expect(result3).toBe(3);

    const inputInfo4 = {
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
    const result4 = layerSpecifier.specifyLayer(34999, 3000000, inputInfo4);
    expect(result4).toBe(4);
    const result5 = layerSpecifier.specifyLayer(41999, 3000000, inputInfo4);
    expect(result5).toBe(5);
    const result6 = layerSpecifier.specifyLayer(48599, 3000000, inputInfo4);
    expect(result6).toBe(6);
    const result7 = layerSpecifier.specifyLayer(58099, 3000000, inputInfo4);
    expect(result7).toBe(7);
    const result8 = layerSpecifier.specifyLayer(67599, 3000000, inputInfo4);
    expect(result8).toBe(8);
    const result9 = layerSpecifier.specifyLayer(77100, 3000000, inputInfo4);
    expect(result9).toBe(9);
    const result10 = layerSpecifier.specifyLayer(86999, 3000000, inputInfo4);
    expect(result10).toBe(10);
    const result11 = layerSpecifier.specifyLayer(96999, 3000000, inputInfo4);
    expect(result11).toBe(11);
    const result12 = layerSpecifier.specifyLayer(102599, 3000000, inputInfo4);
    expect(result12).toBe(12);
    const result13 = layerSpecifier.specifyLayer(110899, 3000000, inputInfo4);
    expect(result13).toBe(13);
    const result14 = layerSpecifier.specifyLayer(124999, 3000000, inputInfo4);
    expect(result14).toBe(14);
    const result15 = layerSpecifier.specifyLayer(138599, 3000000, inputInfo4);
    expect(result15).toBe(15);
    const result16 = layerSpecifier.specifyLayer(168999, 3000000, inputInfo4);
    expect(result16).toBe(16);
    const result17 = layerSpecifier.specifyLayer(174599, 3000000, inputInfo4);
    expect(result17).toBe(17);
    const result18 = layerSpecifier.specifyLayer(211200, 3000000, inputInfo4);
    expect(result18).toBe(18);
    const result19 = layerSpecifier.specifyLayer(300999, 3000000, inputInfo4);
    expect(result19).toBe(19);
    const result20 = layerSpecifier.specifyLayer(357999, 3000000, inputInfo4);
    expect(result20).toBe(20);
    const result21 = layerSpecifier.specifyLayer(396999, 3000000, inputInfo4);
    expect(result21).toBe(21);
    const result22 = layerSpecifier.specifyLayer(397000, 3000000, inputInfo4);
    expect(result22).toBe(22);
  });
});
