import React from "react";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const UserAdminPaginator = ({
  alignSelf,
  m,
  totalPages,
  selectedPage,
  setSelectedPage,
}) => {
  const handleNextPage = () => {
    if (selectedPage == totalPages - 1) {
      return;
    }
    setSelectedPage(selectedPage + 1);
  };

  const handlePreviousPage = () => {
    if (selectedPage == 0) {
      return;
    }
    setSelectedPage(selectedPage - 1);
  };

  return (
    <Flex
      gap={4}
      borderRadius="5px"
      alignItems="center"
      justify={"center"}
      alignSelf={alignSelf}
      m={m}
    >
      <Button
        as="button"
        alignItems="center"
        justifyContent="center"
        bg={"brand.darkBrown"}
        color={"brand.lightBeige"}
        _hover={
          selectedPage === 0
            ? {}
            : {
                bg: "brand.lightBeige",
                color: "brand.darkBrown",
                transform: "scale(1.2)",
              }
        }
        opacity={selectedPage === 0 ? 0.5 : 1}
        cursor={selectedPage === 0 ? "not-allowed" : "pointer"}
        transition="all .2s ease-in-out"
        borderRadius={5}
        h="3rem"
        w="3rem"
        onClick={handlePreviousPage}
      >
        <Icon as={FaArrowLeft} />
      </Button>
      {Array.from({ length: totalPages }, (_, index) =>
        index === selectedPage ? (
          <Button
            key={index}
            fontWeight="600"
            w="3rem"
            h="3rem"
            bg="brand.lightBeige"
            borderRadius={5}
            color="brand.darkBrown"
            _hover={{}}
          >
            {index + 1}
          </Button>
        ) : (
          <Button
            key={index}
            fontWeight="600"
            w="3rem"
            h="3rem"
            color="brand.lightBeige"
            transition="all .2s ease-in-out"
            borderRadius={5}
            bg="brand.darkBrown"
            _hover={{
              bg: "brand.lightBeige",
              color: "brand.darkBrown",
              transform: "scale(1.2)",
            }}
            onClick={() => setSelectedPage(index)}
          >
            {index + 1}
          </Button>
        )
      )}
      <Button
        as="button"
        alignItems="center"
        justifyContent="center"
        bg={"brand.darkBrown"}
        color={"brand.lightBeige"}
        _hover={
          selectedPage === totalPages - 1
            ? {}
            : {
                bg: "brand.lightBeige",
                color: "brand.darkBrown",
                transform: "scale(1.2)",
              }
        }
        opacity={selectedPage === totalPages - 1 ? 0.5 : 1}
        cursor={selectedPage === totalPages - 1 ? "not-allowed" : "pointer"}
        transition="all .2s ease-in-out"
        borderRadius={5}
        h="3rem"
        w="3rem"
        onClick={handleNextPage}
      >
        <Icon as={FaArrowRight} />
      </Button>
    </Flex>
  );
};

export default UserAdminPaginator;
