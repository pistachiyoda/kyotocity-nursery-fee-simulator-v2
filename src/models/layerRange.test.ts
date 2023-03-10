import { layerSpecifierModel } from "./layerSpecifierModel";

describe("layerSpecifierModel", () => {
  const layerSpecifier = new layerSpecifierModel();

  test("世帯住民税による階層の算出", () => {
    const result4 = layerSpecifier.specifyLayer(34999);
    expect(result4).toBe(4);
    const result5 = layerSpecifier.specifyLayer(41999);
    expect(result5).toBe(5);
    const result6 = layerSpecifier.specifyLayer(48599);
    expect(result6).toBe(6);
    const result7 = layerSpecifier.specifyLayer(58099);
    expect(result7).toBe(7);
    const result8 = layerSpecifier.specifyLayer(67599);
    expect(result8).toBe(8);
    const result9 = layerSpecifier.specifyLayer(77100);
    expect(result9).toBe(9);
    const result10 = layerSpecifier.specifyLayer(86999);
    expect(result10).toBe(10);
    const result11 = layerSpecifier.specifyLayer(96999);
    expect(result11).toBe(11);
    const result12 = layerSpecifier.specifyLayer(102599);
    expect(result12).toBe(12);
    const result13 = layerSpecifier.specifyLayer(110899);
    expect(result13).toBe(13);
    const result14 = layerSpecifier.specifyLayer(124999);
    expect(result14).toBe(14);
    const result15 = layerSpecifier.specifyLayer(138599);
    expect(result15).toBe(15);
    const result16 = layerSpecifier.specifyLayer(168999);
    expect(result16).toBe(16);
    const result17 = layerSpecifier.specifyLayer(174599);
    expect(result17).toBe(17);
    const result18 = layerSpecifier.specifyLayer(211200);
    expect(result18).toBe(18);
    const result19 = layerSpecifier.specifyLayer(300999);
    expect(result19).toBe(19);
    const result20 = layerSpecifier.specifyLayer(357999);
    expect(result20).toBe(20);
    const result21 = layerSpecifier.specifyLayer(396999);
    expect(result21).toBe(21);
    const result22 = layerSpecifier.specifyLayer(397000);
    expect(result22).toBe(22);
  });
});
