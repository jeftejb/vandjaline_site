
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const color_text = "#042940"

const Container = styled.div`
flex:1;
margin:5px;
min-width: 280px;
height: 500px;
background-color: #f5fbfd;
position: relative;
outline:1px solid black;
outline-offset: -1rem;
cursor: pointer;
 &:hover{
    outline:3px solid black ;
    outline-offset: 0rem;
}

`

const ContainerImage = styled.div`
width: 100%;
height: 40%;

`


const Info = styled.div`
padding: 20px;
display: flex;
text-align: center;
flex-direction: column;

`

const Desc = styled.span`
margin-bottom: 10px;
color:${color_text} ;
`

const Image = styled.img`
height: 100%;
width: 100%;
`

const Nome = styled.h1`
padding: 20px 0px;
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
                <Image src={item.img}/>
           </ContainerImage>
           <Info>
               <Nome>{item.nomeLoja}</Nome>
            <Desc>{item.descricao}
                 </Desc>
                 <Tel>Contato : +244{item.telefoneLoja}</Tel>
                 <Email>Email : {item.emailLoja}</Email>
            <Link to ={`/estabelecimento/${item._id}`}>Saber Mais</Link>
           </Info>
        </Container>
    )
}

export default Estabelecimento
