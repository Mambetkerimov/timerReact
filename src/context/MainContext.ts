import {createContext} from "react";

interface IContext {
    isPlaying: boolean;
    loop: any;
}

export const initialMainValue = {
    isPlaying: false,
    loop: "work"
}

export const MainContext = createContext<IContext>(initialMainValue);