'use client'
import { register } from 'swiper/element/bundle';
import { Autoplay, EffectFade } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import { SwiperOptions } from 'swiper/types';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';

register();

export default function Slider () {
    return (
        <>
            <Swiper
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            speed={1600}
            effect="fade"
            loop={true}
            modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide><img src="/images/bg01.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/bg02.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/bg03.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/bg04.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/bg05.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}