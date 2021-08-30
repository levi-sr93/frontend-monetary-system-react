import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const CheckHistory = () => {
  const { historic } = useSelector((state) => state.account);

  return (
    <Flex direction="column" background="gray.100" p={4} m={4} rounded={4}>
      <Heading>Histórico de Transações</Heading>
      <Box>
        {historic.map((item) => (
          <Box p={2} key={item.id}>
            <Text >
              Tipo de operação: {item.operation}
            </Text>
            <Text>
              Valor da operação: {item.value}
            </Text>
            <Text>
              Data da operação: {item.date}
            </Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default CheckHistory;
