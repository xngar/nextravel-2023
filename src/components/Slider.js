import React from 'react'
<<<<<<< HEAD
import "./Slider.css";
import { getSlider } from './api/Api';
import { useQuery } from "@tanstack/react-query";
import Cookies from "universal-cookie";
import { SelectCurrency } from '../utils/SelectCurrency';


const Slider = () => {

    const cookie = new Cookies();
 
    const slider = useQuery({
        queryKey:['slider'],
        queryFn: () => getSlider(cookie.get('token'), cookie.get('CurrecyCode'))
     });

     const onClickHander = (entidad) => {

        let url = document.location.origin;
        let idArea = entidad.IdArea;
        let idDestino = entidad.IdDestino;
        let idPrograma = entidad.IdPrograma;

        if (idPrograma) {
            url += `/programa/${idPrograma}`;
        } else if (idDestino) {
            url += `/ProgramaList/${idArea}/${idDestino}`;
        } else {
            url += `/Area/${idArea}`;
        }

        window.location.replace(url);
    };

    return (<>
         <div id="banner" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">

<div className="carousel-inner" role="listbox">
    {slider.data?.map((item, i) => {
        return <div key={i} onClick={() => onClickHander(item)} className={i == 0 ? 'item active' : 'item'} style={{ backgroundImage: item.Nomenclador == "" ? `url("/upload/${item.Src}")` : `url("https://turisclub.cl/upload/${item.Src}")`, cursor: 'pointer' }}>
            <div className="caption-info">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-md-offset-2">
                            <div className="caption-info-inner text-center">
                                <h1 className={"animated " + (i % 2 ? "fadeInDown" : "zoomIn")}>{item.Titulo}</h1>
                                {item.ProgramaPrecioTxt == null ? <p></p> : <p className={"animated " + (i % 2 ? "fadeInUp" : "zoomIn")}>{item.ProgramaPrecioTxt}<span className="span-price"> {item.ProgramaPrecioUSD}</span></p>}
                                <a href="#" className={"animated " + (i % 2 ? "fadeInUp" : "zoomIn") + " btn btn-primary page-scroll"}>Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })}

</div>
<a className="control left" href="#banner" data-slide="prev"><i className="fa fa-long-arrow-left"></i></a>
<a className="right control" href="#banner" data-slide="next"><i className="fa fa-long-arrow-right"></i></a>
</div> 
=======

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { CurrencySeleted } from '../utils/helpers';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip, EffectCards, EffectCoverflow } from 'swiper/modules';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

export const Slider = ({items}) => {
  
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
             return <SwiperSlide key={i} style={{height:'90vh'}}>
                <img src={`${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Src}`} style={{height:'90vh', width:'100%'}} alt=''></img>
                <p>{item && item.ProgramaPrecioTxt} {formatter.format(item.ProgramaPrecioUSD).replace("$", `${CurrencySeleted()} `).replace(",", ".")}</p>
             </SwiperSlide>
        })}
     </Swiper>
    
>>>>>>> mario
    </>)
}
