const axios = require('axios')
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Admin() {
  useEffect(() => {
    async function createToken() {
      axios
        .get('/api/mint-token')
        .then(function (response) {
          // handle success
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    }
    createToken()
  }, [])
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
        <Input type="number" placeholder="1000" />
        <FormHelperText>
          The amount of token that you want to create
        </FormHelperText>
      </FormControl>
      <Button>Create and Mint Tokens</Button>
    </Flex>
  )
}
