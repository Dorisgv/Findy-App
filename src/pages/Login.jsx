import React from 'react'
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/layout"
import { Checkbox, FormControl, FormLabel, Button, Input } from '@chakra-ui/react';
import '../components/FormSharePublic.jsx';

export default function Login() {
  return (
    <Box
      w={['100%', 'full']}
      p={[8, 10]}
      pt={[20, '10vh']}
      height="100vh"
      overflow="hidden"
      border={['none', '1px']}
      borderColor={['', 'gray.300']}
      borderRadius={[10]}
      bgColor="#F8BBD0"
    >
      <VStack spacing={4} mx='auto' w={['90%', 'md']} border="4px solid yellow" p={2} borderRadius="15px" bgColor={'pink'}>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading>Login</Heading>
          <Text>Enter your e-mail and password</Text>
        </VStack>

        <FormControl>
          <FormLabel>E-mail Address</FormLabel>
          <Input rounded='none' variant='filled' borderRadius="15px" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input rounded='none' variant='filled' borderRadius="15px" type='password' />
        </FormControl>
        <HStack w='full' justify='space-between'>
          <Checkbox>Remember me.</Checkbox>
          <Button className='boton' variant='link' colorScheme='blue'>
            Forgot Password?
          </Button>
        </HStack>
        <Button rounded='none' bgColor="#FF7674" color="#F8F8F8" w={['full', 'auto']} alignSelf='end' focusVisible={{ 'background-color': '#F16821' }} borderRadius="10px">
          Login
        </Button>
      </VStack>
    </Box>
  );
}

