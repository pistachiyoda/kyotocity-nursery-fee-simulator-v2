import { GeneralInfoInput } from "./inputModel/generalInfoInput";
import { InputInfo } from "./inputModel/inputInfoModel";
import { layerRange } from "./layerRange";
import { Output } from "./outputModel";

export class layerSpecifierModel {
  specifyLayer(
    familyCityTax: number,
    income: number,
    inputInfo: InputInfo
  ): layerRange {
    if (inputInfo.generalInfo.isWelfareHousehold) return 1;
    if (
      inputInfo.generalInfo.isSingleParentHousehold &&
      inputInfo.individualInfoInputList[0].employmentIncome < 2044000
    )
      return 2;
    if (
      inputInfo.individualInfoInputList[1].employmentIncome <= 1030000 &&
      income <= 350000 * (2 + inputInfo.generalInfo.numberOfChildren) + 420000
    )
      return 3;
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

  // 保育標準時間は9時間で計算
  // [保育園（所）・幼保連携型及び保育所型認定子供園, 小規模保育事業所・幼稚園型認定こども園
  specifyNurseryFee = (layer: number): [number, number, number] => {
    if (layer === 1) return [0, 0, 0];
    if (layer === 2) return [0, 0, 0];
    if (layer === 3) return [4100, 3800, 3800];
    if (layer === 4) return [6600, 5800, 6100];
    if (layer === 5) return [7400, 6400, 6800];
    if (layer === 6) return [7800, 6700, 7200];
    if (layer === 7) return [13800, 12500, 12700];
    if (layer === 8) return [17600, 15100, 16200];
    if (layer === 9) return [21700, 18700, 20000];
    if (layer === 10) return [22800, 20500, 21000];
    if (layer === 11) return [23800, 23600, 22000];
    if (layer === 12) return [24900, 24700, 23000];
    if (layer === 13) return [31200, 28400, 28800];
    if (layer === 14) return [32300, 31600, 29800];
    if (layer === 15) return [33100, 32900, 30600];
    if (layer === 16) return [39200, 35800, 36200];
    if (layer === 17) return [45200, 37000, 41700];
    if (layer === 18) return [51600, 38900, 47600];
    if (layer === 19) return [53400, 40300, 49300];
    if (layer === 20) return [61600, 43400, 56900];
    if (layer === 21) return [67100, 46600, 61900];
    if (layer === 22) return [83100, 58000, 76700];
    return [0, 0, 0];
  };

  // 子どもはぐくみ応援額
  // 保育標準時間は9時間で計算
  // [保育園（所）、幼保連携型及び保育所型認定子供園, 小規模,幼稚園型認定こども園
  specifyMitigatedNurseryFee = (layer: number): [number, number, number] => {
    if (layer === 1) return [0, 0, 0];
    if (layer === 2) return [0, 0, 0];
    if (layer === 3) return [1700, 1500, 1600];
    if (layer === 4) return [3000, 2600, 2800];
    if (layer === 5) return [3000, 2600, 2800];
    if (layer === 6) return [3000, 2600, 2800];
    if (layer === 7) return [5800, 5000, 5400];
    if (layer === 8) return [6800, 5900, 6300];
    if (layer === 9) return [8400, 7300, 7800];
    if (layer === 10) return [8400, 7300, 7800];
    if (layer === 11) return [8400, 7300, 7800];
    if (layer === 12) return [8400, 7300, 7800];
    if (layer === 13) return [10900, 9400, 10100];
    if (layer === 14) return [10900, 9400, 10100];
    if (layer === 15) return [10900, 9400, 10100];
    if (layer === 16) return [13900, 12000, 12800];
    if (layer === 17) return [13900, 12000, 12800];
    if (layer === 18) return [19700, 17000, 18200];
    if (layer === 19) return [19700, 17000, 18200];
    if (layer === 20) return [20700, 17900, 19100];
    if (layer === 21) return [21100, 18200, 19500];
    if (layer === 22) return [26500, 22800, 24500];
    return [0, 0, 0];
  };

  // 階層と家族情報からその家族の２歳以下の子供の保育料を計算して２次元配列で返す
  specifyFamilyNurseryFee(
    layer: number,
    familyGeneralInfo: GeneralInfoInput
  ): number[][] {
    return [
      [1000, 2000, 3000],
      [1500, 2500, 3500],
    ];
  }
}
