import CryptumSdk from 'cryptum-sdk'

const sdk = new CryptumSdk({
  environment: 'testnet', // 'testnet', 'mainnet'
  apiKey: process.env.CRYPTUM_API_KEY,
})

export default sdk
