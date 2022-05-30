interface IFieldProps {
  pomodoro: string;
  sBreak: string;
  lBreak: string;
  numberPomodoro: string;
}

interface IContext {
  formFields: IFieldProps;
  isPlaying: boolean;
  loop: "rest" | "work";
}

export type { IFieldProps, IContext };
