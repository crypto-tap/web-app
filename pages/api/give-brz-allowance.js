import sdk from '../config/cryptumSDK'
import _CryptoTapTokenSwap from '../../web3/abi/CryptoTapTokenSwap.json'
import _BRZToken from '../../web3/abi/BRZToken.json'
import { PROTOCOL } from '../config/enum'

export default async function handler(req, res) {
  try {
    const wallet = await sdk.wallet.generateWallet({
      protocol: PROTOCOL,
      mnemonic: process.env.MNEMONIC,
    })

    const { hash } = await sdk.contract.callMethodTransaction({
      wallet,
      contractAddress: process.env.NEXT_PUBLIC_BRZ_TOKEN_ADDRESS,
      contractAbi: _BRZToken.abi,
      method: 'approve',
      protocol: PROTOCOL,
      params: [process.env.NEXT_PUBLIC_SWAP_CONTRACT_ADDRESS, req.query.amount],
    })

    res.status(200).json({ hash })
  } catch (error) {
    console.log(error)
    res.status(400).json({ status: 'Error' })
  }
}
