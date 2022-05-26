import React, {ButtonHTMLAttributes, FC, FormEventHandler, MouseEventHandler} from 'react';
import style  from "./_button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    onClick?: MouseEventHandler;
    type?: 'submit' | 'reset' | 'button';
    onSubmit?: FormEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButtonProps> = ({ text, onClick, type, onSubmit }) => {
    return (
        <button className={style.button} onClick={onClick} type={type} onSubmit={onSubmit}>{text}</button>
    );
};