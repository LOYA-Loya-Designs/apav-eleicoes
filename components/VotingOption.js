import React from "react";
import { Box, Checkbox, Text, Flex, Heading } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const VotingOption = ({ label, onCheckBoxChange }) => {
  return (
    <Box>
      <Flex
        p={4}
        borderWidth="1px"
        borderRadius="20px"
        alignItems="center"
        width="250px"
        mb={4}
        gap="30px"
        color="white"
        variant="solid"
        bgColor="#d9d9d9"
        boxShadow="6px 6px 6px rgba(0, 0, 0, 0.2)"
        height="100px"
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h3" size="lg" mb={2} color="black"> 
            {label}
          </Heading>
          <Text color="red" fontSize="sm">Saber mais</Text>
        </Box>

        <Box>
          <Checkbox
            onChange={(e) => onCheckBoxChange(e.target.checked)}
            iconColor="red"
            defaultIsChecked={false}
            colorScheme="white"
            borderColor="black" // Define a cor do rebordo
            style={{ width: "30px", height: "30px", transform: "scale(1.5)", }} // Ajuste os valores conforme necessário
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default VotingOption;
