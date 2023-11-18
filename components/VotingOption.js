import React from "react";
import { Box, Checkbox, Text, Flex, Heading } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const VotingOption = ({ label, onCheckBoxChange }) => {
  return (
    <Box>
      <Flex
        p={4}
        borderRadius="20px"
        alignItems="center"
        width="400px"
        mb={4}
        color="white"
        variant="solid"
        bgColor="#d9d9d9"
        boxShadow="6px 6px 6px rgba(0, 0, 0, 0.2)"
        height="120px"
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h3" fontWeight="medium" fontSize="50px" color="black">
            {label}
          </Heading>
          <Text color="red" fontSize="md">Saber mais</Text>
        </Box>

        <Box>
          <Checkbox
            onChange={(e) => onCheckBoxChange(e.target.checked)}
            iconColor="red"
            defaultIsChecked={false}
            colorScheme="white"
            borderColor="black"
            style={{ width: "30px", height: "30px", transform: "scale(2.5)", }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default VotingOption;
