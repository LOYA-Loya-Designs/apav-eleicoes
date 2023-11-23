import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, logIn, logOut } from "../db/auth"

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@admin.pt");
  const [password, setPassword] = useState("admin123");

  const handleLogin = async () => {
    logIn(email, password)
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/home");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    logOut()
  };

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
                w="130px"
                mt={4}
                colorScheme='gray'
                onClick={() => handleLogin()}
                color="red"
              >
                Entrar
              </Button>
            </Flex>
            <Flex w="100%" justify="end">
              <Button
                w="130px"
                mt={4}
                colorScheme='gray'
                onClick={() => handleLogout()}
                color="red"
              >
                Entrar
              </Button>
            </Flex>

          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}
