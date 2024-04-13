import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppDispatch } from "../../../context/hooks"; 
import { deleteItem } from "../../../context/slices/cartSlice";

interface Props {
    id: number
}

const DeleteButton = ({id}: Props) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteItem({id}));
    };

    return (
        <Flex 
        as='button' 
        alignItems={'center'} 
        borderRadius={10} 
        gap={1} 
        fontSize={'0.8rem'} 
        bg={'brand.darkBrown'} 
        color={'brand.lightBeige'} p={'0.1rem 0.5rem'}
        onClick={handleDelete}
        >
            <Icon as={FaRegTrashAlt}/>Remover
        </Flex>
    );
};

export default DeleteButton;