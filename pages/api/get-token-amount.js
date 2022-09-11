import sdk from '../../ui/config/cryptumSDK'
import _ERC20 from '../../web3/abi/ERC20.json'
import { PROTOCOL } from '../../ui/config/enum'

export default async function handler(req, res) {
  const { result } = await sdk.contract.callMethod({
    contractAddress: process.env.NEXT_PUBLIC_CTT_TOKEN_ADDRESS,
    contractAbi: _ERC20.abi,
    method: 'totalSupply',
    protocol: PROTOCOL,
    params: [],
  })
  res.status(200).json({ maxSupply: result })
}
