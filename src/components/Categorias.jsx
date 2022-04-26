
import  styled  from 'styled-components'
import { mobile } from '../responsive'
import CategoriaItem from './CategoriaItem'
import SwiperCore,{  EffectFade, Autoplay, A11y, Pagination, Scrollbar,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useEffect, useState } from 'react';
import { publicRequest } from '../requesteMetodos';

const Container = styled.div`
padding:20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

${mobile({ padding: "0px" , flexDirection:"column" })}
`


const Categorias = () => {

  const [cat , getCat] = useState([])

  useEffect(()=>{
  const getCatItem = async ()=>{
       const res = await publicRequest.get("/categorias/")
       getCat(res.data)
  } 

  getCatItem()
  }, [])

  SwiperCore.use([Autoplay])
    return (
        <Swiper
        modules={[ EffectFade, Autoplay, Pagination, Scrollbar,A11y ]}
        effect='fade'
      spaceBetween={20}
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
   
      >
       
             <Container>
            {cat.map( (item, i)=>(
               <SwiperSlide key={i}> <CategoriaItem item = {item} key={item?.id}/></SwiperSlide>
            ))}
        </Container>
        
        
       
      </Swiper>
       
    )
}

export default Categorias
