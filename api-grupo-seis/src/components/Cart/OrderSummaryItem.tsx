import { Flex, Text, useColorModeValue as mode } from "@chakra-ui/react"
import React from "react"

type OrderSummaryItemProps = {
  label: string
  value?: string
  children?: React.ReactNode,
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text>
        {label}
      </Text>
      {value ? <Text>{value}</Text> : children}
    </Flex>
  )
}

export default OrderSummaryItem