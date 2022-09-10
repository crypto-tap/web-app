import sdk from '../config/cryptumSDK'
import { PROTOCOL } from '../config/enum'
import cryptotapToken from '../config/cryptotap-token'

export default async function handler(req, res) {
  const wallet = await sdk.wallet.generateWallet({
    protocol: PROTOCOL,
    mnemonic: process.env.MNEMONIC,
  })
  const hash = await cryptotapToken.createToken(wallet)
  console.log(hash)

  res.status(200).json({ response: 'Token is being created!', hash })
}
