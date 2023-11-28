import { Button, Box, Heading, Flex } from '@chakra-ui/react';
import React from 'react';

export default function IconButton({ label, onClick, image }) {
  return (
    <Box mr={4}>
      <Button
        color="white"
        variant="solid"
        bgColor="red"
        onClick={onClick}
        boxShadow="6px 6px 6px rgba(0, 0, 0, 0.2)"
        width={["150px", "150px", "250px", "250px"]}
        height={["150px", "150px", "250px", "250px"]}
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="25px"
        _hover={{
          background: "hoverRed"
        }}
        _active={{
          bg: `clickRed`,
        }}

      >

        <Flex
          w={["70px", "70px", "130px", "130px"]}
          h={["70px", "70px", "130px", "130px"]}
          bgImage={image}
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
          position="absolute"
          top={["20px", "20px", "30px", "30px"]}
        />


        <Heading fontWeight="medium" as="h3" fontSize={["13px", "13px", "20px", "20px"]} position="absolute" bottom={["20px", "20px", "30px", "30px"]} justifyContent="center" w="100%">
          {label}
        </Heading>
      </Button>
    </Box>
  );
}
