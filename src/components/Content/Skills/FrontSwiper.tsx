import { Swiper, SwiperSlide } from 'swiper/react';

export default function FrontSwiper() {
    return (
        <Swiper className="my-4"
        spaceBetween={50}
        slidesPerView={1.5}
        breakpoints={{
            380: {
                slidesPerView: 2.5
            },
            768: {
                slidesPerView: 3.5
            },
        }}>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="dark:hidden" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg" />
                <img className="hidden dark:block" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="dark:hidden" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />  
                <img className="hidden dark:block" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            </SwiperSlide>
        </Swiper>
    )
}