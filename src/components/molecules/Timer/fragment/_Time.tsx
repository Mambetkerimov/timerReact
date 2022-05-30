import React from "react";

import { getPadTime } from "../../../../helpers";
import style from "./_time.module.scss";

const RenderTime = ({ remainingTime }: any) => {
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

export { RenderTime };
