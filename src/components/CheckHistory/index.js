import React from "react";
import { Icon } from "@chakra-ui/icons";
import { GiMoneyStack } from "react-icons/gi";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";

const CheckHistory = ({ amount }) => {
  return (
    <Flex
      direction="column"
      background="gray.100"
      p={4}
      m={4}
      rounded={4}
    >
      <Heading>Histórico de Transações</Heading>
      <Box 
        >
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
        <Text fontSize="3xl">Consulta de Saldo</Text>
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default CheckHistory;
