import { useContext } from "react";
import { AccountManagerContext } from "../../contexts/AccountManager";
import { Loader } from "../Loader";
import RegisterScreen from "../RegisterScreen";
import LoginScreen from "../LoginScreen";

export function DashboardGuard({ children }: {
    children: any
}) {
    const { eoa, loaded, password } = useContext(AccountManagerContext);

    console.log({ eoa, loaded, password })

    if ( !loaded ) return <Loader />
    if ( !eoa ) return <RegisterScreen />
    if ( !password ) return <LoginScreen />

    return <>
        { children }
    </>
}