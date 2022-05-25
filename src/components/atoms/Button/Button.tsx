import React, {FC, MouseEventHandler} from 'react';
import style  from "./_button.module.scss";

interface IButtonProps {
    text: string;
    onClick?: MouseEventHandler;
}

const Button: FC<IButtonProps> = ({ text, onClick }) => {
    return (
        <button className={style.button} onClick={onClick}>{text}</button>
    );
};

export default Button;