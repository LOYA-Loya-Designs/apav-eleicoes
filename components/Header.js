import { Flex, Box, Heading } from '@chakra-ui/react';
import { FaHome, FaUser } from 'react-icons/fa'; // Importe os ícones desejados
import IconButton from './IconButton'; // Importe o componente IconButton

export default function Header({ user, iconSvg }) {
  return (
    <Flex align="center" justify="space-between" p={4} bgColor="red" position="absolute" width="100vw" height="50px">
      <Box display="flex" alignItems="center" color="white">
        <Box mr={2}>
          <FaHome size={30} /> {/* Ícone de casa à esquerda */}
        </Box>
        <Heading as="h3" size="lg" color="white"></Heading>
      </Box>
      <Box display="flex" alignItems="center" color="white">
        <Flex ml={2} direction="row" align="center" gap="20px">
          <FaUser size={30} /> {/* Ícone de perfil à direita */}
        </Flex>
      </Box>
    </Flex>
  );
}
