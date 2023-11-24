import { Flex, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Heading } from '@chakra-ui/react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import Header from '../components/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
import Router from 'next/router';
import { auth } from '@/db/auth';
import React, { useState, useEffect } from 'react';
import IconButton from '@/components/IconButton';
import { useUser } from '@/components/UserContext';

export default function Home() {
  const router = Router

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHelpDrawerOpen, setIsHelpDrawerOpen] = useState(false)

  const { userDoc } = useUser();
  console.log(userDoc)

  const handleSearchClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleHelpClick = () => {
    setIsHelpDrawerOpen(!isHelpDrawerOpen);
  };

  const [user, setUser] = useState(null)

  return (
    <>
      <ProtectedRoute>

        <Flex w={["100vw", "100vw", "100vw", "100vw"]} h="100vh" align="center" justify="center" bgColor="DEDEDE">
          <Flex mt={4} align="center" justify="center" gap="45px">
            <IconButton icon={<FaHome />} onClick={() => router.push("/vote")} label="VOTAR" />
            <IconButton icon={<FaSearch />} onClick={handleSearchClick} label="AJUDA" />
            <IconButton icon={<FaUser />} onClick={handleHelpClick} label="AVISOS E INFORMAÇÕES LEGAIS" />
          </Flex>
        </Flex>

        {/* Chakra UI Drawers */}
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} placement="right" size={"xl"}>
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

        <Drawer isOpen={isHelpDrawerOpen} onClose={() => setIsHelpDrawerOpen(false)} placement="right" size={"lg"}>
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
      </ProtectedRoute>


    </>
  );
}
