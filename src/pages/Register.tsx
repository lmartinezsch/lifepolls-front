import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightElement
} from '@chakra-ui/react';


export function Register() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>¡Registrate!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Para disfrutar <Link color={'blue.400'}> día a día</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Correo Electrónico</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="nombre">
              <FormLabel>Nombre Completo</FormLabel>
              <Input type="nommbre" />
            </FormControl>
            <FormControl id="ususario">
              <FormLabel>Nombre de usuario</FormLabel>
              <Input type="usuario" />
            </FormControl>
            <FormControl id="contraseña">
              <FormLabel>Contraseña</FormLabel>
              <Input type="contraseña" />
            </FormControl>
            <FormControl id="confrimar">
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input type="confirmar" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'center'}
                justify={'space-between'}>
                <Text>Ya tienes una cuenta?</Text>
                <Link color={'blue.400'}>Iniciar sesión</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                  Registrarte
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}