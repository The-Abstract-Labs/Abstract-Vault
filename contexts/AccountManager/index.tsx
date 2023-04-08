import { createContext, useReducer } from "react";

export const ApprovalSystemContext = createContext<any>(null);

export function AccountManager({ children }: {
    children: any
}) {
    
    return (
        <ApprovalSystemContext.Provider value={ dispatch }>
            { children }
            { modal }
        </ApprovalSystemContext.Provider>
    )
}