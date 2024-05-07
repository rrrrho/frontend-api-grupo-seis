import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "../Shop/Card";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types/product";
import { cutTitle } from "../../utils/card";

interface Props {
  products: Product[]
}

const ProductsCarrousel = ({ products }: Props) => { 

  return (
    <Box>
        <Box  px={10} position={"relative"}>
        <Swiper
        
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="productsSwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          2000: {
            slidesPerView: 5,
          }
        }}
          >
            {products?.map((product) => (
              <SwiperSlide className="productSlide">
                <Card
                                                          id={product.id}
                                                          name={cutTitle(product.name)}
                                                          image={product.image}
                                                          rating={product.rating}
                                                          voters={product.voters}
                                                          price={product.price}
                                                          quota={product.price / 6}
                                                          discount={product.discount}
                                                          stock={product.stock}
                                                          bestseller={product.bestseller}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      
      
    </Box>
  );
};

export default ProductsCarrousel;
