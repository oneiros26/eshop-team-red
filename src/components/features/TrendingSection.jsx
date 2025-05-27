import React, { useContext } from "react";
import ProductCard from "./product-card/ProductCard";
import { DataContext } from "../../context/DataProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function TrendingSection() {
    const apiData = useContext(DataContext);

    return(
        <Swiper 
            spaceBetween={20}
            slidesPerView={'auto'}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
        >
            {apiData.map((product) => (
                <SwiperSlide style={{ width: '220px', backgroundColor: "yellow" }} key={product.id}>
                    <ProductCard
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TrendingSection