
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const color_text = "#042940"

const Container = styled.div`
flex:1;
margin:5px;
min-width: 170px;
height: 380px;
border-radius:20px ;
background-color: #f5fbfd;
position: relative;
outline:1px solid black;
font-family: 'Titan One', cursive;
overflow-wrap: break-word;
text-align: center;
cursor: pointer;
 &:hover{
    outline:3px solid black ;
    outline-offset: 0rem;
}

`

const ContainerImage = styled.div`
width: 100%;
height: 60%;
border-radius:20px ;
`


const Info = styled.div`
padding: 10px;
display: flex;
text-align: center;
flex-direction: column;

`



const Image = styled.img`
height: 100%;
width: 100%;
border-radius:5%;
background-repeat: no-repeat;
  background-size: cover;
`

const Nome = styled.h1`
padding: 5px 0px;
font-size: 17px;
font-family: 'Titan One', cursive;
color:${color_text} ;

`

const Tel = styled.span`
padding: 2px;
color:${color_text} ;
`

const Email = styled.span`
padding: 2px;
color:${color_text} ;
`


const  Estabelecimento = ({item}) => {
    return (
        <Container>
           <ContainerImage>
                <Image src={item?.imagem}/>
           </ContainerImage>
           <Info>
               <Nome>{item.nomeLoja}</Nome>
               
            <Link style={{textDecoration:"none", padding:"20px 30px", backgroundColor:"#BBDEF0", borderRadius:"5px", fontFamily:"Titan one"}} to ={`/estabelecimento/${item._id}`}>Saber Mais</Link>
            
           </Info>
           <Tel> +244{item.telefoneLoja}</Tel>/
                 <Email>{item.emailLoja}</Email>
        </Container>
    )
}

export default Estabelecimento
