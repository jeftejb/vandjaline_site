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

import { Link } from 'react-router-dom';

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
position: relative;
overflow: hidden;
background-color:#F49F0A;
margin-top:0px ;
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
justify-content:center ;

`
const ContainerInfo = styled.div`
height: 100%;
flex: 1;
opacity:8;
text-decoration:none ;
`

const InfoContainer = styled.div`
position: absolute ;
top:50px ;
padding:100px;
${mobile({ top:"100px", padding:"20px" })}
`
const Titulo = styled.h1`
font-size: 30px;
font-weight: 500;
font-family:'Titan One';
${mobile({ fontSize:"18px" })}
`
const Description = styled.p`
margin: 20px 0px;
font-size: 55px;
font-weight: 500;
letter-spacing: 3px;
font-family: 'Six Caps', sans-serif;
${mobile({ fontSize:"15px", fontFamily:"Exo, sans-serif"})}
`


const Btn = styled.span`
font-size:20px ;
font-weight:200;
${mobile({ fontSize:"15px"})}
`;



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
                    <InfoContainer>
                        <ContainerInfo>
                        <Titulo> {item?.titulo}</Titulo>
                        <Description>{item?.desc}</Description>
                        <Link className='linkItem' id='LinkItem' to={`${item?.link}`} style={{
                            textDecoration:"none",
                            color:"#fff",
                            fontFamily:"Exo, sans-serif",
                            border:"2px solid #ccc" ,
                            borderRadius:"5px",
                            padding:"1rem 2rem",
                            backgroundColor:"#00A6A6",
                            
                            }} ><Btn>{item?.but}</Btn></Link>
                        </ContainerInfo>
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
