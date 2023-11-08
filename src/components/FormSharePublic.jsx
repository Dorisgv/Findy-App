import React from 'react'
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/layout"
import { Checkbox, FormControl, FormLabel, Button, Input } from '@chakra-ui/react';

function Formulario() {
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
      bgColor="#B0E0E6"
    >
      <VStack spacing={4} mx='auto' w={['90%', 'md']} border="4px solid #2E8B57" p={2} borderRadius="15px" bgColor={'#B0E0E6'}>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading> Publicaci😎n </Heading>
          <Text>¡Crea tu nueva publicación!</Text>
        </VStack>

        <FormControl>
          <FormLabel textAlign='center'>Ingresa tu comentario.</FormLabel>
          <Input rounded='none' variant='filled' borderRadius="15px" />
        </FormControl>
        <FormControl>
          <FormLabel textAlign='center'>Ingresa tu URL de la imagen.</FormLabel>
          <Input rounded='none' variant='filled' borderRadius="15px" type='url' />
        </FormControl>
        <HStack w='full' justify='space-between'>
          <Button className='boton' variant='link' colorScheme='green'>
            ¿Algo más?
          </Button>
        </HStack>
        <Button rounded='none' bgColor="#9ACD32" color="#F8F8F8" w={['full', 'auto']} alignSelf='end' focusVisible={{ 'background-color': '#F16821' }} borderRadius="10px">
          Enviar
        </Button>
      </VStack>
    </Box>
  );
}

export default Formulario; 