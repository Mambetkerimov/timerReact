import React, { FC, useEffect, useState } from "react";

import { backgroundColor } from "./_constants";
import style from "./_theme_provider.module.scss";

interface IThemeProvider {
  loopContext: string;
  children: JSX.Element | JSX.Element[];
}

/**
 *  Обертка темизации
 *
 * @param {string} loopContext - контекст фона
 * @param {JSX.Element | JSX.Element[]} children - JSX элементы
 * @returns {FC<IThemeProvider>} - JSX
 */

const ThemeProvider: FC<IThemeProvider> = ({ loopContext, children }) => {
  const [background, setBackground] = useState(backgroundColor.work);

  useEffect(() => {
    if (loopContext !== "work") {
      setBackground(backgroundColor.rest);
    } else {
      setBackground(backgroundColor.work);
    }
  }, [loopContext]);

  return (
    <div className={style.app} style={{ backgroundImage: background }}>
      {children}
    </div>
  );
};

export { ThemeProvider };
