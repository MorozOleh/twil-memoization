import { printLogType } from "@/types/utils";

export const printLog: printLogType = (value, color) => {
  console.log(`%c${value}`, `color: ${color}`);
};
