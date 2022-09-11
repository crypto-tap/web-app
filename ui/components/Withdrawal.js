import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Heading, Text, useToast } from '@chakra-ui/react'
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import { ethers } from 'ethers'

export default function Withdrawal() {
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
          setAmount(0)
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
      my={{ base: 12, lg: 14 }}
      maxW={800}
      margin="0 auto"
    >
      <Heading>Withdrawal money</Heading>
      <Text py={5}>$CTT will be burnt and $BRZ will be sent to our wallet</Text>
      <FormControl>
        <FormLabel>User ID</FormLabel>
        <Input
          type="number"
          placeholder="1234"
          onChange={onChangeAmount}
          value={amount}
        />
        <FormHelperText>Investor user ID</FormHelperText>
      </FormControl>
      <FormControl py={5}>
        <FormLabel>BRZ Amount to stake</FormLabel>
        <Input
          type="number"
          placeholder="1000"
          onChange={onChangeAmount}
          value={amount}
        />
        <FormHelperText>How much the user set to invest</FormHelperText>
      </FormControl>
      <Button onClick={onSubmit}>Invest BRZ</Button>
    </Flex>
  )
}
