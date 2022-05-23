import React, {FC} from 'react';
import style from './_modal.module.scss';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

interface IModalProps {
    active: boolean;

}

const Modal: FC<IModalProps> = ({active}) => {

    return (
        <>
            <div className={active ? style.modal_active : style.modal}>
                <div className={style.modal_content}>
                    <Input labelText="Pomodoro" />
                    <Input labelText="Short break" />
                    <Input labelText="Long break" />
                    <Input labelText="Number of pomodoro between break" />
                    <div className={style.buttons}>
                        <Button text="Close"  />
                        <Button text="Save" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;