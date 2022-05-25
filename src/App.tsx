import React, {useState} from 'react';
import style from './_app.module.scss';
import Icon from "./components/atoms/Icon/Icon";
import Modal from "./components/molecules/Modal/Modal";

function App() {
    const [active, setActive] = useState<boolean>(false);
    const handleOpen = () => {
        setActive(true);
    }
    const handleClose = () => {
        setActive(false)
    }
  return (
    <div className={style.app}>
        <Icon onClick={handleOpen} />
        <Modal active={active} onClick={handleClose} />
    </div>
  );
}

export default App;
