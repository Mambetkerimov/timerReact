import React, {FC, MouseEventHandler} from 'react';
import style  from "./_button.module.scss";

interface IButtonProps {
    text: string;
    onClick?: MouseEventHandler;
}

const Button: FC<IButtonProps> = ({ text }) => {
    return (
        <button className={style.button}>{text}</button>
    );
};

export default Button;