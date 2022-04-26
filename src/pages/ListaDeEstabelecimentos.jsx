import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import ElementOne from "../components/ElementOne";
import EstabelecimentosElement from "../components/Estabelecimentos";

import { tablet } from "../responsive";

const Container = styled.div`
text-align: center;
`
const Titulo = styled.h1`
${tablet({fontSize:"20px"})}

`

const Estabelecimento = ()=>{
    return(
        <Container>
        <ElementOne/>
        <Navbar/>
        <Titulo>Lojas</Titulo>
        <EstabelecimentosElement/> 
        <Rodape/>
        </Container>
    )
}

export default Estabelecimento