import '@/styles/globals.css'
import theme from '@/utils/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
