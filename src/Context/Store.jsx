import { createContext, useState } from "react";

export const contextStore=createContext({
    onSubmit:()=>{}
})

const Contextapi=({children})=>{
    const [hide,sethide]=useState(false)

    const [a1, seta1] = useState("");
    const [a2, seta2] = useState("");
    const [a3, seta3] = useState("");
    const [a4, seta4] = useState("");

    const Submit=()=>{
        alert("hii")
        sethide(!hide)
    }

    const values={
        onSubmit:Submit,
        a1:a1,
        a2:a2,
        a3:a3,
        a4:a4,
        seta1:seta1,
        seta2:seta2,
        seta3:seta3,
        seta4:seta4
    }

    return <contextStore.Provider value={values}>{children}</contextStore.Provider>
}

export default Contextapi;