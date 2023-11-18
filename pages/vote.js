import React, { useState } from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import VotingOption from "../components/VotingOption";
import Header from "../components/Header";
import ConfirmationBox from "../components/ConfirmationBox";

export default function Vote() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (value) => {
    setIsChecked(value);
  };

  return (
    <>
      <Header user={undefined} iconSvg={undefined}></Header>

      <Flex
        gap="150px"
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column" // Alterando a direção para column
        bgColor="DEDEDE"
      >
        <HStack spacing={"50px"} align="center" justify="center" wrap="wrap">
          <VotingOption label="Lista A" onCheckBoxChange={handleCheckBoxChange} />
          <VotingOption label="Lista B" onCheckBoxChange={handleCheckBoxChange} />
        </HStack>

        {/* Movendo o ConfirmationBox para ficar abaixo dos VotingOptions */}
        <Flex mt={4} direction="column" align="center" justify="center">
          <ConfirmationBox label="Confirmar voto" />

          {/* Adicionando a frase abaixo do ConfirmationBox */}
          <Text mt={2} color="grey" fontSize="15px">
            Se confirmar o seu voto sem selecionar uma das listas será considerado voto em branco
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
