import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const ModeContext = createContext();

export function useMode() {
    return useContext(ModeContext);
}

function ModeProvider({ children }) {
    /* useState */
    const [darkMode, setDarkMode] = useState('');

    /* useEffect */
    useEffect(() => {
        let mode = window.localStorage.getItem('isDarkMode');
        if (mode === null) {
            //localStorage가 없다 = 첫 방문

            /* 초기 테마 설정 (시스템 테마 감지) */
            mode =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
        }

        const html = document.documentElement;

        html.classList.remove('sl-theme-light', 'sl-theme-dark');
        html.classList.add(`sl-theme-${mode}`);

        window.localStorage.setItem('isDarkMode', mode);

        setDarkMode(mode);
    }, []);

    /* function */
    const setTheme = (mode) => {
        const html = document.documentElement;

        html.classList.remove('sl-theme-light', 'sl-theme-dark');
        html.classList.add(`sl-theme-${mode}`);

        window.localStorage.setItem('isDarkMode', mode);

        setDarkMode(mode);
    };

    const value = {
        darkMode,
        setDarkMode,
        setTheme,
    };

    return (
        <>
            <ModeContext.Provider value={value}>
                {children}
            </ModeContext.Provider>
        </>
    );
}

export default ModeProvider;
