import { createContext, useCallback, useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { Provider } from '../../../web3/contracts/provider'
import { CryptoTapTokenContract } from '../../../web3/contracts/cryptoTapToken'

const providerClass = new Provider()
const cryptoTapTokenContract = new CryptoTapTokenContract(providerClass.get())

const DEFAULT_CONTEXT = {
  provider: providerClass.get(),
  /** @dev: only minter must be signed.
   * The only feature we need be connected to client wallet is the mint.
   * We need only get information on core and project data contracts, by now.
   **/
  cryptoTapTokenContractRead: cryptoTapTokenContract.get(),
  // cryptoTapTokenContractSigned: minterContract.get(),
  walletIsConnected: false,
  userAddress: '',
  onConnectWallet: () => {},
  connectWalletHandler: () => {},
}

const Web3Context = createContext(DEFAULT_CONTEXT)

export const Web3Provider = ({ children, ...rest }) => {
  const [provider, setProvider] = useState(DEFAULT_CONTEXT.provider)
  const [userAddress, setUserAddress] = useState(DEFAULT_CONTEXT.userAddress)
  // const [cryptoTapTokenContractSigned, setCryptoTapTokenContractSigned] = useState(
  //   DEFAULT_CONTEXT.cryptoTapTokenContractSigned
  // )
  const [walletIsConnected, setWalletIsConnected] = useState(
    DEFAULT_CONTEXT.walletIsConnected
  )
  const toast = useToast()

  const connectWalletHandler = useCallback(async () => {
    if (walletIsConnected) return
    await providerClass.connectWallet()
    const connectedWallet = providerClass.getConnectedWallet()
    if (!connectedWallet) return

    const signer = await connectedWallet.getSigner()
    if (!signer) return

    const address = await signer.getAddress()
    if (!address) return

    // const minterSigned = new MinterContract(signer)

    setProvider(connectedWallet)
    setUserAddress(address)
    // setcryptoTapTokenContractSigned(minterSigned.get())
    setWalletIsConnected(true)
  }, [walletIsConnected])

  const onConnectWallet = useCallback(async () => {
    try {
      await connectWalletHandler()
      toast({
        title: 'Connect a wallet',
        description: 'Wallet connected successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      console.log('Error onConnectWallet', error)
      toast({
        title: 'Connect a wallet',
        description: 'Error while connecting your wallet. Try again late.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [connectWalletHandler, toast])

  useEffect(() => {
    async function checkWalletConnection() {
      if (typeof window.ethereum !== 'undefined') {
        const addressList = await window.ethereum?.request({
          method: 'eth_accounts',
        })
        if (addressList.length > 0) {
          connectWalletHandler()
        }
      }
    }
    checkWalletConnection()
  }, [connectWalletHandler])

  return (
    <Web3Context.Provider
      value={{
        ...DEFAULT_CONTEXT,
        provider,
        // cryptoTapTokenContractSigned,
        walletIsConnected,
        onConnectWallet,
        userAddress,
        connectWalletHandler,
      }}
    >
      {provider ? children : ''}
    </Web3Context.Provider>
  )
}

export default Web3Context
