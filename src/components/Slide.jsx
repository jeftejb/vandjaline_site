import styled from 'styled-components'
//import {ArrowLeftOutlined , ArrowRightOutlined} from '@material-ui/icons'
//import { useState } from 'react'
import { sliderItemns } from '../data'
import { mobile } from '../responsive'

import SwiperCore,{  EffectFade, Autoplay, A11y, Pagination, Scrollbar,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "./style.css"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
/*${mobile({ display: "none" })}*/
`
/*
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
*/

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -170}vw);
`
const Slider = styled.div`
height: 100vh ;
height: 100vw ;
display: flex;
align-items: center;

background-color: "";
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
opacity:8;

`
const Image = styled.img`
width:100%;
height: 80%;


`
const InfoContainer = styled.div`
position: absolute ;
top:100px ;
padding:  10px;
flex: 1;
`
const Titulo = styled.h1`
font-size: 70px;
`
const Descricao = styled.p`
margin: 50px 0px;
font-size: 25px;
font-weight: 1000;
letter-spacing: 3px;
`


const Slide = ()=> {
    /*
const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>{

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

*/
    SwiperCore.use([Autoplay, Navigation])

    return (
<Container>
        <Swiper
        modules={[ EffectFade, Autoplay, Pagination, Scrollbar,A11y, Navigation]}
        effect='fade'
     
      breakpoints= {{
     
          slidesPerView: 1,
      
      }}
      navigation={true}
      autoplay={ {
        delay: 6500,
        disableOnInteraction: false,
    }}
    className="mySwiper"
      >
    
               
            
         
            <Wrapper /*slideIndex ={slideIndex}*/>
                {sliderItemns.map((item,i)=>( 
                        <SwiperSlide key={i}> 
                <Slider key={item.id}>
                    <ImgContainer>
                    <Image src={item.img}  slot="container-start"
          className="parallax-bg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Titulo> {item.titulo}</Titulo>
                        <Descricao>{}</Descricao> 
                       
                    </InfoContainer>
                </Slider>
                </SwiperSlide>
                ))}
            </Wrapper>
          
    
               
      </Swiper>
       
      </Container>
    )
}

export default Slide
