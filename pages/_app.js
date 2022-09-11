import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/ubuntu'
import theme from '../ui/theme'
import { Web3Provider } from '../ui/contexts/EtherInstances'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ChakraProvider>
  )
}

export default MyApp
