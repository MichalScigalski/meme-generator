import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MemeTemplatesContext = createContext({
    memeTemplatesContext: [],
    setMemeTemplatesContext: () => { }
});

export const MemeTemplatesContextProvider = ({ children }) => {
    const [memeTemplatesContext, setMemeTemplatesContext] = useState([]);

    useEffect(()=>{
        axios
        .get("https://api.imgflip.com/get_memes")
        .then(res => {
            setMemeTemplatesContext(res.data.data.memes);
        })
        .catch(err => {
            console.log(err);
        });
    },[])

    const value = { memeTemplatesContext, setMemeTemplatesContext };
    return (
        <memeTemplatesContext.Provider value={value}>{children}</memeTemplatesContext.Provider>
    )
}