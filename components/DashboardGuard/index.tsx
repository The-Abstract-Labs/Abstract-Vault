import { useContext } from "react";
import { AccountManagerContext } from "../../contexts/AccountManager";
import { Loader } from "../Loader";
import RegisterScreen from "../RegisterScreen";
import LoginScreen from "../LoginScreen";
import { CreateAccountScreen } from "../CreateAccountScreen";

export function DashboardGuard({ children }: {
    children: any
}) {
    const { accounts, eoa, loaded, password } = useContext(AccountManagerContext);

    if ( !loaded ) return <Loader />
    if ( !eoa ) return <RegisterScreen />
    if ( !password ) return <LoginScreen />
    if ( accounts.length === 0 ) return <CreateAccountScreen />

    return <>
        { children }
    </>
}