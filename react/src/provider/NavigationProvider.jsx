import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateContext = createContext();

export function useNavigation() {
    return useContext(NavigateContext);
}

function NavigationProvider({ children }) {
    /* navigate */
    const navigate = useNavigate();

    /* function */
    const goTo = (address) => {
        navigate(address);
    };

    const value = {
        goTo,
    };

    return (
        <>
            <NavigateContext.Provider value={value}>
                {children}
            </NavigateContext.Provider>
        </>
    );
}

export default NavigationProvider;
