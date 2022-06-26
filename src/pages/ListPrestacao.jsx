import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import ElementOne from "../components/ElementOne";
import Servicos from "../components/PrestacaoDeServicos";

import { tablet } from "../responsive";
import NovasLetras from "../components/NovasLetras";

const Container = styled.div`
text-align: center;
`


const Titulo = styled.h1`
margin-bottom:50px ;
${tablet({fontSize:"20px"})}

`



const ListPrestacao = ()=>{
    return(
        <Container>
        <ElementOne/>
        <Navbar/>
     
        <Titulo>Prestação de Serviços</Titulo>
        <Servicos/> 
        <NovasLetras/>
        <Rodape/>
        </Container>
    )
}

export default ListPrestacao