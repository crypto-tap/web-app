import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
// import Invest from '../../ui/components/Invest'
// import Mint from '../../ui/components/Mint'
// import SafeKeeping from '../../ui/components/SafeKeeping'
// import Withdrawal from '../../ui/components/Withdrawal'
import dynamic from 'next/dynamic'

const DynamicMint = dynamic(() => import('../../ui/components/Mint'), {
  ssr: false,
})
const DynamicInvest = dynamic(() => import('../../ui/components/Invest'), {
  ssr: false,
})
const DynamicSafeKeeping = dynamic(
  () => import('../../ui/components/SafeKeeping'),
  {
    ssr: false,
  }
)
const DynamicWithdrawal = dynamic(
  () => import('../../ui/components/Withdrawal'),
  {
    ssr: false,
  }
)
export default function Admin() {
  return (
    <Box>
      <DynamicMint />
      <Divider />
      <DynamicInvest />
      <Divider />
      <DynamicSafeKeeping />
      <Divider />
      <DynamicWithdrawal />
    </Box>
  )
}
