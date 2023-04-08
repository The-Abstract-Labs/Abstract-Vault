import { createContext, useEffect, useState } from "react";
import axios from "axios";
import web3 from "../../lib/web3";

export const AccountManagerContext = createContext<any>(null);

export type AccountsDataType = {
    accounts: string[];
    eoa: string | null;
    loaded: boolean;
    password?: string;
}

const ACCOUNTS_STORAGE_KEY = 'accounts';
const EOA_STORAGE_KEY = 'eoa';

function updateLocalAccounts(accounts: string[]) {
    window.localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
}

function getLocalAccounts(): string[] {
    const accounts = window.localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if ( !accounts ) return [];

    return JSON.parse(accounts);
}

function updateLocalEOA(eoa: string) {
    window.localStorage.setItem(EOA_STORAGE_KEY, eoa);
}

function getLocalEOA(): string | null {
    return window.localStorage.getItem(EOA_STORAGE_KEY);
}

export function AccountManagerProvider({ children }: {
    children: any
}) {
    const [accountsData, setAccountsData] = useState<AccountsDataType>({
        accounts: [],
        eoa: '',
        loaded: false
    });

    async function createAccount() {
        const res = await axios.get('/api/createAccount');
        const accounts = [...accountsData.accounts, res.data];

        updateLocalAccounts(accounts);
        setAccountsData((data) => ({
            ...data,
            accounts
        }))
    }

    function setupEOA(password: string) {
        const privateKey = web3.eth.accounts.create().privateKey;
        updateLocalEOA(privateKey);
        setAccountsData((data) => ({
            ...data,
            eoa: privateKey,
            password
        }))
    }

    function setPassword(password: string) {
        setAccountsData((data) => ({
            ...data, 
            password
        }))
    }

    useEffect(() => {
        const accounts = getLocalAccounts();
        const eoa = getLocalEOA();

        setAccountsData({
            accounts,
            eoa,
            loaded: true
        })
    }, [])

    return (
        <AccountManagerContext.Provider value={{
            createAccount,
            accounts: accountsData.accounts,
            eoa: accountsData.eoa,
            loaded: accountsData.loaded,
            password: accountsData.password,
            setupEOA,
            setPassword
        }}>
            { children }
        </AccountManagerContext.Provider>
    )
}