import { Swiper, SwiperSlide } from 'swiper/react';

export default function OtherSwiper() {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1.5}
        breakpoints={{
            480: {
                slidesPerView: 2.5
            },
            992: {
                slidesPerView: 3.5
            },
        }}>
            <SwiperSlide>
                <img className="dark:hidden" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                <img className="hidden dark:block" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="dark:hidden" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                <img className="hidden dark:block" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="dark:hidden" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                <img className="hidden dark:block" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />   
            </SwiperSlide>
        </Swiper>
    )
}