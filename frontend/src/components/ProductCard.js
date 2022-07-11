import { Box, Flex, Heading, Link, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Rating from "./Rating";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        maxW="sm"
        borderRadius="lg"
        bgColor="white"
        overflow="hidden"
        _hover={{ shadow: "lg" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          minH="400px"
          // maxH="400px"
          objectFit="cover"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" fontSize="lg" mb="3">
            {product.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} />
            <Text fontSize="2xl" fontWeight="bold" color="teal.500">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
