import React, {useState} from 'react';
import style from './_app.module.scss';
import Icon from "./components/atoms/Icon/Icon";
import Modal from "./components/molecules/Modal/Modal";

function App() {
    const [active, setActive] = useState<boolean>(false);
    const handleOpen = () => {
        setActive(true);
        console.log("is working");
    }
  return (
    <div className={style.app}>
        <Icon onClick={handleOpen} />
        <Modal active={active} />
    </div>
  );
}

export default App;
