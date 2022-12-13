
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Link} from "react-router-dom"
import "./style.css"

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 150px;
height: 50px;
margin-bottom: 25px ;
position: relative;
outline:1px solid black;
outline-offset: 0.1rem;
border-radius: 5px;
background-color: #BBDEF0;
align-items: center;
justify-content: center;
text-align:center;

animation:go-back 1s ;

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
${mobile({ minWidth:"100px", height: "50px"})}
&:hover{
    outline:3px solid black ;
    outline-offset: 0rem;
}

`
const Img = styled.img`
  width: 30%;
  height: 30px;
border-radius:3%;
object-fit: cover;
${mobile({ height: "30px" })}
`
const Info = styled.div`
position: relative;
top:15px;
left: 0;
width: 100%;
height: 50%;
display: flex;

align-items: center;
justify-content: center;



`
const Titulo = styled.h1`
color:#011F26;
margin-left:5px;
font-size:13px;
font-weight:bold;
${mobile({ fontSize:"10px"})}

`

const CategoriaItem = ({item}) => {
    return (
        
        <Container className='reveal fade-bottom'>
            <Link to={`/produtos/${item.nomeCat}`} style={{textDecoration:"none"}} >
            <Info>
            <Img src={"/image/logo.png"} />
            <Titulo>{item?.nomeCat}</Titulo>
            </Info>
            </Link>
           
        </Container>
    )
}

export default CategoriaItem
