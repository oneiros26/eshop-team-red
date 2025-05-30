import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import FormulaImage from "../../assets/category-photos/ayumu-iwasa-team-mugen.jpg";
import GroupGt3 from "../../assets/category-photos/group-gt3.jpg";
import CarLoop from "../../assets/category-photos/car-loop.jpg";
import Nascar from "../../assets/category-photos/nascar.jpg";
import FormulaE from "../../assets/category-photos/formulae.avif";
import HyperCar from "../../assets/category-photos/hypercar.webp";

function TrendingSection() {
  const slides = [
    { title: "Formula 1", image: FormulaImage },
    { title: "Group GT3", image: GroupGt3 },
    { title: "Nascar", image: Nascar },
    { title: "Formula E", image: FormulaE },
    { title: "Hypercars", image: HyperCar },
  ];

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="my-10">
      <h2 className="text-center font-semibold text-5xl p-8">Kategorie</h2>
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          800: { slidesPerView: 2, spaceBetween: 16 },
          1200: { slidesPerView: 3, spaceBetween: 16 },
          1300: { slidesPerView: 3, spaceBetween: 0 },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        loop={true}
        modules={[Autoplay]}
        direction="horizontal"
        speed={3000}
        grabCursor={true}
      >
        {duplicatedSlides.map((slides, index) => (
          <SwiperSlide key={index} style={styles.swiperSlide}>
            <CategoryCard title={slides.title} image={slides.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  // console.log(duplicatedSlides)
}

export default TrendingSection;

const styles = {
  swiperSlide: {
    width: "450px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
  },
};
