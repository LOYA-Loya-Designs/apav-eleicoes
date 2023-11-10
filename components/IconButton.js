import { Button, Box, Heading } from '@chakra-ui/react';
import React from 'react';

export default function IconButton({ icon, label, onClick }) {
  return (
    <Box mr={4}>
      <Button
        color="white"
        variant="solid"
        bgColor="red"
        onClick={onClick}
        boxShadow="6px 6px 6px rgba(0, 0, 0, 0.2)"
        width="250px"
        height="250px"
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="25px"
        _hover={
          {
            background: "click"
          }
        }

      >

        {React.cloneElement(icon, { size: "100px", position: "absolute", top: "0" })}


        <Heading fontWeight="medium" as="h3" fontSize="20px" whiteSpace="pre-line">
          {label.replace(' e ', '\n')}
        </Heading>
      </Button>
    </Box>
  );
}
