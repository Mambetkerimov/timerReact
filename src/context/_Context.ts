import { createContext, Dispatch, SetStateAction } from "react";

import { IContext } from "../types";

const initialContextValue: IContext = {
  formFields: {
    pomodoro: "",
    sBreak: "",
    lBreak: "",
    numberPomodoro: "",
  },
  isPlaying: false,
  loop: "work",
  shouldRepeat: true,
};

const Context = createContext<{
  context: IContext;
  setContext: Dispatch<SetStateAction<IContext>>;
}>({
  context: initialContextValue,
  setContext: () => {},
});

export { initialContextValue, Context };
