import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { CurrencySeleted } from '../utils/helpers';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip, EffectCards, EffectCoverflow } from 'swiper/modules';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

export const Slider = ({ items }) => {

    return (<>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCards, EffectCoverflow, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            effect='flip'
            autoplay={{ delay: 3000 }}
            pagination={{
                clickable: true,
            }}
            navigation
            scrollbar={{ draggable: true }}
        >
            {items.data?.map((item, i) => {
                return <SwiperSlide key={i} style={{ height: '90vh' }}>
                    <img src={`${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Src}`} style={{ height: '90vh', width: '100%' }} alt=''></img>
                    <p>{item && item.ProgramaPrecioTxt} {formatter.format(item.ProgramaPrecioUSD).replace("$", `${CurrencySeleted()} `).replace(",", ".")}</p>
                </SwiperSlide>
            })}
        </Swiper>

    </>)
}
