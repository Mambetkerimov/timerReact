import React, {FC, useContext, useState} from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import style from './_timer.module.scss';
import {getPadTime} from "../../../helpers/getPadTime";
import {ModalContext} from "../../../context/ModalContext";
import {Button} from "../../atoms";
import {MainContext} from "../../../context";

export const Timer: FC = () => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const {fields: {pomodoro}} = useContext(ModalContext);
    const context = useContext(MainContext);

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

    return (
        <>
            <div className={style.timer_wrapper}>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={pomodoro}
                    colors='#bfbfbf'
                    trailColor='#fafafa'
                    strokeWidth={3}
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
