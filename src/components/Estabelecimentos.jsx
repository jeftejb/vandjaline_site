import styled from "styled-components"
import Estabelecimento from "./Estabelecimento"
import { useEffect, useState } from "react";
import { publicRequest } from "../requesteMetodos";
import SwiperCore,{ EffectFade, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const  Estabelecimentos = () => {
const [loja, getLoja] = useState([])


useEffect(()=>{
   const  getLojas = async ()=>{
       try{
        const res = await publicRequest.get("/estabelecimento/site/pro")
        getLoja(res.data)
       }catch{}
      
    }

    getLojas()

}, [])
SwiperCore.use([Autoplay])
    return (
      <Swiper
      modules={[ EffectFade, Autoplay]}
     
    spaceBetween={50}
    
    breakpoints= {{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    autoplay={ {
      delay: 2500,
      disableOnInteraction: false,
  }}
      //className="mySwiper"
    >

        <Container>
             {loja.map((item, i)=>(
              <SwiperSlide key={i}><Estabelecimento item={item} key={item.id} /></SwiperSlide>  
            ))}
        </Container>

        </Swiper>
    )
}

export default Estabelecimentos
