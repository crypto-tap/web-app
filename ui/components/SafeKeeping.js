import { Heading } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

export default function SafeKeeping() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      my={{ base: 12, lg: 14 }}
      maxW={800}
      margin="0 auto"
    >
      <Heading>Safe Keeping contract movements</Heading>
    </Flex>
  )
}
