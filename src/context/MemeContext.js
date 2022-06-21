import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MemeContext = createContext({
    memeTemplatesContext: [],
    setMemeTemplatesContext: () => { },
    currentTemplateContext: [],
    setCurrentTemplateContext: () => { },
    createdMemeContext: [],
    setCreatedMemeContext: () => { }
});

export const MemeContextProvider = ({ children }) => {
    const [memeTemplatesContext, setMemeTemplatesContext] = useState([]);
    const [currentTemplateContext, setCurrentTemplateContext] = useState([]);
    const [createdMemeContext, setCreatedMemeContext] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.imgflip.com/get_memes")
            .then(res => {
                setMemeTemplatesContext(res.data.data.memes);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    const value = {
        memeTemplatesContext,
        setMemeTemplatesContext,
        currentTemplateContext,
        setCurrentTemplateContext,
        createdMemeContext,
        setCreatedMemeContext
    };

    return (
        <MemeContext.Provider value={value}>{children}</MemeContext.Provider>
    )
}