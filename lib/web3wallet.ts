import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

let core = new Core({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID
});

let web3walletPromise = Web3Wallet.init({
    core,
    metadata: {
        name: 'Demo app',
        description: 'Demo Client as Wallet/Peer',
        url: 'www.walletconnect.com',
        icons: []
    }
});

export default web3walletPromise
