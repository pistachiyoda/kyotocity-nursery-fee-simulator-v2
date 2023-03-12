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
}
