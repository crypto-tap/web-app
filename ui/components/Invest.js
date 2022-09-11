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

export default function Invest() {
  const toast = useToast()
  const [amount, setAmount] = useState('')
  const [userId, setUserId] = useState('')
  const onSubmit = () => {
    async function investToken() {
      toast({
        title: 'Investing...',
        status: 'info',
        duration: 10000,
        isClosable: true,
      })
      axios
        .get('/api/invest-brz', {
          params: {
            amount,
            userId,
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
            title: 'Error while investing...',
            description: error.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
          console.log(error)
        })
    }
    investToken()
  }
  const onAllowance = () => {
    async function allowanceToken() {
      toast({
        title: 'Sending transaction',
        status: 'info',
        duration: 10000,
        isClosable: true,
      })
      // console.log(ethers.utils.parseUnits(amount).toHexString())
      // return
      axios
        .get('/api/give-brz-allowance', {
          params: {
            amount,
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
            title: 'Error while allowing...',
            description: error.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
          console.log(error)
        })
    }
    allowanceToken()
  }
  const onChangeAmount = (e) => {
    const { value } = e.target
    console.log(value)
    setAmount(value)
  }
  const onChangeUserId = (e) => {
    const { value } = e.target
    console.log(value)
    setUserId(value)
  }

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      my={{ base: 12, lg: 14 }}
      maxW={800}
      margin="0 auto"
    >
      <Heading>Invest money</Heading>
      <Text py={5}>
        BRZ will be swapped to $CTT and sent to safe keeping contract
        registering the user id sent
      </Text>

      <FormControl>
        <FormLabel>User ID</FormLabel>
        <Input
          type="number"
          placeholder="1234"
          onChange={onChangeUserId}
          value={userId}
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

      <Flex alignItems="center" my={{ base: 12, lg: 14 }} margin="0 auto">
        <Button onClick={onAllowance} mr={4}>
          Give money allowance
        </Button>
        <Button onClick={onSubmit}>Invest BRZ</Button>
      </Flex>
    </Flex>
  )
}
