import { ChakraProvider, Container, Heading, Text } from '@chakra-ui/react';

import RomanToInt from './components/RomanToInt';
import IntToRoman from './components/IntToRoman';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container p="8" maxW="container.md">
        <Heading as="h1" textAlign="center" mb="8">
          Learn Roman Numerals
        </Heading>
        <Text mb="8">
          Welcome! This page will help you to learn Roman numerals. The
          <strong> Convert Roman to Arabic Numerals </strong> section will help you convert valid
          Roman numerals to its Arabic numerals equivalent. While
          <strong> Convert Arabic to Roman Numerals </strong>
          section will help you convert Arabic numerals to its Roman numerals equivalent.
        </Text>
        <RomanToInt />
        <IntToRoman />
      </Container>
    </ChakraProvider>
  );
}

export default App;
