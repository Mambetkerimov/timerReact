import React, {useContext, useEffect, useState} from 'react';

import {Icon, Modal, Timer} from './components';
import style from './_app.module.scss';
import {initialValue, MainContext} from "./context";

function App() {
    const backgroundColor = {
        work: 'linear-gradient(90deg, #F78CA0 0%, #F9748F 20.31%, #FD868C 66.67%, #FE9A8B 100%)',
        rest: 'linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)'
    }

    const {loop} = useContext(MainContext);
    const [active, setActive] = useState<boolean>(false);
    const [background, setBackground] = useState(backgroundColor.work);
    const [context, setContext] = useState(initialValue);

    useEffect(() => {
        if (loop === "rest") {
            setBackground(backgroundColor.rest)
        } else {
            setBackground(backgroundColor.work)
        }
        console.log(context);
    }, [loop])

    const handleModal = () => {
        setActive(prevState => !prevState)
    }

    return (
        <MainContext.Provider value={context}>
            <div className={style.app} style={{background: background}}>
                <Icon onClick={handleModal}/>
                <Modal active={active} onClick={handleModal}/>
                <Timer setContext={setContext}/>
            </div>
        </MainContext.Provider>
    );
}

export default App;
