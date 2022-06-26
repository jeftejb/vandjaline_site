import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import ElementOne from "../components/ElementOne";
import Fazenda from "../components/Fazenda";

import { tablet } from "../responsive";
import NovasLetras from "../components/NovasLetras";

const Container = styled.div`
text-align: center;
`
const Titulo = styled.h1`
${tablet({fontSize:"20px"})}

`

const ListFazenda = ()=>{
    return(
        <Container>
        <ElementOne/>
        <Navbar/>
        <Titulo>Fazendas</Titulo>
        <Fazenda/> 
        <NovasLetras/>
        <Rodape/>
        </Container>
    )
}

export default ListFazenda