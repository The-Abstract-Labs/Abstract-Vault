import { Dispatch, createContext, useReducer } from "react";
import TransactionModal, { TransactionParameters } from "../../components/ApprovalModal/Transaction";
import ConnectionModal, { ConnectionParameters } from "../../components/ApprovalModal/Connection";

export const ApprovalSystemContext = createContext<Dispatch<ApprovalModalState> | undefined>(undefined);

export enum ApprovalModalType {
    NONE = 'NONE',
    CONNECTION = 'CONNECTION',
    TRANSACTION = 'TRANSACTION'
}

export type ApprovalModalState = {
    type: ApprovalModalType.NONE;
} | TransactionParameters | ConnectionParameters;

function reducer(state: ApprovalModalState, action: ApprovalModalState) {
    if ( state.type === ApprovalModalType.NONE ) {
        return action;
    } else {
        // push in queue or something
        return state;
    }
}

export function ApprovalSystemProvider({ children }: {
    children: any
}) {
    const [state, dispatch] = useReducer(reducer, {
        type: ApprovalModalType.NONE
    });

    let modal = <></>;
    if ( state.type === ApprovalModalType.NONE ) {
        modal = <></>
    } else if ( state.type === ApprovalModalType.CONNECTION ) {
        modal = <ConnectionModal params={state} />
    } else if ( state.type === ApprovalModalType.TRANSACTION ) {
        modal = <TransactionModal params={state} />
    }

    console.log(state)

    return (
        <ApprovalSystemContext.Provider value={ dispatch }>
            { children }
            { modal }
        </ApprovalSystemContext.Provider>
    )
}