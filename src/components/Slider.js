import React, {useState, useContext, useEffect} from 'react'
import { useQuery } from "@tanstack/react-query";
import { getSlider} from './api/Apis';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CurrencySeleted } from '../utils/helpers';
import { useTokenContext, useCurrencyContext } from './contexto/ContextoDatos';


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

export const Slider = () => {
const token = useTokenContext();
const curren = useCurrencyContext();
   const [slider, setSlider] = useState([]);

    const carrousel = useQuery({
        queryKey:['slider'],
        queryFn: () => getSlider(token, curren)   
     });


    return (<>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={3000}>
        {carrousel.data?.map((item, i) => {
             return <SwiperSlide key={i}>
                <img src={`${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Src}`}></img>
                <p>{item && item.ProgramaPrecioTxt} {formatter.format(item.ProgramaPrecioUSD).replace("$", `${CurrencySeleted()} `).replace(",", ".")}</p>
             </SwiperSlide>
        })}
     </Swiper>
    
    </>)
}
