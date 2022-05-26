import React, {FC, InputHTMLAttributes} from 'react';
import style from './_input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
}

export const Input: FC<IInputProps> = ({labelText, value, onChange}) => {
    return (
        <>
            <label className={style.label}>{labelText}</label>
            <input className={style.input} value={value} onChange={onChange}/>
        </>
    );
};