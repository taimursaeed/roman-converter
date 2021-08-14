import { Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function InputField(props) {
  const [error, setError] = useState({ error: false, msg: '' });
  const handleChange = (e) => {
    error.error && setError({ error: false, msg: '' });
    try {
      props.onChange(e.currentTarget.value);
    } catch (e) {
      setError({ error: true, msg: e.message });
    }
  };
  return (
    <>
      <Text
        as="label"
        htmlFor={props.label.replace(' ', '_')}
        mb="2"
        lineHeight="1"
        display="block"
      >
        {props.label}
      </Text>
      <Input
        mt="2"
        placeholder={props.placeholder}
        id={props.label.replace(' ', '_')}
        onChange={handleChange}
        errorBorderColor="red.500"
        focusBorderColor={error.error ? 'red.400' : 'blue.400'}
        isInvalid={error.error}
        type={props.type}
        height="60px"
        fontSize="xl"
        bg="white"
      />
      {error.error && (
        <Text
          bg="red.100"
          color="red.500"
          py="2"
          px="3"
          mt="2"
          mb={['4', '0']}
          borderRadius="4"
          fontSize="sm"
        >
          {error.msg}
        </Text>
      )}
    </>
  );
}
