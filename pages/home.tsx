import React, { useState } from 'react';
import { Flex, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Heading } from '@chakra-ui/react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import Header from '../components/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
import Router from 'next/router';
import IconButton from '../components/IconButton';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHelpDrawerOpen, setIsHelpDrawerOpen] = useState(false);

  const handleSearchClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleHelpClick = () => {
    setIsHelpDrawerOpen(!isHelpDrawerOpen);
  };

  const router = Router;

  return (
    <>
      <ProtectedRoute>
        <Header user={undefined} iconSvg={undefined}></Header>
        <Flex w="100vw" h="100vh" align="center" justify="center" bgColor="DEDEDE">
          <Flex mt={4} align="center" justify="center" gap="45px">
            <IconButton icon={<FaHome />} onClick={() => router.push("/vote")} label="VOTAR" />
            <IconButton icon={<FaSearch />} onClick={handleSearchClick} label="AJUDA" />
            <IconButton icon={<FaUser />} onClick={handleHelpClick} label="AVISOS E INFORMAÇÕES LEGAIS" />
          </Flex>
        </Flex>
      </ProtectedRoute>

      {/* Chakra UI Drawers */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="35px" fontWeight="md">Ajuda</DrawerHeader>
          <DrawerBody>
            {/* Add your search content here */}
            <Heading fontSize="20px" fontWeight="md">- Como votar?</Heading>
            <Heading fontSize="20px" fontWeight="md"> ...</Heading>
            <Heading fontSize="20px" fontWeight="md">- Contactos?</Heading>
            <Heading fontSize="20px" fontWeight="md">...</Heading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer isOpen={isHelpDrawerOpen} onClose={() => setIsHelpDrawerOpen(false)} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="35px" fontWeight="md">Avisos e Informações Legais</DrawerHeader>
          <DrawerBody>
            {/* Add content for the second drawer here */}
            <Heading fontSize="20px" fontWeight="md">...</Heading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
