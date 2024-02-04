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

export const Slider = ({cambio,items}) => {
  var url = document.location.origin;

 
   const onClickMe = (i) =>{

  var idArea = i.IdArea;
  var idDestino = i.IdDestino;
  var idPrograma = i.IdPrograma;

  if (idPrograma != null) {
      url += `/Programa/${idPrograma}`;
  } else if (idDestino != null) {
      url += `/Programas/${idArea}/${idDestino}`;
  } else if (idArea != null){
      url += `/Areas/${idArea}`;
  }
  
  window.location.replace(url);
  
   }
  
    return (<>
  
   <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCards, EffectCoverflow, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect='flip'
      autoplay={{delay:3000}}
      pagination={{
        clickable: true,
      }}
      navigation
      scrollbar={{ draggable: true }}
    
      >
        {items.data?.map((item, i) => {
             return <SwiperSlide key={i} style={{height:'90vh'}} onClick={()=> onClickMe(item)}>
                <img src={`${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Src}`} style={{height:'90vh', width:'100%'}} alt=''></img>
                <h3>{item && item.ProgramaPrecioTxt} {formatter.format(item.ProgramaPrecioUSD).replace("$", `${CurrencySeleted()} `).replace(",", ".")}</h3>
                <p>valor en pesos Chilenos: {formatter.format(item.ProgramaPrecioUSD * cambio.data.CambioContado).replace(",", ".")}</p>
             </SwiperSlide>
        })}
     </Swiper>

    
    </>)
}
