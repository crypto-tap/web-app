import sdk from './cryptumSDK'
import { PROTOCOL } from '../config/enum'

const tokenConfig = {
  name: 'cryptoTapToken',
  symbol: 'CTT',
  decimals: 18,
  amount: '1000000',
  protocol: PROTOCOL,
}
export class CryptotapToken {
  hash = ''
  tokenAddress = ''

  async createToken(wallet) {
    const { hash } = await sdk.token.create({
      wallet,
      ...tokenConfig,
    })
    this.hash = hash
    return hash
  }
  async getTokenAddress() {
    if (this.hash.length === 0)
      return { hash: this.hash, tokenAddress: this.tokenAddress }
    const { contractAddress } =
      await sdk.transaction.getTransactionReceiptByHash({
        protocol: PROTOCOL,
        hash: '0x4e84c7c656c6c84aae0e86c9f5ceef856dccaba1afaec57ad6daee43ff435ee5',
      })
    this.tokenAddress = contractAddress
    return this.getTokenInfo()
  }
  getTokenInfo() {
    return { hash: this.hash, tokenAddress: this.tokenAddress }
  }
}

const cryptotapToken = new CryptotapToken()
export default cryptotapToken
