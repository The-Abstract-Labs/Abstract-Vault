import { useContext, useEffect } from "react";
import { Loader } from "../Loader";
import { AccountManagerContext } from "../../contexts/AccountManager";

export function CreateAccountScreen() {
    const { createAccount } = useContext(AccountManagerContext);

    useEffect(() => {
        createAccount()
    }, []);

    return (
        <>
            <Loader />
        </>
    )
}