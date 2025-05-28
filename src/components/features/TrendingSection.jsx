import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function TrendingSection() {
  const apiData = useContext(DataContext);

  const selectedIds = [8, 6, 9, 12, 7, 2];

  const trendingProducts = apiData.filter((product) =>
    selectedIds.includes(product.id)
  );

  return (
    <div className="my-10">
      <h2 className="text-center font-semibold text-5xl p-8">Trending</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={"5"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        style={{ backgroundColor: "white" }}
        speed={2000}
      >
        {trendingProducts.map((product) => (
          <SwiperSlide
            style={{
              width: "220px",
              backgroundColor: "#dbeafe",
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
            key={product.id}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingSection;
