import { useState } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { isEnvBrowser } from "../utils/misc";

export const App = () => {
    const [ textOnScreen, setTextOnScreen ] = useState(isEnvBrowser() ? "Eu sou um texto teste" : ""); 

    useNuiEvent<string>("hud:setTextOnScreen", setTextOnScreen)

    return (
        <div
            className="w-screen h-screen m-0 bg-black text-white flex items-center justify-center"
        >
            { textOnScreen }
        </div>
    )
}