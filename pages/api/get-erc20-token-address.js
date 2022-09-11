import cryptotapToken from '../../ui/config/cryptotap-token'

export default async function handler(req, res) {
  const { tokenAddress, hash } = await cryptotapToken.getTokenAddress()
  if (tokenAddress.length === 0) {
    res.status(404).json({
      response: 'Token isnt created yet! Try again soon!',
      tokenAddress,
      hash,
    })
  }
  res
    .status(200)
    .json({ response: 'Token created successfully!', tokenAddress, hash })
}
