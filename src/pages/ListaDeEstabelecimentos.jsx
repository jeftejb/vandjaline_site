import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import ElementOne from "../components/ElementOne";
import EstabelecimentosElement from "../components/Estabelecimentos";
import "./../components/style.css"
import { tablet } from "../responsive";
import NovasLetras from "../components/NovasLetras";
import {Storefront} from "@material-ui/icons"

const Container = styled.div`
text-align: center;
`
const Titulo = styled.h1`
margin-top:40px;
font-family:"Titan one";
${tablet({fontSize:"20px"})}

`

const ContainerInfo = styled.div`
display:flex;
margin-top:25px ;
margin-bottom:25px;
width:100% ;
height:500px ;
align-items:center ;
justify-content:space-between ;

`;

const InfoItem = styled.div`
margin-top:20px ;
margin-left:50px ;
margin-right:50px ;
width:30% ;
height:90% ;


`;

const TitleContainer = styled.div``;
const Title = styled.text`
font-family:"Titan one";
font-size:28px ;
size:500 ;
`;

const IconContainer = styled.div``;
const Icon = styled.div`


`;
const ContainerDesc = styled.div``;
const Desc = styled.text`
font-size:18px ;
font-weight:bold ;
size:500 ;
font-family:"Exo, sans-serif";
`;
const Estabelecimento = ()=>{
    return(
        <Container>
        <ElementOne/>
        <Navbar/>
        <Titulo>Lojas</Titulo>
        <ContainerInfo>
            <InfoItem className="reveal fade-bottom">
                <IconContainer>
                    <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>

                <TitleContainer>
                    <Title>Contacto</Title>
                </TitleContainer>
                <ContainerDesc>
                    <Desc>Entre em contacto com o estabelecimento se pretendes adquiri alguma informação, ou clique no botão Saber Mais para ter mais informações do estabelecimento </Desc>
                </ContainerDesc>
            </InfoItem>

            <InfoItem className="reveal fade-bottom">
                <IconContainer>
                <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>

                <TitleContainer>
                    <Title>Reserva</Title>
                </TitleContainer>
                <ContainerDesc>
                    <Desc>Faça reserva de produtos, clique em Saber Mais veja os produtos ou serviços  que estao em distaque,  e faça reserva antes que eles se esgotem!  </Desc>
                </ContainerDesc>
            </InfoItem>

            <InfoItem className="reveal fade-bottom">
            <IconContainer>
            <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>
                <TitleContainer>
                    <Title>Pesquisa</Title>
                </TitleContainer>
                <ContainerDesc>
                    <Desc>Não precisas mais sair de sua casa para saber o preço de um produto ou serviço, faça a sua pesquisa aqui !!</Desc>
                </ContainerDesc>
            </InfoItem>
        </ContainerInfo>
        <EstabelecimentosElement/> 
        <NovasLetras/>
        <Rodape/>
        </Container>
    )
}

export default Estabelecimento