import React, { createContext, useState } from 'react'

interface issueDetail {
    id: Number,
    title: string,
    description: string,
    dated: string,
    sender: string,
    resolved: boolean,
}

export const AppContext = createContext<undefined>(undefined)

export const AppProvider = (props: { children: React.ReactNode }) => {

    const [issueDetail, setIssueDetail] = useState<issueDetail>({
        id: 0,
        title: "",
        description: "",
        dated: "",
        sender: "",
        resolved: false
    })
    
    return (

        <>
        </>
        // <AppContext.Provider>
            // {props.children}
        // </AppContext.Provider>
    )
}
