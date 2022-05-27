import React, {FC, useReducer, useState} from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import style from './_timer.module.scss';
import {getPadTime} from "../../../helpers/getPadTime";
import {initialValue, reducer} from "../../../context";
import {Button} from "../../atoms";

interface ITimerProps {
    setContext: any;
}

export const Timer: FC<ITimerProps> = () => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, initialValue)

    const renderTime = ({remainingTime}: any) => {
        const minutes = getPadTime(Math.floor(remainingTime / 60));
        const seconds = getPadTime(remainingTime - minutes * 60);
        return (
            <div className={style.timer}>
                <div className={style.time}>{minutes}</div>
                <span className={style.time}>:</span>
                <div className={style.time}>{seconds}</div>
            </div>
        );
    };

    const handlePlaying = () => {
        setIsPlaying(prevState => !prevState)
    };

    const handleDone = () => {
        dispatch({type: 'REST_BACKGROUND'});
    }

    return (
        <>
            <div className={style.timer_wrapper}>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={state.fields.pomodoro}
                    colors='#bfbfbf'
                    trailColor='#fafafa'
                    strokeWidth={3}
                    onComplete={() => handleDone()}
                >
                    {renderTime}
                </CountdownCircleTimer>
                <div className={style.buttons}>
                    <Button text={isPlaying ? `Pause` : `Start`} onClick={handlePlaying}/>
                </div>
            </div>
        </>
    );
};
