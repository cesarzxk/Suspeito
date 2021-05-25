import React,{createContext, useEffect, useState} from 'react';

export const SuspeitoContext = createContext();

export const SuspeitoProviders = ({children}) => {

    const [status, setStatus] = useState(false);

    useEffect(()=>{if(status == true){setStatus(false)}},[status])

    return(
        <SuspeitoContext.Provider value={{status, setStatus}}>
            {children}
        </SuspeitoContext.Provider>
    );
}

