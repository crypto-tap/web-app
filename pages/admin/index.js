import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import Invest from '../../ui/components/Invest'
import Mint from '../../ui/components/Mint'
import SafeKeeping from '../../ui/components/SafeKeeping'
import Withdrawal from '../../ui/components/Withdrawal'

export default function Admin() {
  return (
    <Box>
      <Mint />
      <Divider />
      <Invest />
      <Divider />
      <SafeKeeping />
      <Divider />
      <Withdrawal />
    </Box>
  )
}

export const getStaticProps = async ({}) => ({ props: {} })
