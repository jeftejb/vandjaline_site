
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Link} from "react-router-dom"

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 350px;
height: 215px;
position: relative;
outline:1px solid black;
outline-offset: -1rem;
border-radius: 3%;
background-color: #ffffffc3;
align-items: center;
justify-content: center;
text-align:center;
&:hover{
    outline:3px solid black ;
    outline-offset: 0rem;
}

`
const Img = styled.img`
  width: 100%;
height: 30vh;
border-radius:3%;
object-fit: cover;
${mobile({ height: "220px" })}
`
const Info = styled.div`
position: absolute;
top:1rem ;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Titulo = styled.h1`
color:#011F26;
margin-bottom: 20px;
font-size:25px;
font-weight:bold;

`
const Button = styled.button`
border: none;
padding: 20px;
background-color: transparent;
color:#FA7F08;
cursor: pointer;
font-weight: 600;
&:hover{
    background-color: rgb(255, 165, 0);
}
`

const CategoriaItem = ({item}) => {
    return (
        
        <Container>
            <Link to={`/produtos/${item.nomeCat}`}>
            <Img src={item?.imagemCat} />
            <Info>
                
                <Button>Ver Produtos </Button>
            </Info>
            </Link>
            <Titulo>{item?.nomeCat}</Titulo>
        </Container>
    )
}

export default CategoriaItem
