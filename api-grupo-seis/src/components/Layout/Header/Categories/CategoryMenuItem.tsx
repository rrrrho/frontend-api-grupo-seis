import { MenuItem, Icon, Text } from "@chakra-ui/react";
import React from "react";

const CategoryMenuItem = ({ name, icon: IconComponent, route, onClick, isFirst, isLast }) => (
  <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} p={3} onClick={() => onClick(route)} _hover={{bg: 'rgba(78,110,82,0.3)'}}  borderTopRadius={isFirst ? '5' : '0'} borderBottomRadius={isLast ? '5' : '0'}>
    <Icon as={IconComponent} boxSize={'1.5rem'}/>
    <Text>{name}</Text>
  </MenuItem>
);

export default CategoryMenuItem;