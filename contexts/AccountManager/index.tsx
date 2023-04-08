import { createContext, useEffect, useState } from "react";
import axios from "axios";
import web3 from "../../lib/web3";

export const AccountManagerContext = createContext<any>(null);

export type AccountsDataType = {
    accounts: string[];
    eoa: string;
    loaded: boolean;
    password?: string;
}

const ACCOUNTS_STORAGE_KEY = 'accounts';
const EOA_STORAGE_KEY = 'eoa';

function updateLocalAccounts(accounts: string[]) {
    window.localStorage.set(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
}

function getLocalAccounts(): string[] {
    const accounts = window.localStorage.get(ACCOUNTS_STORAGE_KEY);
    return JSON.parse(accounts);
}

function updateLocalEOA(eoa: string) {
    window.localStorage.set(EOA_STORAGE_KEY, eoa);
}

function getLocalEOA(): string {
    return window.localStorage.get(EOA_STORAGE_KEY);
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
        const res = await axios.post('/api/createAccount');
        const accounts = [...accountsData.accounts, res.data];

        updateLocalAccounts(accounts);
        setAccountsData((data) => ({
            ...data,
            accounts
        }))
    }

    function setupEOA() {
        const privateKey = web3.eth.accounts.create().privateKey;
        updateLocalEOA(privateKey);
        setAccountsData((data) => ({
            ...data,
            eoa: privateKey
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