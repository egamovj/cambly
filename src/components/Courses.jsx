import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import part1 from "../assets/images/part1.webp";
import part2 from "../assets/images/part2.webp";
import part3 from "../assets/images/part3.webp";
import internetAge from "../assets/images/internetAge.webp";
import healthy from "../assets/images/healthy.webp";
import topics from "../assets/images/topics.webp";
import planet from "../assets/images/planet.webp";
import business from "../assets/images/business.webp";
import games from "../assets/images/games.webp";
import advanced from "../assets/images/advanced.webp";

const CoursesSwipe = () => {
  return (
    <Swiper
      slidesPerView={4.5}
      spaceBetween={50}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="mt-40 mb-[60px] flex pl-[30px] pb-5"
    >
      <SwiperSlide className="rounded-2xl">
        <div className="rounded-2xl shadow-xl pt-3 transform -rotate-6">
          <img src={part1} alt="" className="w-full rounded-t-2xl " />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              IELTS Speaking Part 1
            </span>
            <p className="mt-[29.5px] text-gray-700">ANY LEVEL</p>
            <span className="text-gray-700">8 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform -rotate-6">
          <img src={part2} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              IELTS Speaking Part 2
            </span>
            <p className="mt-[29.5px] text-gray-700">ANY LEVEL</p>
            <span className="text-gray-700">8 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform rotate-6">
          <img src={internetAge} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              Life in the Internet Age
            </span>
            <p className="mt-[29.5px] text-gray-700">INTERMEDIATE</p>
            <span className="text-gray-700">9 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform rotate-6">
          <img src={healthy} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              Healthy Mind, Healthy Body
            </span>
            <p className="mt-[29.5px] text-gray-700">INTERMEDIATE</p>
            <span className="text-gray-700">6 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform -rotate-6">
          <img src={topics} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              Basic Conversation Topics
            </span>
            <p className="mt-[29.5px] text-gray-700">BEGINNER</p>
            <span className="text-gray-700">10 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform -rotate-6">
          <img src={part3} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              IELTS Speaking Part 3
            </span>
            <p className="mt-[29.5px] text-gray-700">ANY LEVEL</p>
            <span className="text-gray-700">8 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform rotate-6">
          <img src={planet} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              Caring for Our Planet
            </span>
            <p className="mt-[29.5px] text-gray-700">INTERMEDIATE</p>
            <span className="text-gray-700">7 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform rotate-6">
          <img src={business} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              Business English
            </span>
            <p className="mt-[29.5px] text-gray-700">INTERMEDIATE</p>
            <span className="text-gray-700">10 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform -rotate-6">
          <img src={games} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">Games: Beginner</span>
            <p className="mt-[29.5px] text-gray-700">BEGINNER</p>
            <span className="text-gray-700">5 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-xl pt-3 transform -rotate-6">
          <img src={advanced} alt="" className="w-full rounded-t-2xl" />
          <div className="p-3">
            <span className="font-semibold text-gray-900">
              Advanced Conversation Topics
            </span>
            <p className="mt-[29.5px] text-gray-700">ADVANCED</p>
            <span className="text-gray-700">10 LESSONS</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CoursesSwipe;
