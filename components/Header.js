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
    <Flex display={router.pathname == "/" ? "none" : "flex"} align="center" justify="space-between" p={4} bgColor="red" position="absolute" left="0" width="100vw" height={["50px", "50px", "60px", "60px"]} paddingX={["10px", "10px", "40px", "40px"]}>
      <Box display="flex" alignItems="center" color="white">
        <Flex
          w={["80px", "80px", "130px", "130px"]}
          h="100px"
          bgImage="/images/logoHeader.png"
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
        <Heading as="h3" size="lg" color="white"></Heading>
      </Box>
      <Flex direction="row" justify="center" gap={["10px", "10px", "35px", "35px"]} align="center">
        <Box display="flex" alignItems="center" color="white">
          <Flex direction="row" align="center" gap="7px">
            <Text fontSize={["10px", "10px", "20px", "20px"]} textAlign="center" fontWeight="medium">{userDoc?.name}</Text>
            <FaUser size={20} /> {/* Ícone de perfil à direita */}
          </Flex>
        </Box>
        <Button
          borderRadius="10px"
          w={["50px", "50px", "70px", "70px"]}
          h={["30px", "30px", "35px", "35px"]}
          colorScheme='gray'
          onClick={() => handleLogout()}
          color="red"
          display={router.pathname == "/vote" ? "none" : "Flex"}
        >
          <Text fontSize={["12px", "12px", "17px", "17px"]} display={isLoading ? "none" : "Flex"}>Sair</Text>
          <Spinner display={isLoading ? "flex" : "none"} />
        </Button>
      </Flex>



    </Flex>
  );
}
