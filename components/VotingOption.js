import React from "react";
import { Box, Checkbox, Text, Flex, Heading } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const VotingOption = ({ label, onCheckBoxChange, id, disabled }) => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Box>
      <Flex
        p={4}
        borderRadius="20px"
        alignItems="center"
        width={["80vw", "80vw", "300px", "400px"]}
        mb={4}
        color="white"
        variant="solid"
        bgColor="#bfbfbf"
        boxShadow="6px 6px 6px rgba(0, 0, 0, 0.2)"
        height={["85px", "85px", "85px", "120px"]}
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h3" fontWeight="medium" fontSize={["25px", "25px", "30px", "50px"]} color="black">
            {label}
          </Heading>
          <Text fontWeight="medium" color="red" fontSize={["sm", "sm", "md", "md"]}>Saber mais</Text>
        </Box>

        <Box>
          <Checkbox
            display={disabled && !isSelected ? "none" : "flex"}
            onChange={(e) => {
              onCheckBoxChange(id, e.target.checked, label)
              setIsSelected(!isSelected)
            }}
            iconColor="red"
            defaultIsChecked={false}
            colorScheme="white"
            borderColor="black"
            mr="20px"
            style={{ transform: "scale(2.3)", }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default VotingOption;
