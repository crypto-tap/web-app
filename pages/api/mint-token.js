import sdk from '../config/cryptumSDK'

export default async function handler(req, res) {
  const wallet = await sdk.wallet.generateWallet({
    protocol: 'POLYGON',
    mnemonic: process.env.MNEMONIC,
  })
  console.log(wallet)
  res.status(200).json({ name: 'John Doe' })
}
