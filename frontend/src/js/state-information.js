const { atom } = require("recoil");

export const dmReceiverState = atom({
  key: "dmReceiverState",
  default: "",
});

export const isShowDMFormState = atom({
  key: "isShowDMFormState",
  default: false,
});
