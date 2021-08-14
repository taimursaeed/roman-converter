import { Box, Flex, Text, Heading } from '@chakra-ui/react';
export default function Converter(props) {
  return (
    <Box>
      <Heading as="h2" mt="8" mb="4" fontSize="2xl">
        {props.title}
      </Heading>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        bg="#fafafa"
        p="4"
        pb="6"
        borderRadius="8"
        boxShadow="lg"
      >
        <Box flexBasis="45%">{props.input}</Box>
        <Box flexBasis="45%">
          <Text mb="4" lineHeight="1">
            {props.to} Numerals
          </Text>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            bg="gray.100"
            px="4"
            py="2"
            borderRadius="6"
            mt="2"
            height="60px"
          >
            {props.output}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
