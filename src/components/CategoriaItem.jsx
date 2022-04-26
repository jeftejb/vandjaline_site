
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Link} from "react-router-dom"

const Container = styled.div`
flex: 1;
margin: 5px;
width: 100%;
height: 30vh;
position: relative;
outline:1px solid black;
outline-offset: -1rem;
border-radius: 3%;
background-color: white;
align-items: center;
justify-content: center;
text-align:center;
&:hover{
    outline:3px solid black ;
    outline-offset: 0rem;
}
`
const Img = styled.img`
    margin:2rem 0;
    height:10rem;

object-fit: cover;
${mobile({ height: "30hv" })}
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
color:#130f40;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 20px;
background-color: #f5efef;
color: grey;
cursor: pointer;
font-weight: 600;
&:hover{
    background-color: orange;
}
`

const CategoriaItem = ({item}) => {
    return (
        
        <Container>
            <Link to={`/produtos/${item.nomeCat}`}>
            <Img src={item?.img} />
            <Info>
                <Titulo>{item?.nomeCat}</Titulo>
                <Button>Ver Loja </Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoriaItem
