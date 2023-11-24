import React, { useEffect, useState } from "react";
import { Flex, HStack, Text, Button, Spinner } from "@chakra-ui/react";
import VotingOption from "../components/VotingOption";
import Header from "../components/Header";
import ConfirmationBox from "../components/ConfirmationBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import StatusBar from "@/components/StatusBar";
import { useUser } from "@/components/UserContext";
import { useRouter } from "next/router";

interface SelectedOptions {
  [key: string]: boolean;
}

export default function Vote() {

  const router = useRouter()

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([])

  const { userDoc } = useUser();
  console.log(userDoc)

  const handleCheckBoxChange = (label: string, isChecked: boolean) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [label]: isChecked,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getOptions`);
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (userDoc) {
        const numSocio = userDoc.numSocio.toString()
        console.log(numSocio)
        if (!userDoc.status) {
          await fetch("/api/setUserStatus", {
            method: 'POST',
            body: new URLSearchParams({
              numSocio: numSocio,
              status: '0',
            }),
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Erro ao chamar o endpoint:', error));


        }
      }


    }
    fetchData();


  }, [userDoc]);

  return (
    <ProtectedRoute>


      <Flex
        w="100vw"
        h="100vh"
        align="center"
        //justify="center"
        pt="50px"
        direction="column" // Alterando a direção para column
        bgColor="bgColor"
      >
        <StatusBar status={userDoc?.status} />

        <HStack spacing={"50px"} align="center" justify="center" wrap="wrap" mt="20vh">
          {options.map((option: any, index) => (
            <VotingOption key={index} id={option.id} label={option.displayName} onCheckBoxChange={handleCheckBoxChange} />
          ))}
        </HStack>

        {/* Movendo o ConfirmationBox para ficar abaixo dos VotingOptions */}
        <Flex direction="column" align="center" justify="center" mt="10vh">
          <Button
            borderRadius="10px"
            w="150px"
            h="50px"
            bgColor="red"
            fontSize="18px"
            onClick={() => console.log(selectedOptions)}
            color="white"
            _hover={{
              background: "hoverRed"
            }}
            _active={{
              bg: `clickRed`,
            }}
          >
            <Text display={isLoading ? "none" : "flex"}>Confirmar</Text>
            <Spinner display={isLoading ? "flex" : "none"} />
          </Button>

          {/* Adicionando a frase abaixo do ConfirmationBox */}
          <Text mt={"10px"} color="grey" fontSize="15px">
            Se confirmar o seu voto sem selecionar uma lista, será considerado voto em branco
          </Text>
        </Flex>
      </Flex>
    </ProtectedRoute >
  );
}
