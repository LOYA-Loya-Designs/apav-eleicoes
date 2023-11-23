import { Flex, Heading } from '@chakra-ui/react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import IconButton from '../components/IconButton';
import Header from '../components/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
import Router from 'next/router';
import { auth } from '@/db/auth';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const router = Router

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ProtectedRoute>
        <Header user={undefined} iconSvg={undefined}></Header>
        <Flex w="100vw" h="100vh" align="center" justify="center" bgColor="DEDEDE">

          <Flex mt={4} align="center" justify="center" gap="45px">
            <IconButton icon={<FaHome />} onClick={() => router.push("/vote")} label="VOTAR" />
            <IconButton icon={<FaSearch />} onClick={() => console.log('Search button clicked')} label="AJUDA" />
            <IconButton icon={<FaUser />} onClick={() => console.log('Profile button clicked')} label="AVISOS E INFORMAÇÕES LEGAIS" />

          </Flex>
        </Flex>
      </ProtectedRoute>

    </>
  );
}
