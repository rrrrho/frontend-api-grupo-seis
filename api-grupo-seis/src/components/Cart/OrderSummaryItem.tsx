import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type OrderSummaryItemProps = {
  label: string
  value?: string
  children?: React.ReactNode,
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium">
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export default OrderSummaryItem;