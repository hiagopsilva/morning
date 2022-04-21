/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { STATUS_CODE, translate } from "~/utils";
import flashMessage from "./flashMessage";

export const handleResponseError = (
  error: any,
  callback = (args?: any): any => args
): void => {
  const codeError = error.response.data.code;

  const callbacks = [""];

  const errorHandled = callbacks.find((element) => element === codeError)
    ? codeError
    : "";

  if (errorHandled) {
    callback({ code: errorHandled });
    return;
  }

  if (codeError) {
    flashMessage({
      type: "info",
      title: "Erro, tente novamente",
      description: "",
    });
  }
};
