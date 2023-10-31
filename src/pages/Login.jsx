import React from 'react'
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/layout"
import { Checkbox, FormControl, FormLabel, Button, Input } from '@chakra-ui/react';
import '../components/BackgLogin.jsx';

/* const Login = () => { */
/*   return ( */
/*     <> */
export default function Login() {
  return (
    <Box 
      w={['full', 'md']}
      p={[8, 10]}
      mt={[20, '10vh']}
      mx='auto'
      border={['none', '1px']}
      borderColor={['', 'gray.300']}
      borderRadius={[10]}
      /* style={[backgroundImage]} */
    >
      <VStack spacing={4} align='flex-start' w='full'>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading>Login</Heading>
          <Text>Enter your e-mail and password to login</Text>
        </VStack>

        <FormControl>
          <FormLabel>E-mail Address</FormLabel>
          <Input rounded='none' variant='filled' />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input rounded='none' variant='filled' type='password' />
        </FormControl>
        <HStack w='full' justify='space-between'>
          <Checkbox>Remember me.</Checkbox>
          <Button variant='link' colorScheme='blue'>
            Forgot Password?
          </Button>
        </HStack>
        <Button rounded='none' colorScheme='blue' w={['full', 'auto']} alignSelf='end'>
          Login
        </Button>
      </VStack>
    </Box>
  );
}

{/*     </> */ }
/*   ) */
/* } */

/*  export default Login  */