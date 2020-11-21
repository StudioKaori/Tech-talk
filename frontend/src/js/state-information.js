const { atom } = require("recoil");

export const userState = atom({
  key: "userState",
  default: "",
});

export const dmReceiverState = atom({
  key: "dmReceiverState",
  default: "",
});

export const isShowDMFormState = atom({
  key: "isShowDMFormState",
  default: false,
});
