import { Link } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode,
  onClick: ()=>void,
}

const ActionLink = (props: Props) => {
  const { children, onClick } = props;

  return (
    <Link
      as="a"
      px={1}
      py={1}
      rounded={'md'}
      _after={{
        display:'block',
        content: '""',
        borderBottom: 'solid 2px #003844',  
        transform: 'scaleX(0)',  
        transition: 'transform 250ms ease-in-out',
      }}
      _hover={{
        textDecoration: 'none',
        _after: {
          transform: 'scaleX(1)' 
        }
      }}
      color={'brand.darkGreen'}
      fontWeight={800}
      fontSize={16}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ActionLink;