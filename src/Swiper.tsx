import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function Swipera() {
  const progressCircle = useRef<any>();
  const progressContent = useRef<any>(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: false,
        }}
        navigation={false}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <SwiperSlide>
          <img
            className="bg"
            src="https://images.pexels.com/photos/1054203/pexels-photo-1054203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg"
            src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg"
            src="https://images.pexels.com/photos/3832475/pexels-photo-3832475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg"
            src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg"
            src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
