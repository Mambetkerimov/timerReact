import React, {useContext, useState} from 'react';

import {Icon, Modal, Timer} from './components';
import style from './_app.module.scss';
import {initialMainValue, initialModalValue, MainContext, ModalContext} from "./context";

function App() {
    const [active, setActive] = useState<boolean>(false);
    const handleModal = () => {
        setActive(prevState => !prevState)
    }

    const {loop} = useContext(MainContext);

    const workBackground = 'linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)';
    const restBackground = 'linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)';

    return (
        <MainContext.Provider value={initialMainValue}>
            <div className={style.app} style={{background: loop === "work" ? workBackground : restBackground}}>
                <Icon onClick={handleModal}/>
                <ModalContext.Provider value={initialModalValue}>
                    <Modal active={active} onClick={handleModal}/>
                </ModalContext.Provider>
                <Timer/>
            </div>
        </MainContext.Provider>
    );
}

export default App;
