import React, { useEffect, useState } from "react";
import { Flex, HStack, Text, Button, Spinner, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton, useDisclosure, Heading, } from "@chakra-ui/react";
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
  const [oneSelected, setOneSelected] = useState(false)
  const [activeLabel, setActiveLabel] = useState("")
  const [activeId, setActiveId] = useState("")

  const [confirmText, setConfirmText] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const { userDoc } = useUser();

  const handleCheckBoxChange = (id: string, isChecked: boolean, label: React.SetStateAction<string>) => {
    setOneSelected(!oneSelected)
    setActiveLabel(label)
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [id]: isChecked,
    }));
  }

  const handleFirstConfirm = () => {
    for (const option in selectedOptions) {
      if (selectedOptions[option]) {
        console.log(option)
        setConfirmText("Votar na " + activeLabel)
        setActiveId(option)
        onOpen()
        return
      }
    }
    console.log("white")
    setConfirmText("Votar em branco")
    setActiveId("white")
    onOpen()
  }

  const handleVote = async () => {
    if (userDoc) {
      let documentName = ""
      const status = userDoc.status
      if (status == 1) {
        documentName = "mag"
      }
      else if (status == 2) {
        documentName = "cf"
      }
      else if (status == 3) {
        documentName = "cd"
      }
      setIsLoading(true)
      await setVote(documentName, activeId)
      await setStatus(userDoc.status + 1)
      setIsLoading(false)
    }

  }

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
    if (userDoc) {
      if (!userDoc.status) {
        setStatus("1");
      }
    }
  }, [userDoc]);

  const setStatus = async (status: string) => {
    const numSocio = userDoc.numSocio.toString()
    console.log(numSocio)

    await fetch("/api/setUserStatus", {
      method: 'POST',
      body: new URLSearchParams({
        numSocio: numSocio,
        status: status,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        router.reload()
      })
      .catch(error => console.error('Erro ao chamar o endpoint:', error));
  }

  const setVote = async (documentName: string, option: string) => {

    await fetch("/api/setVote", {
      method: 'POST',
      body: new URLSearchParams({
        documentName: documentName,
        option: option,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error('Erro ao chamar o endpoint:', error));
  }

  return (
    <ProtectedRoute>
      <Flex
        display={userDoc?.status >= 4 ? "none" : "flex"}
        w="100vw"
        h="100vh"
        align="center"
        //justify="center"
        pt="50px"
        direction="column" // Alterando a direção para column
        bgColor="bgColor"
      >
        <StatusBar status={userDoc?.status} />

        <HStack spacing={["20px", "20px", "50px", "50px"]} align="center" justify="center" wrap="wrap" mt={["10vh", "10vh", "15vh", "20vh"]}>
          {options.map((option: any, index) => (
            <VotingOption key={index} id={option.id} label={option.displayName} onCheckBoxChange={handleCheckBoxChange} disabled={oneSelected} />
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
            onClick={() => handleFirstConfirm()}
            color="white"
            _hover={{
              background: "hoverRed"
            }}
            _active={{
              bg: `clickRed`,
            }}
          >
            <Text >Confirmar</Text>
          </Button>

          {/* Adicionando a frase abaixo do ConfirmationBox */}
          <Text px="20px" mt={"10px"} color="grey" fontSize={["12px", "12px", "15px", "15px"]} textAlign="center">
            Se confirmar o seu voto sem selecionar uma lista, será considerado voto em branco
          </Text>
        </Flex>
      </Flex>

      <Flex
        display={userDoc?.status >= 4 ? "flex" : "none"}
        w="100vw"
        h="100vh"
        align="center"
        //justify="center"
        pt="50px"
        direction="column" // Alterando a direção para column
        bgColor="bgColor"
        alignContent="center"
        justifyContent="center"
      >
        <Flex
          w={["110px", "110px", "130px", "130px"]}
          h={["110px", "110px", "130px", "130px"]}
          bgImage="/images/check.png"
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Heading color="red" fontSize={["26px", "30px", "50px", "50px"]} mt="30px">
          O seu voto foi registado!
        </Heading>

        <Heading fontWeight="medium" fontSize={["17px", "20px", "40px", "40px"]}>
          Agradecemos o tempo disponibilizado.
        </Heading>

        <Button
          mt="30px"
          borderRadius="10px"
          w="150px"
          h="50px"
          bgColor="red"
          fontSize="18px"
          onClick={() => router.push("/home")}
          color="white"
          _hover={{
            background: "hoverRed"
          }}
          _active={{
            bg: `clickRed`,
          }}
        >
          <Text>Voltar</Text>
        </Button>
      </Flex>

      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Confirmar Voto</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {confirmText}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>
              No
            </Button>
            <Button
              ml={3}
              bgColor="red"
              onClick={() => handleVote()}
              color="white"
              _hover={{
                background: "hoverRed"
              }}
              _active={{
                bg: `clickRed`,
              }}
            >
              <Text display={isLoading ? "none" : "flex"}>Sim</Text>
              <Spinner display={isLoading ? "flex" : "none"} />
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ProtectedRoute >
  );
}
