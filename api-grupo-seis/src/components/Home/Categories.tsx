import { Flex, Link } from "@chakra-ui/react";
import React from "react";

interface Item {
    image: string,
    href: string,
    alt: string
}

interface Props {
    items: Item[]
}

const Categories = ({items}: Props) => {
    return (
        <Flex mt="2rem" gap={6}>
            {items.map(item => 
                <Link href={item.href} textDecoration="none">
                    <img src={item.image} alt={item.alt} style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />
                </Link>
            )}
        </Flex>
    );
};

export default Categories;