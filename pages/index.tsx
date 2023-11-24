import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Spinner, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, logIn, logOut } from "../db/auth"

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@mail.pt");
  const [password, setPassword] = useState("admin123");
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    await logIn(email, password)
    setIsLoading(false)
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/home");
      }
    });

    return () => unsubscribe();
  }, []);



  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bgColor="red"
    >
      <Flex
        w="65vw"
        h="50vh"
        position="relative"
        align="center"
        justify="center"
      >
        <Flex
          w="50%"
          h="100%"
          align="center"
          justify="center"
        >
          <Flex
            w="85%"
            h="100%"
            bgImage="/images/logoHome.png"
            bgPos="center"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
        </Flex>
        <Box
          w="3px"
          h="100%"
          bg="white"
        />
        <Flex
          w="50%"
          h="100%"
          bg="red"
          align="center"
          justify="center"
        >
          <Flex
            w="85%"
            h="100%"
            align="center"
            justify="center"
            color="white"
            flexDir="column"
            gap="30px"
            position="relative"
          >
            <FormControl>
              <FormLabel>Número de Associado</FormLabel>
              <Input
                autoComplete="off"
                type='nAssociado'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                autoComplete="new-password"
                type='password'
              />
              <FormHelperText
                color="white"
              >
                Introduza a password que recebeu por carta
              </FormHelperText>
            </FormControl>
            <Flex w="100%" justify="end">
              <Button
                borderRadius="10px"
                w="130px"
                mt={4}
                colorScheme='gray'
                onClick={() => handleLogin()}
                color="red"
              >
                <Text display={isLoading ? "none" : "Flex"}>Entrar</Text>
                <Spinner display={isLoading ? "flex" : "none"} />
              </Button>
            </Flex>

          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}
