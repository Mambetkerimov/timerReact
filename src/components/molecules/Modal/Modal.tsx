import React, {FC, FormEvent, MouseEventHandler, useContext, useState} from 'react';
import style from './_modal.module.scss';
import {Button, Input} from '../../atoms';
import {ModalContext} from "../../../context/ModalContext";

interface IModalProps {
    active: boolean;
    onClick: MouseEventHandler;
}

export const Modal: FC<IModalProps> = ({active, onClick}) => {
    const [pomodoro, setPomodoro] = useState<string>('');
    const [sBreak, setSBreak] = useState<string>('');
    const [lBreak, setLBreak] = useState<string>('');
    const [numberPomodoro, setNumberPomodoro] = useState<string>('');

    const context = useContext(ModalContext);

    const handleSubmit = (e: FormEvent) => {
        context.fields = {
            pomodoro: Number(pomodoro),
            sBreak: Number(sBreak),
            lBreak: Number(lBreak),
            numberPomodoro: Number(numberPomodoro)
        }
        e.preventDefault();
        console.log(context.fields);
    }

    return (
        <>
            {active ?
                <div className={style.modal}>
                    <div className={style.modal_content}>
                        <form onSubmit={handleSubmit}>
                            <Input labelText="Pomodoro" name="pomodoro" value={pomodoro} onChange={(e) => {
                                setPomodoro(e.target.value);
                                console.log(e.target.value)
                            }}/>
                            <Input labelText="Short break" name="sbreak" value={sBreak} onChange={(e) => {
                                setSBreak(e.target.value);
                                console.log(e.target.value)
                            }}/>
                            <Input labelText="Long break" name="lbreak" value={lBreak} onChange={(e) => {
                                setLBreak(e.target.value);
                                console.log(e.target.value)
                            }}/>
                            <Input labelText="Number of pomodoro between break" name="numberpomodoro"
                                   value={numberPomodoro} onChange={(e) => {
                                setNumberPomodoro(e.target.value);
                                console.log(e.target.value)
                            }}/>
                            <div className={style.buttons}>
                                <Button text="Close" onClick={onClick}/>
                                <Button text="Save" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                : null}
        </>
    )
};