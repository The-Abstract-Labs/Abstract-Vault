import { createContext, useReducer } from "react";
import TransactionModal from "../../components/ApprovalModal/Transaction";

export const ApprovalSystemContext = createContext<any>(null);

export enum ApprovalModalType {
    NONE = 'NONE',
    CONNECTION = 'CONNECTION',
    TRANSACTION = 'TRANSACTION'
}

export type ApprovalModalState = {
    type: ApprovalModalType;
}

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
        modal = <></>
    } else {
        modal = <TransactionModal params={{
            from: '0x12223342',
            to: '0x10022',
            value: '0xffff',
            gas: '0xffff',
            gasPrice: '0xffff'
        }} />
    }

    return (
        <ApprovalSystemContext.Provider value={ dispatch }>
            { children }
            { modal }
        </ApprovalSystemContext.Provider>
    )
}