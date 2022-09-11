import sdk from '../../ui/config/cryptumSDK'
import _Custody from '../../web3/abi/Custody.json'
import { PROTOCOL } from '../../ui/config/enum'

export default async function handler(req, res) {
  try {
    const wallet = await sdk.wallet.generateWallet({
      protocol: PROTOCOL,
      mnemonic: process.env.MNEMONIC,
    })
    const { result: OPERATOR_ROLE } = await sdk.contract.callMethod({
      contractAddress: process.env.NEXT_PUBLIC_CUSTODY_CONTRACT_ADDRESS,
      contractAbi: _Custody.abi,
      method: 'OPERATOR_ROLE',
      protocol: PROTOCOL,
      params: [],
    })
    const { hash } = await sdk.contract.callMethodTransaction({
      wallet,
      contractAddress: process.env.NEXT_PUBLIC_CUSTODY_CONTRACT_ADDRESS,
      contractAbi: _Custody.abi,
      method: 'grantRole',
      protocol: PROTOCOL,
      params: [OPERATOR_ROLE, process.env.NEXT_PUBLIC_SWAP_CONTRACT_ADDRESS],
    })
    console.log('----RESULT-----', hash)
    res.status(200).json({ hash })
  } catch (error) {
    console.log('----ERROR-----', error)
    res.status(400).json({ status: 'Error' })
  }
}
