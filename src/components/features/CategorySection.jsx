import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import FormulaImage from "../../assets/category-photos/ayumu-iwasa-team-mugen.jpg";
import GroupGt3 from "../../assets/category-photos/group-gt3.jpg";
import CarLoop from "../../assets/category-photos/car-loop.jpg";

function TrendingSection() {
  return (
    <div className="my-10">
      <h2 className="text-center font-semibold text-5xl p-8">Categories</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={"3"}
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
      >
        <SwiperSlide style={styles.swiperSlide}>
          <CategoryCard title={"Formula 1"} image={FormulaImage} />
        </SwiperSlide>
        <SwiperSlide style={styles.swiperSlide}>
          <CategoryCard title={"Group GT3"} image={GroupGt3} />
        </SwiperSlide>
        <SwiperSlide style={styles.swiperSlide}>
          <CategoryCard title={"special"} image={CarLoop} />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <CategoryCard title={"Formula 1"} image={FormulaImage} />
        </SwiperSlide>
        <SwiperSlide style={styles.swiperSlide}>
          <CategoryCard title={"Group GT3"} image={GroupGt3} />
        </SwiperSlide>
        <SwiperSlide style={styles.swiperSlide}>
          <CategoryCard title={"special"} image={CarLoop} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TrendingSection;

const styles = {
  swiperSlide: {
    width: "450px",
    display: "flex",
    justifyContent: "center",
  },
};
