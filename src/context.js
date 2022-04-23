import { createContext, useState } from "react";

export const MemesContext = createContext({
    memeTemplates: [],
    setMemeTemplates: () => [] 
})

export const MemesProvider = ({children}) => {
    const [memeTemplates, setMemeTemplates] = useState([]);
    const value = { memeTemplates, setMemeTemplates};

    return <MemesContext.Provider value={value}>{children}</MemesContext.Provider>
}