import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({ value: {},handleClick:() => { }});

export function AuthProvider({ children }) {
    const [value, SetValue] = useState([]);
    
    const handleClick = (e) => {
        //console.log(e);
        const data = [e,...value]
        console.log(data);
        SetValue(data);

    }
        
        
    


    return (
        <AuthContext.Provider value={{ handleClick ,value}} >
            {children}
        </AuthContext.Provider>
    )


    
}
