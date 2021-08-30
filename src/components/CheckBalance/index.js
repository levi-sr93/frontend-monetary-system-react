import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";

import { setCurrency } from "../../store/actions/accountActions";

const CheckBalance = () => {
  const dispatch = useDispatch();

  const {balance, balanceCurrency, currencySymbol} = useSelector((state) => state.account);
  
  return (
    <Flex direction="column"
    background="gray.100"
    p={4}
    m={4}
    rounded={4}
    className="content">
      <Heading>Saldo em Conta</Heading>
      <Box>
        <Text fontSize="3xl"> {currencySymbol} {balanceCurrency !== null ? balanceCurrency : balance }</Text>
      </Box>
      <Box>
        <FormControl p={4}>
          <FormLabel>Escolha a moeda:</FormLabel>
          <Select onChange={(e) => dispatch(setCurrency(e.target.value))}>
            <option value="real-R$-BRLCotation">R$ - Real 🇧🇷</option>
            <option value="dolar-$-USDCotation">$ - Dolar 🇺🇸</option>
            <option value="euro-€-EURCotation">€ - Euro 🇪🇺</option>
          </Select>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default CheckBalance;
