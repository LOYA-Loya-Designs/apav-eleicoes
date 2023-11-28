import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Spinner, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, logIn, logOut } from "../db/auth"

export default function Home() {
  const router = useRouter();
  const toast = useToast()
  const [numSocio, setNumSocio] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const email = numSocio + "@mail.pt"
      const result = await logIn(email, password);
      console.log(result);
    } catch (error) {
      console.error(error.code == "auth/invalid-login-credentials");
      if (error.code == "auth/invalid-login-credentials" || error.code == "auth/invalid-email") {
        toast({
          title: `Falha na autenticação. Por favor confirme as suas credenciais`,
          status: "warning",
          isClosable: true,
        })
      }
    }
    setIsLoading(false);
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
        w={["90vw", "70vw", "65vw", "65vw"]}
        h={["60vh", "55vh", "50vh", "50vh"]}
        position="relative"
        align="center"
        justify="center"
        gap="40px"
        direction={["column", "column", "row", "row"]}
      >
        <Flex
          w={["100%", "100%", "50%", "50%"]}
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
          display={["none", "none", "flex", "flex"]}
          w="3px"
          h="100%"
          bg="white"
        />
        <Flex
          w={["100%", "100%", "50%", "50%"]}
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
                type="text"
                value={numSocio} // Vincula o valor do estado ao input
                onChange={(e) => setNumSocio(e.target.value)} // Atualiza o estado quando o input muda
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                autoComplete="new-password"
                type="password"
                value={password} // Vincula o valor do estado ao input
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado quando o input muda
              />
              <FormHelperText color="white">
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
