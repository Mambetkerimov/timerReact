import React, {
  ButtonHTMLAttributes,
  FC,
  FormEventHandler,
  MouseEventHandler,
} from "react";
import style from "./_button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  onSubmit?: FormEventHandler<HTMLButtonElement>;
}

/**
 * Компонент кнопки
 *
 * @param {string} text - Текст кнопки
 * @param {MouseEventHandler} onClick - ивент на нажатие кнопки
 * @param {"submit" | "reset" | "button"} type - тип кнопки
 * @param {FormEventHandler<HTMLButtonElement>} onSubmit - ивент на сабмит
 * @returns {FC<IButtonProps>} - JSX
 */

export const Button: FC<IButtonProps> = ({ text, onClick, type, onSubmit }) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
      type={type}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
};
