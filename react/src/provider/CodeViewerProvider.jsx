import React, { createContext, useContext, useCallback } from 'react';

const CodeViewerContext = createContext();

export function useCode() {
    return useContext(CodeViewerContext);
}

function CodeViewerProvider({ children }) {
    const highlight = useCallback(() => {
        if (window.Prism) {
            window.Prism.highlightAll();
        }
    }, []);

    const value = {
        highlight,
    };

    return (
        <CodeViewerContext.Provider value={value}>
            {children}
        </CodeViewerContext.Provider>
    );
}

export default CodeViewerProvider;
