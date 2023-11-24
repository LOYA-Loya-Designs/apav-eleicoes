import { Flex, Box, Heading, Button, Spinner, Text } from '@chakra-ui/react';
import { FaHome, FaUser } from 'react-icons/fa'; // Importe os ícones desejados
import IconButton from './IconButton'; // Importe o componente IconButton
import { auth, logOut } from "../db/auth"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/components/UserContext';

export default function Header({ user, iconSvg }) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { userDoc } = useUser();

  const handleLogout = async () => {
    await logOut()
  };

  return (
    <Flex display={router.pathname == "/" ? "none" : "flex"} align="center" justify="space-between" p={4} bgColor="red" position="absolute" left="0" width="100vw" height="60px" paddingX="40px">
      <Box display="flex" alignItems="center" color="white">
        <Flex
          w="130px"
          h="100px"
          bgImage="/images/logoHeader.png"
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
        <Heading as="h3" size="lg" color="white"></Heading>
      </Box>
      <Flex direction="row" justify="center" gap="35px" align="center">
        <Box display="flex" alignItems="center" color="white">
          <Flex direction="row" align="center" gap="7px">
            <Text fontSize="20px" fontWeight="medium">{userDoc?.name}</Text>
            <FaUser size={30} /> {/* Ícone de perfil à direita */}
          </Flex>
        </Box>
        <Button
          borderRadius="10px"
          w="70px"
          h="35px"
          colorScheme='gray'
          onClick={() => handleLogout()}
          color="red"
          display={router.pathname == "/vote" ? "none" : "Flex"}
        >
          <Text display={isLoading ? "none" : "Flex"}>Sair</Text>
          <Spinner display={isLoading ? "flex" : "none"} />
        </Button>
      </Flex>



    </Flex>
  );
}
