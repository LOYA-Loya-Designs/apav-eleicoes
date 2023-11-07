import { Flex, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'; // Importe o useRouter do Next.js

export default function Home() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/home'); // Navega para a página home.tsx
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" bgColor="red">
      <Heading fontSize="65px" color="white">
        O meu namorado é muito espero e bonito!
      </Heading>
      <button onClick={goToHome}>Ir para a Página Home</button> {/* Adicione o botão para navegar para a página home.tsx */}
    </Flex>
  )
}
