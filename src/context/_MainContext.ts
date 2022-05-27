import {createContext} from "react";

interface IFieldProps {
    pomodoro: number;
    sBreak: number;
    lBreak: number;
    numberPomodoro: number
}

interface IContext {
    fields: IFieldProps;
    isPlaying: boolean;
    loop: any
}

interface IAction {
    type: string;
    payload?: any;
}

enum Actions {
    WORK_BACKGROUND = "WORK_BACKGROUND",
    REST_BACKGROUND = "REST_BACKGROUND"
}

const initialValue = {
    fields: {
        pomodoro: 0,
        sBreak: 0,
        lBreak: 0,
        numberPomodoro: 0
    },
    isPlaying: false,
    loop: "work"
};

export const reducer = (state = initialValue, action: IAction) => {
    switch (action.type) {
        case Actions.WORK_BACKGROUND:
            return {...state, loop: 'work'}
        case Actions.REST_BACKGROUND:
            return {...state, loop: 'rest'}
        default:
            return state
    }
}

const MainContext = createContext<IContext>(initialValue);
export {initialValue, MainContext};