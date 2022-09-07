import { atom } from "recoil";

export const inputTitleState = atom<string>({
  key: "inputTileState",
  default: "",
});
