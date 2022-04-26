
import { useState, useEffect } from "react"
import styled from "styled-components"
import Produto from "./Produto"

import SwiperCore,{ EffectFade, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { publicRequest } from "../requesteMetodos";


const Container = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-between;
`





const ProdutosLoja = ({id}) => {
   const [produtos , setProdutos] = useState([]);
  
   useEffect(()=> {
      const getProduto = async ()=>{
          try{
              const res = await publicRequest.get(`/produtos/loja/${id}`);
              setProdutos(res.data);
          }catch(err){
          }
      }
      getProduto()
   }, [id]);
  

   SwiperCore.use([Autoplay])
  
    return (
        <Container>
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
        1020: {
          slidesPerView: 3,
        },
      }}
      autoplay={ {
        delay: 2500,
        disableOnInteraction: false,
    }}
        className="mySwiper"
      >
            {  produtos?
            produtos.map((item, i)=>(
            <SwiperSlide key={i}>  <Produto item={item} key={item._id}/></SwiperSlide>
        ))  : ""
            
            }

       </Swiper>
       </Container>
    )
}

export default ProdutosLoja
