import { useState } from 'react'
import axios from 'axios'
import { Box, useToast } from '@chakra-ui/react'
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import { BigNumber } from 'ethers'

export default function Admin() {
  const toast = useToast()
  const [amount, setAmount] = useState(0)

  const onSubmit = () => {
    async function createToken() {
      toast({
        title: 'Minting...',
        status: 'info',
        duration: 10000,
        isClosable: true,
      })
      axios
        .get('/api/mint-token', {
          params: {
            amount: amount,
          },
        })
        .then(function (response) {
          toast({
            title: 'Tx sent',
            render: () => (
              <Box p={3} bg={'green.300'} color={'white'}>
                Tx:{' '}
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  href={`https://mumbai.polygonscan.com/tx/${response.data.hash}`}
                >
                  {response.data.hash}
                </a>
              </Box>
            ),
            description: `Tx: ${response.data.hash}`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch(function (error) {
          toast({
            title: 'Error while minting...',
            description: error.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    }
    createToken()
  }
  const onChangeAmount = (e) => {
    const { value } = e.target
    console.log(value)
    setAmount(value)
  }
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mt={{ base: 12, lg: 14 }}
      maxW={800}
      margin="0 auto"
    >
      <FormControl>
        <FormLabel>Token Amount</FormLabel>
        <Input type="number" placeholder="1000" onChange={onChangeAmount} />
        <FormHelperText>
          The amount of token that you want to create
        </FormHelperText>
      </FormControl>
      <Button onClick={onSubmit}>Mint Tokens</Button>
    </Flex>
  )
}
