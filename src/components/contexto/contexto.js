import { createContext, useState } from "react";

export const contexto = createContext();

export default function ContextoGlobal({ children }) {

    const [user, setUser] = useState("user");

    return (
        <contexto.Provider value={{ user, setUser }}>
            {children}
        </contexto.Provider>
    )

}