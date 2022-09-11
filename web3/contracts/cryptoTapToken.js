import { ethers } from 'ethers'
import _ERC20 from '../abi/ERC20.json'

export class CryptoTapTokenContract {
  constructor(signer) {
    console.log(process.env.NEXT_PUBLIC_CTT_TOKEN_ADDRESS)
    this.contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CTT_TOKEN_ADDRESS,
      _ERC20.abi,
      signer
    )
  }
  get() {
    return this.contract
  }
}
