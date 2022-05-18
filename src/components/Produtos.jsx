
import { useState, useEffect } from "react"
import styled from "styled-components"
import Produto from "./Produto"
//import axios from "axios"
import SwiperCore,{ EffectFade, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { publicRequest } from "../requesteMetodos";


const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;


`





const Produtos = ({cat,filters,sort}) => {
   const [produtos , setProdutos] = useState([]);
   const [filterProdutos , setFilterProdutos] = useState([]);
  
   useEffect(()=> {
      const getProduto = async ()=>{
          try{
              const res = await publicRequest.get(`produtos`);
              setProdutos(res.data);
          }catch(err){
          }
      }
      getProduto()
   }, [cat]);
   useEffect(() => {
      cat && setFilterProdutos(
          produtos.filter((item) => Object.entries(filters).every(([key,value]) => item[key].includes(value)))
      );
   }, [produtos,cat, filters]);

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
              
            {cat? filterProdutos.splice.map((item,i)=>(
                <SwiperSlide key={i} >  <Produto item={item} key={item._id}/></SwiperSlide>
              
          )): produtos.map((item, i)=>(
            <SwiperSlide  key={i}>  <Produto item={item} key={item._id}/></SwiperSlide>
        ))}  
            
       

       </Swiper>
       </Container>
    )
}

export default Produtos
