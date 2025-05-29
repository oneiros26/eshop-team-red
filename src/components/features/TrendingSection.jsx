import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../context/DataProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function TrendingSection() {
  const apiData = useContext(DataContext);

  console.log("ids", apiData.map((product) => product.id));

  const ids = apiData.map((product) => product.id)

  const selectedIds = [ids[0], ids[1], ids[2], ids[3], ids[4], ids[5], ids[6], ids[7]];

  const trendingProducts = apiData.filter((product) =>
    selectedIds.includes(product.id)
  );

  return (
    <div className="my-10">
      <h2 className="text-center font-semibold text-5xl p-8">Trending</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        style={{ backgroundColor: "white" }}
        speed={2000}
        grabCursor={true}
        breakpoints={
          {
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }
        }
      >
        {trendingProducts.map((product) => (
          <SwiperSlide
            style={{
              width: "fit-content",
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
                id={product.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingSection;
