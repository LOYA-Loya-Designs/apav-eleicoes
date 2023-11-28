import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function ConfirmationBox({ status }) {
    return (
        <Flex w={["95vw", "95vw", "95vw", "900px"]} h="fit-content" gap={["5px", "12px", "15px", "20px"]} mt={["20px", "20px", "40px", "60px"]} align="end">
            <Flex w="33%" align="center" justify="center" direction="column" gap="6px">
                <Text textAlign="center" fontWeight="medium" fontSize={["12px", "12px", "15px", "20px"]} color={status == 1 ? "red" : "#bfbfbf"}>1 - Mesa da Assembleia Geral </Text>
                <Flex w="100%" h={["5px", "5px", "10px", "10px"]} bg={status == 1 ? "red" : "#bfbfbf"} />
            </Flex>
            <Flex w="33%" align="center" justify="center" direction="column" gap="6px">
                <Text textAlign="center" fontWeight="medium" fontSize={["12px", "12px", "15px", "20px"]} color={status == 2 ? "red" : "#bfbfbf"}>2 - Conselho Fiscal </Text>
                <Flex w="100%" h={["5px", "5px", "10px", "10px"]} bg={status == 2 ? "red" : "#bfbfbf"} />
            </Flex>
            <Flex w="33%" align="center" justify="center" direction="column" gap="6px">
                <Text textAlign="center" fontWeight="medium" fontSize={["12px", "12px", "15px", "20px"]} color={status == 3 ? "red" : "#bfbfbf"}>3 - Direção </Text>
                <Flex w="100%" h={["5px", "5px", "10px", "10px"]} bg={status == 3 ? "red" : "#bfbfbf"} />
            </Flex>


        </Flex>
    );
}
