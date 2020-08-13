import React, { useReducer, createContext, useContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const globalReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                currentTheme: action.theme
            }
        }
        default: {
            throw new Error(`Unhandled action type ${action.type}`);
        }
    }
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: window.localStorage.getItem('theme') || 'dark'
    });
    
    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
};

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

export const useGlobalStateContext = () => useContext(GlobalStateContext);
