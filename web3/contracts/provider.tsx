import Web3Modal from 'web3modal'
import { providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.PROVIDER_KEY, // required
    },
  },
}

const onChangeNetwork = (newNetwork: any, oldNetwork: any) => {
  if (oldNetwork) {
    window.location.reload()
  }
}

export type ProviderType = providers.JsonRpcProvider | providers.Web3Provider

export class Provider {
  provider: ProviderType
  connectedProvider: ProviderType | null
  constructor() {
    if (process.env.WEB3_NETWORK === 'local') {
      this.provider = new providers.JsonRpcProvider()
    } else {
      this.provider = new providers.InfuraProvider(process.env.WEB3_NETWORK)
    }
    this.connectedProvider = null
    this.setNetworkChanges(this.provider)
  }
  get() {
    return this.provider
  }
  getConnectedWallet() {
    return this.connectedProvider
  }
  async connectWallet() {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions, // required
    })
    let prov = await web3Modal.connect()
    this.connectedProvider = new providers.Web3Provider(prov)
    this.setNetworkChanges(this.connectedProvider)
    return this.connectedProvider
  }
  setNetworkChanges(provider: ProviderType) {
    provider
      .on('network', onChangeNetwork)
      .on('chainChanged', onChangeNetwork)
      .on('accountsChanged', () => {
        window.location.reload()
      })
  }
}
