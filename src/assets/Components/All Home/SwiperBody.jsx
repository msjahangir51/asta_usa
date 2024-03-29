import React from 'react'
import SwiperDoc from "../../../../public/Swiper.json"
import "../../astaUsa.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SwiperBody() {
  return (
    <div className='SwiperBody'>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            SwiperDoc.map(items=>{
                const {img,Heading,desc,id} = items;
                return(
                    <SwiperSlide key={id} style={{
                        background : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${img})`,
                        backgroundPosition : "center%",
                        backgroundSize : "100%",
                        backgroundRepeat : "no-repeat",
                        height : '100vh',
                        width : "100%"
                        }}>
                            <div className="swiperConteinar">
                                <div className="SwiperCard">
                                    <h1 className='swiperHeader'>{Heading}</h1>
                                    <p className="p--pragraph">{desc}</p>
                                </div>
                            </div>

                    </SwiperSlide>
                    )
                })
            }
      </Swiper>
    </div>
  )
}

export default SwiperBody