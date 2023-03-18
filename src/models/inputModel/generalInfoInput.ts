import { Family } from "../family";

export type GeneralInfoInput = {
  isWelfareHousehold: boolean;
  isSingleParentHousehold: boolean | Family;
  numberOfChildren: number;
  ageOfChildren: number[];
};
