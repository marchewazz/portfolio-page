import { Swiper, SwiperSlide } from 'swiper/react';

export default function FrontSwiper() {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3.5}>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />  
            </SwiperSlide>
        </Swiper>
    )
}