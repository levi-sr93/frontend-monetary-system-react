import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useToast
} from "@chakra-ui/react";

import { makeConvertion } from "../../store/actions/accountActions";

const MakeConvertion = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const {convertedBalance} = useSelector((state) => state.account)
  const [amount, setAmount] = useState('');
  const [selectedCurrencyBase, setSelectedCurrencyBase] = useState('BRLCotation');
  const [selectedCurrencyTarget, setSelectedCurrencyTarget] = useState('BRLCotation');

  const handleConvert = () => {
    if(amount === ''){
      toast({
        title: "Infome um valor para a conversão",
        status: "error",
        duration: 3000,
        isClosable: true,
      })

      return
    }
    dispatch(makeConvertion(amount, selectedCurrencyBase, selectedCurrencyTarget))
    toast({
      title: "Conversão realizada",
      description: "Verifique no seu histórico",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Flex direction="column"
    background="gray.100"
    p={4}
    m={4}
    rounded={4}
    className="content">
      <Heading>Conversão Monetária</Heading>
      <Box  p={4}>
        <FormLabel>Valor para Conversão</FormLabel>
        <Input
          value={amount}
          placeholder="100,00"
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>
      <Box  p={4}>
        <FormControl p={2}>
          <FormLabel>Escolha a moeda que deseja converter:</FormLabel>
          <Select onChange={(e) => setSelectedCurrencyBase(e.target.value)}>
            <option value={'BRLCotation'}>R$ - Real</option>
            <option value={'USDCotation'}>$ - Dolar</option>
            <option value={'EURCotation'}>€ - Euro</option>
          </Select>
        </FormControl>

        <FormControl p={2}>
          <FormLabel>Para qual moeda será convertida:</FormLabel>
          <Select onChange={(e) => setSelectedCurrencyTarget(e.target.value)}>
          <option value={'BRLCotation'}>R$ - Real</option>
            <option value={'USDCotation'}>$ - Dolar</option>
            <option value={'EURCotation'}>€ - Euro</option>
          </Select>
        </FormControl>

        <Box p={4}>
          <Button colorScheme="blue" width="100%" onClick={handleConvert}>
            Converter
          </Button>
        </Box>

        {
          convertedBalance?.amount && (
            <Box p={4}>
              <Text size="3xl">Valor Final Convertido</Text>
              <Text>Valor convertido: {convertedBalance?.amount}</Text>
              <Text>Valor do IOF aplicado: {convertedBalance?.iof}</Text>
              <Text>Valor do SPREAD aplicado: {convertedBalance?.spread}</Text>

            </Box>
          )
        }
      </Box>
    </Flex>
  );
};

export default MakeConvertion;
