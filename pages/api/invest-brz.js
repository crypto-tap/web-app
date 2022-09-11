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
    console.log(req.query.amount)
    const { hash } = await sdk.contract.callMethodTransaction({
      wallet,
      contractAddress: process.env.NEXT_PUBLIC_SWAP_CONTRACT_ADDRESS,
      contractAbi: _CryptoTapTokenSwap.abi,
      method: 'buyCTT',
      protocol: PROTOCOL,
      params: [req.query.userId, req.query.amount],
    })
    res.status(200).json({ hash })
  } catch (error) {
    console.log(error)
    res.status(400).json({ status: 'Error' })
  }
}
