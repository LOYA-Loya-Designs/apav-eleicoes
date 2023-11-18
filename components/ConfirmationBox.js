import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export default function ConfirmationBox({ label }) {
  return (
    <Box mt={4} textAlign="center">
      <Box
        bgColor="red"
        borderRadius="20px"
        width="220px"
        height="50px"
        boxShadow="6px 6px 6px rgba(0, 0, 0, 0.2)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          background: "click"
        }}
      >
        <Heading fontWeight="medium" as="h3" fontSize="20px" whiteSpace="pre-line" color="white">
          {label.replace(' e ', '\n')}
        </Heading>
      </Box>
    </Box>
  );
}
