import React, {useState} from "react";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useToast
} from "@chakra-ui/react";
import { makeDeposit } from "../../store/actions/accountActions";

const MakeDeposit = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [depositAmount, setDepositAmount] = useState('');

  const handleDepositAmount = (e) => {
    setDepositAmount(e.target.value)
  }

  const handleMakeDeposit = () => {
    dispatch(makeDeposit(Number(depositAmount)));
    setDepositAmount('');
    toast({
      title: "Depósito realizado.",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Flex
      direction="column"
      background="gray.100"
      p={4}
      m={4}
      rounded={4}
      className="content"
    >
      <Heading>Realizar Depósito</Heading>
      <Box>
        <FormControl id="deposit" isRequired p={4}>
          <InputGroup
            display="flex"
            flexDirection="row"
            alignItems="center"
            size="lg"
          >
            <InputLeftElement children='R$'/>
            <Input
              fontSize="1.5rem"
              size="lg"
              placeholder="20,00"
              value={depositAmount !== 0 && depositAmount}
              onChange={(e) => handleDepositAmount(e)}
            />
          </InputGroup>
        </FormControl>
      </Box>

      <Box p={4}>
        {depositAmount !== '' && (
          <Button colorScheme="blue" width="100%" onClick={handleMakeDeposit}>
            Depositar: R$ {depositAmount} 🇧🇷
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default MakeDeposit;
