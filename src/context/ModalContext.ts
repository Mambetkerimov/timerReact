import {createContext} from "react";

interface IFieldProps {
    pomodoro: number;
    sBreak: number;
    lBreak: number;
    numberPomodoro: number;
}

interface IContext {
    fields: IFieldProps;
}

export const initialModalValue = {
    fields: {
        pomodoro: 0,
        sBreak: 0,
        lBreak: 0,
        numberPomodoro: 0
    }
}

export const ModalContext = createContext<IContext>(initialModalValue);