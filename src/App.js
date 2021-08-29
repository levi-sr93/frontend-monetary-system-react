import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";


import MakeDeposit from "./components/MakeDeposit";
import CheckBalance from "./components/CheckBalance";
import MakeConvertion from "./components/MakeConvertion";
import CheckHistory from "./components/CheckHistory";

function App() {
  const [displayBalance, setDisplayBalance] = useState(false);
  const [displayConvert, setDisplayConvert] = useState(false);
  const [displayHistory, setDisplayHistory] = useState(false);
  const [displayDeposit, setDisplayDeposit] = useState(false);

  const handleSelect = (operationType) => {
    setDisplayBalance(operationType === 'balance');
    setDisplayConvert(operationType === 'convert');
    setDisplayHistory(operationType === 'history');
    setDisplayDeposit(operationType === 'deposit');
  }  

  return (
    <Container centerContent flexDir="row" p={4}>
      <Flex
        direction="column"
        background="gray.100"
        p={4}
        m={4}
        rounded={4}
        className="content"
      >
        <Heading textAlign="center">App Cambio Monetário</Heading>

        <Box p={4}>
          <Button
            colorScheme="teal"
            width="30%"
            m={1}
            onClick={() => handleSelect("balance")}
          >
            Saldo
          </Button>
          <Button
            colorScheme="teal"
            width="30%"
            m={1}
            onClick={() => handleSelect("deposit")}
          >
            Depositar
          </Button>
          <Button
            colorScheme="teal"
            width="30%"
            m={1}
            onClick={() => handleSelect("convert")}
          >
            Converter
          </Button>
          <Button
            colorScheme="teal"
            width="30%"
            m={1}
            onClick={() => handleSelect("history")}
          >
            Histórico
          </Button>
        </Box>

        {displayBalance && <CheckBalance />}
        {displayConvert && <MakeConvertion />}
        {displayHistory && <CheckHistory />}
        {displayDeposit && <MakeDeposit />}

      </Flex>
    </Container>
  );
}

export default App;
