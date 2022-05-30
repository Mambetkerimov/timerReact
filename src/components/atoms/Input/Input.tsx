import React, { FC, Fragment, InputHTMLAttributes } from "react";

import style from "./_input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

/**
 * Компонент инпута
 *
 * @param {string} labelText - Текст label для инпута
 * @param {MouseEventHandler} onChange - ивент на изменения инпута
 * @param {string} value - значение инпута
 * @param {string} name - уникальное название инпута
 * @returns {FC<IInputProps>} - JSX
 */

export const Input: FC<IInputProps> = ({
  labelText,
  value,
  onChange,
  name,
}) => (
  <Fragment>
    <label className={style.label}>{labelText}</label>
    <input
      className={style.input}
      name={name}
      value={value}
      onChange={onChange}
    />
  </Fragment>
);
