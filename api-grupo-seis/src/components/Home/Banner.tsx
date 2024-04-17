// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import pulgas from "../../assets/img/home/banner-pulgas.png";
import snacks from "../../assets/img/home/banner-snacks.png";
import { Image } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src={pulgas} objectFit={'cover'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={snacks} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
