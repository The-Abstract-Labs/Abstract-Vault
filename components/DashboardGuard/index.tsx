import { useContext } from "react";
import { AccountManagerContext } from "../../contexts/AccountManager";
import { Loader } from "../Loader";

export function DashboardGuard({ children }: {
    children: any
}) {
    const { accounts, eoa, loaded, password } = useContext(AccountManagerContext);

    if ( !loaded ) return <Loader />
    if ( !eoa ) return <OnboardingScreen />
    if ( !password ) return <LoginScreen />

    return <>
        { children }
    </>
}