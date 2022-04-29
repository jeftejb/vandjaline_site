import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import ElementOne from "../components/ElementOne";
import Servicos from "../components/PrestacaoDeServicos";

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
        <Titulo>Prestação de Serviços</Titulo>
        <Servicos/> 
        <Rodape/>
        </Container>
    )
}

export default Estabelecimento