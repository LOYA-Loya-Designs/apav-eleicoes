import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from '../themes/theme'
import Header from '@/components/Header'
import { UserProvider } from '@/components/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Header user={undefined} iconSvg={undefined}></Header>
        <Component {...pageProps} />
      </UserProvider>


    </ChakraProvider>

  )
}