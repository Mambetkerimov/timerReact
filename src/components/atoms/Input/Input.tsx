import React, {ChangeEvent, FC} from 'react';
import style from './_input.module.scss';

interface IInputProps {
    onChange?: void;
    labelText: string
}

const Input: FC<IInputProps> = ({ labelText, onChange }) => {
    return (
        <>
            <label className={style.label}>{labelText}</label>
            <input className={style.input} />
        </>
    );
};

export default Input;