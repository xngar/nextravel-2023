import React, { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import "./ProgramRandom.css"


import {  Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip, EffectCards, EffectCoverflow , EffectFade } from 'swiper/modules';


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

 const  ProgramsViews =({Items, change}) =>{
    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        if (!Items.isLoading && Items.data) {
            // Barajar aleatoriamente la lista de items
            const shuffledItems = Items.data.sort(() => Math.random() - 0,5);
            // Seleccionar los primeros 6 objetos de la lista barajada
            const selectedItems = shuffledItems.slice(0, 10);
            setRandomItems(selectedItems);
        }
    }, [Items]);


     const uri = document.location.origin;
        
     return (<>
     <div>

     </div>
     <Swiper
     slidesPerView={3}
     spaceBetween={30}
     freeMode={true}
     autoplay={{delay:2000}}
     pagination={{
       clickable: true,
     }}
     breakpoints={{
      0:{
        slidesPerView:1
      }
     }}
     modules={[Pagination, Autoplay]}
     className="mySwiper"
      >
      {Items.isLoading ? <CircleLoader size={100} color="#d3761b"/> : 
                              randomItems.map((item, i) => (
                              <SwiperSlide key={i}>
                                <img  src={ process.env.REACT_APP_TURISCLUB_PATH_MEDIA + item.Imagen} alt={item.Titulo} width="640" height="420" />
                             </SwiperSlide>
                             )) }
      
        
      </Swiper> 
     
            </>);
        }

export default ProgramsViews;


{/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {Items.isLoading ? <CircleLoader size={100} color="#d3761b"/> : 
                              randomItems.map((item, i) => {
                              
                               <SwiperSlide>
          <img  src={ process.env.REACT_APP_TURISCLUB_PATH_MEDIA + item.Imagen} alt={item.Titulo} width="360" height="240" />
        </SwiperSlide>
                             }) }
      
        
      </Swiper> */}

    //   return (<>
                              
    //     <SwiperSlide key={i}>
    //         <img  src={ process.env.REACT_APP_TURISCLUB_PATH_MEDIA + item.Imagen} alt={item.Titulo} width="360" height="240" />
    //     </SwiperSlide>
    //   </> )