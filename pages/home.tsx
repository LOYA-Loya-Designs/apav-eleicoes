import { Flex, Heading } from '@chakra-ui/react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'; 
import IconButton from '../components/IconButton'; 
import Header from '../components/Header';

export default function Home() {
  return (
    <>
        <Header user={undefined} iconSvg={undefined}></Header><Flex w="100vw" h="100vh" align="center" justify="center" bgColor="DEDEDE">

          <Flex mt={4} align="center" justify="center" gap="20px">
              <IconButton icon={<FaHome />} onClick={() => console.log('Home button clicked')} label="VOTAR" />
              <IconButton icon={<FaSearch />} onClick={() => console.log('Search button clicked')} label="AJUDA" />
              <IconButton icon={<FaUser />} onClick={() => console.log('Profile button clicked')} label="AVISOS E INFORMAÇÕES LEGAIS" />

          </Flex>
      </Flex>
    </>
  );
}
