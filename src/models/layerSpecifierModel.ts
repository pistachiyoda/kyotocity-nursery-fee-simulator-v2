import { layerRange } from "./layerRange";

export class layerSpecifierModel {
  specifyLayer(familyCityTax: number): layerRange {
    // 生活保護世帯かどうか-> 1
    // 給与所得 204万未満-> 2
    // 給与所得と配偶者+不要者の人数 ->3
    if (familyCityTax <= 34999) return 4;
    if (familyCityTax <= 41999) return 5;
    if (familyCityTax <= 48599) return 6;
    if (familyCityTax <= 58099) return 7;
    if (familyCityTax <= 67599) return 8;
    if (familyCityTax <= 77100) return 9;
    if (familyCityTax <= 86999) return 10;
    if (familyCityTax <= 96999) return 11;
    if (familyCityTax <= 102599) return 12;
    if (familyCityTax <= 110899) return 13;
    if (familyCityTax <= 124999) return 14;
    if (familyCityTax <= 138599) return 15;
    if (familyCityTax <= 168999) return 16;
    if (familyCityTax <= 174999) return 17;
    if (familyCityTax <= 211200) return 18;
    if (familyCityTax <= 300999) return 19;
    if (familyCityTax <= 357999) return 20;
    if (familyCityTax <= 396999) return 21;
    return 22;
  }
}
