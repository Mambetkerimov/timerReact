import React, {FC, MouseEventHandler} from 'react';
import style from './_modal.module.scss';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

interface IModalProps {
    active: boolean;
    onClick: MouseEventHandler;
}

const Modal: FC<IModalProps> = ({active, onClick}) => {

    return (
        <>
            {active ?
                <div className={style.modal}>
                    <div className={style.modal_content}>
                        <Input labelText="Pomodoro" />
                        <Input labelText="Short break" />
                        <Input labelText="Long break" />
                        <Input labelText="Number of pomodoro between break" />
                        <div className={style.buttons}>
                            <Button text="Close" onClick={onClick} />
                            <Button text="Save" />
                        </div>
                    </div>
                </div>
            : null }
        </>
    )
};

export default Modal;