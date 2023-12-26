import { createContext, useState } from "react";

export const contexto = createContext();

export default function ContextoGlobal({ children }) {

    const [token, setToken] = useState();

    return (
        <contexto.Provider value={{ token, setToken }}>
            {children}
        </contexto.Provider>
    )

}