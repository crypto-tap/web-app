import sdk from './cryptumSDK'
import { PROTOCOL } from '../config/enum'

const tokenConfig = {
  name: 'cryptoTapToken',
  symbol: 'CTT',
  decimals: 10,
  amount: '0',
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
        hash: '0xdc60ba1ae357dc242f265206d60a97891b42589576576bf83a72a9dfddf769a4',
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
