import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEventHandler,
  Fragment,
  SetStateAction,
  useState,
} from "react";

import { IFieldProps } from "../../../types";
import { Button, Icon, Input } from "../../atoms";
import style from "./_modal.module.scss";

interface IModalProps {
  formFields: IFieldProps;
  setFormFields: Dispatch<SetStateAction<IFieldProps>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

/**
 * Модальное окно
 *
 * @param {IFieldProps} formFields - Данные полей ввода
 * @param {any} setFormFields - Сеттер изменения полей ввода
 * @param {FormEventHandler<HTMLFormElement>} handleSubmit - Событие обработки формы
 * @returns {FC<IModalProps>} - JSX
 */
export const Modal: FC<IModalProps> = ({
  handleSubmit,
  formFields: { pomodoro, numberPomodoro, sBreak, lBreak },
  setFormFields,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleIsOpenModal = (): void => {
    setIsOpenModal((prevState) => !prevState);
  };

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setFormFields((prevState: IFieldProps) => ({
      ...prevState,
      [event.target.name]: event.target.value.replace(/\D/g, ""),
    }));
  }

  return (
    <Fragment>
      <Icon onClick={handleIsOpenModal} />
      {isOpenModal && (
        <div className={style.modal}>
          <div className={style.modal_content}>
            <form onSubmit={handleSubmit}>
              <Input
                name="pomodoro"
                value={pomodoro}
                labelText="Pomodoro"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChange(event)
                }
              />
              <Input
                name="sBreak"
                labelText="Short break"
                value={sBreak}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChange(event)
                }
              />
              <Input
                name="lBreak"
                labelText="Long break"
                value={lBreak}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChange(event)
                }
              />
              <Input
                name="numberPomodoro"
                labelText="Number of pomodoro between break"
                value={numberPomodoro}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChange(event)
                }
              />
              <div className={style.buttons}>
                <Button text="Close" onClick={handleIsOpenModal} />
                <Button text="Save" type="submit" onClick={handleIsOpenModal} />
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};
