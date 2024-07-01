import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { formatPrice, calculateDiscount, generateRating } from "../utils/card";
import AddToCart from "../components/ProductDetail/AddToCart2";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useAppSelector } from "../context/hooks";
import { selectUser } from "../context/slices/userSlice";

const ProductDetail = () => {
  const user = useAppSelector(selectUser);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();
  const product = location.state;
  const {
    id,
    name,
    image,
    rating,
    voters,
    price,
    quota,
    discount,
    stock,
    bestseller,
  } = product;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Flex justify="center" align="center" w="100vw" h="80vh">
        <Skeleton
          as={Flex}
          isLoaded={!isLoading}
          startColor="brand.darkGreen"
          endColor="brand.lightGreen"
          w={{ base: "30rem", xl: "50rem" }}
          bg="brand.lightBeige"
          borderRadius="15px"
          position="relative"
          transition="all 0.2s"
        >
          <Box
            bg="white"
            h="60vh"
            w="100%"
            borderTopRadius="15px"
            position="relative"
            cursor="pointer"
          >
            { stock === 0 && 
              <Text pos={'absolute'} top={3} left={3} fontSize={'2rem'} p={'0.2rem 0.5rem'} borderRadius={'5px'} color={'brand.lightBeige'} bg={'brand.darkGreen'}>Sin stock</Text>
            }
            {bestseller && (
              <Text
                position="absolute"
                bottom="0"
                fontWeight="600"
                color="brand.darkBrown"
                fontSize={{ base: "0.6rem", xl: "0.8rem" }}
                p="0.2rem 0.5rem"
                bg="brand.darkMustard"
                borderTopRightRadius="5px"
              >
                ¡Más vendido!
              </Text>
            )}
            <Image
              src={image}
              objectFit="contain"
              w="100%"
              h="100%"
              borderTopRadius="15px"
            />
          </Box>

          <Box p="1.4rem">
            <Box h="18.6vh">
              <Text
                fontWeight="600"
                fontSize={{ base: "2.8rem", xl: "2rem" }}
                cursor="pointer"
              >
                {name}
              </Text>
              <Flex gap={1} alignItems={"center"}>
                <Text fontSize={{ base: "0.6rem", xl: "1.8rem" }}>
                  {rating}
                </Text>
                <Flex alignItems={"center"}>{generateRating(rating)}</Flex>
                <Text fontSize={{ base: "0.6rem", xl: "1.8rem" }}>
                  ({voters})
                </Text>
              </Flex>
            </Box>
            <Flex flexDir="column" mt={2}>
              {discount ? (
                <Text
                  fontSize={{ base: "0.5rem", xl: "1.7rem" }}
                  textDecoration="line-through"
                  color="gray"
                >
                  ${formatPrice(price)}
                </Text>
              ) : (
                <Text
                  fontSize={{ base: "0.5rem", xl: "1.7rem" }}
                  color="brand.lightBeige"
                >
                  aa
                </Text>
              )}
              <Flex alignItems="center">
                {discount ? (
                  <>
                    <Text
                      fontWeight="600"
                      fontSize={{ base: "0.8rem", xl: "2rem" }}
                    >
                      ${formatPrice(calculateDiscount(price, discount))}
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", xl: "1.7rem" }}
                      ml={1}
                      color="brand.darkBrown"
                      fontWeight={600}
                    >
                      {discount}%
                    </Text>
                  </>
                ) : (
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "0.8rem", xl: "1rem" }}
                  >
                    ${formatPrice(price)}
                  </Text>
                )}
              </Flex>
              <Text fontSize={{ base: "0.5rem", xl: "1.1rem" }}>
                En 6 cuotas de ${formatPrice(quota)}
              </Text>
              <Text
                mt={3}
                p="0.4rem 1.5rem"
                borderRadius={3}
                bg="brand.lightGreen"
                w="fit-content"
                fontSize={{ base: "0.5rem", xl: "0.7rem" }}
                color="brand.cream"
              >
                Envío gratis
              </Text>
            </Flex>
            <Flex justifyContent="flex-end">
              {" "}
              {}
              {(user.role === 'BUYER' || user.email === undefined) && stock > 0 &&
              <AddToCart
                id={id}
                name={name}
                image={image}
                rating={rating}
                voters={voters}
                price={price}
                discount={discount}
                quota={quota}
                stock={stock}
                bestseller={bestseller}
              />
              }
            </Flex>
          </Box>
        </Skeleton>
      </Flex>
    </>
  );
};
export default ProductDetail;
