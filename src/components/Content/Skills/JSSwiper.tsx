import { Swiper, SwiperSlide } from 'swiper/react';

export default function JSSwiper() {
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="dark:hidden" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img className="hidden dark:block" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>   
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="dark:invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            </SwiperSlide>
        </Swiper>
    )
}