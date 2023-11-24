import { Flex, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Heading } from '@chakra-ui/react';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import Header from '../components/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
import Router from 'next/router';
import { auth } from '@/db/auth';
import React, { useState, useEffect } from 'react';
import IconButton from '@/components/IconButton';

export default function Home() {

    return (
        <>

            <ProtectedRoute>
                sdgwergr
            </ProtectedRoute>
        </>
    );
}
