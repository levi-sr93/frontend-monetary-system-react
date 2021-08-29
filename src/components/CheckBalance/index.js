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

const CheckBalance = ({ amount }) => {
  return (
    <Flex direction="column"
    background="gray.100"
    p={4}
    m={4}
    rounded={4}
    className="content">
      <Heading>Saldo em Conta</Heading>
      <Box>
        <Text fontSize="3xl">R$ 100,00</Text>
      </Box>
      <Box>
        <FormControl p={4}>
          <FormLabel>Escolha a moeda:</FormLabel>
          <Select>
            <option value="real">R$ - Real</option>
            <option value="dolar">$ - Dolar</option>
            <option value="euro">€ - Euro</option>
          </Select>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default CheckBalance;
