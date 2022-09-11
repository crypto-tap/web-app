import sdk from './cryptumSDK'
import { PROTOCOL } from '../config/enum'

const tokenConfig = {
  name: 'Crypto Tap Token',
  symbol: 'CTT',
  decimals: 18,
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
        hash: '0x2f723b778319180893725f48ced47cca2787d722efcf853fa102765e49166e0f',
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
