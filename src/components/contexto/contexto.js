import { createContext, useState } from "react";

export const contexto = createContext();

export default function ContextoGlobal({ children }) {

    const [token, setToken] = useState('');
    const [currencyCode, setCurrencyCode] = useState('');

    return (
        <contexto.Provider value={{ token, setToken, currencyCode, setCurrencyCode }}>
            {children}
        </contexto.Provider>
    )

}