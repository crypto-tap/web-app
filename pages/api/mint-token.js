import sdk from '../../ui/config/cryptumSDK'
// import { PROTOCOL } from '../../ui/config/enum'

export default async function handler(req, res) {
  // const wallet = await sdk.wallet.generateWallet({
  //   protocol: PROTOCOL,
  //   mnemonic: process.env.MNEMONIC,
  // })
  // // if (req.query.amount > 1000) {
  // //   res
  // //     .status(400)
  // //     .json({ status: 'Error: Bug when minting more than 1k tokens' })
  // // }
  try {
    //   // Bug a partir do 1k de tokens
    //   const { hash } = await sdk.token.mint({
    //     wallet,
    //     token: process.env.NEXT_PUBLIC_CTT_TOKEN_ADDRESS, // token address
    //     destination: process.env.NEXT_PUBLIC_SWAP_CONTRACT_ADDRESS, // destination address
    //     amount: req.query.amount,
    //     protocol: PROTOCOL,
    //   })

    res.status(200).json({ status: 'Creating token' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ status: 'Error: cant create token' })
  }
}
