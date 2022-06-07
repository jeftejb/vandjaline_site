
import { useState, useEffect } from "react"
import styled from "styled-components"
import Produto from "./Produto"

//import SwiperCore,{ EffectFade, Autoplay} from 'swiper';
//import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { publicRequest } from "../requesteMetodos";

import "./style.css"

import reveal from "../redux/style"

const Container = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Containe = styled.div`
padding:20px;

`
const Button = styled.button`
margin:4px;
`

const Div = styled.div`
justify-content: space-between;
text-align: center;
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
  

   const [itensPerPage]  = useState(5)
   const [currentPage , setcurrentPage] = useState(0)
  
   const pages = Math.ceil(produtos.length / itensPerPage )
    const startIndex = currentPage*itensPerPage
    const endIndex = startIndex+itensPerPage
    const currentitens =  produtos.slice(startIndex,endIndex )

   //SwiperCore.use([Autoplay])
         reveal()
    return (
      <Containe>
        <Container className="reveal fade-bottom">
       
              
          
          {currentitens.map((item, i)=>(
             <Produto item={item} key={item._id}/>
          ))}
          </Container>
            
            <Div>{Array.from(Array(pages), (i, index)=>{
     return <Button value={index} onClick={(e)=>setcurrentPage(Number(e.target.value))} key={index}>{index +1}</Button>
      })}</Div>

      
     
       </Containe>
    )
}

export default ProdutosLoja
