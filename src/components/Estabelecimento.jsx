
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
outline-offset: -1rem;
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
height: 40%;
border-radius:20px ;
`


const Info = styled.div`
padding: 10px;
display: flex;
text-align: center;
flex-direction: column;

`

const Desc = styled.span`
margin-bottom: 10px;
color:${color_text} ;

word-break: break-all;
 
`

const Image = styled.img`
height: 100%;
width: 100%;
`

const Nome = styled.h1`
padding: 5px 0px;
font-size: 17px;
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
            
                  <Desc>{item.descricao}</Desc>
                 <Tel> +244{item.telefoneLoja}</Tel>
                 <Email>{item.emailLoja}</Email>
            <Link to ={`/estabelecimento/${item._id}`}>Saber Mais</Link>
           </Info>
        </Container>
    )
}

export default Estabelecimento
