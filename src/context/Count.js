import { useContext, createContext, useState } from "react";

const CountContext = createContext();

export default function CountProvider( {children} ) {
    const [ count, setCount ] = useState(0);

    return(
        <CountContext.Provider value={{
            count: count,
            setCount: setCount
        }}>

            {children}

        </CountContext.Provider>
    )
}

export function useCount () {
    const context = useContext(CountContext);
    const { count, setCount } = context;
    return { count, setCount };
}