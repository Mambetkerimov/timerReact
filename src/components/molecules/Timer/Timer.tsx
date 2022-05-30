import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { IContext, IFieldProps } from "../../../types";
import { Button } from "../../atoms";
import style from "./_timer.module.scss";
import { RenderTime } from "./fragment";

interface ITimer {
  formFields: IFieldProps;
  setLoopContext: Dispatch<SetStateAction<IContext>>;
}

/**
 * Компонент таймера
 *
 * @param {IFieldProps} formFields - поля формы из которых дергаются значения
 * @param {Dispatch<SetStateAction<IContext>>} setLoopContext - сеттера для изменения фона
 * @returns {FC<ITimer>} - JSX
 */

export const Timer: FC<ITimer> = ({ formFields, setLoopContext }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlaying = (): void => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleDone = (): void => {
    setLoopContext((prevState: IContext) => ({
      ...prevState,
      loop: "rest",
    }));
  };

  return (
    <div className={style.timer_wrapper}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={Number(formFields.pomodoro) * 60}
        colors="#bfbfbf"
        trailColor="#fafafa"
        strokeWidth={3}
        onComplete={() => handleDone()}
      >
        {RenderTime}
      </CountdownCircleTimer>
      <div className={style.buttons}>
        <Button onClick={handlePlaying} text={isPlaying ? `Pause` : `Start`} />
      </div>
    </div>
  );
};
