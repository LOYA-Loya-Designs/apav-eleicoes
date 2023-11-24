import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function ConfirmationBox({ status }) {
    return (
        <Flex w="800px" h="fit-content" gap="20px" mt="60px">
            <Flex w="33%" align="center" justify="center" direction="column" gap="6px">
                <Text textAlign="center" fontWeight="medium" fontSize="25px" color={status == 0 ? "red" : "#bfbfbf"}>1 - Assembleia Geral </Text>
                <Flex w="100%" h="10px" bg={status == 0 ? "red" : "#bfbfbf"} />
            </Flex>
            <Flex w="33%" align="center" justify="center" direction="column" gap="6px">
                <Text textAlign="center" fontWeight="medium" fontSize="25px" color={status == 1 ? "red" : "#bfbfbf"}>2 - Conselho Fiscal </Text>
                <Flex w="100%" h="10px" bg={status == 1 ? "red" : "#bfbfbf"} />
            </Flex>
            <Flex w="33%" align="center" justify="center" direction="column" gap="6px">
                <Text textAlign="center" fontWeight="medium" fontSize="25px" color={status == 2 ? "red" : "#bfbfbf"}>3 - Conselho Diretivo </Text>
                <Flex w="100%" h="10px" bg={status == 2 ? "red" : "#bfbfbf"} />
            </Flex>


        </Flex>
    );
}
