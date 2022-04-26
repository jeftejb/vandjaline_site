import React from 'react'
import Categorias from '../components/Categorias'
import ElementOne from '../components/ElementOne'
import Navbar from '../components/Navbar'
import NovasLetras from '../components/NovasLetras'
import Produtos from '../components/Produtos'
import Rodape from '../components/Rodape'
import Slide from '../components/Slide'
import styled from "styled-components"
import Estabelecimentos from '../components/Estabelecimentos'


const color_text = "#042940"


const Container = styled.div`
padding: 30px;
display: flex;
position: relative;
overflow: hidden;
justify-content: center;
align-items: center;
`
const Text = styled.h1`
margin: 10px;
color:${color_text};
size: 20px;
font-size: 30px;

`

const LineOne = styled.div`
border: 2px solid #DBF227; 
  width:100px;
  margin-bottom: 7px;
`

const LineDois = styled.div`
border: 2px solid #9FC131; 
  width:100px;
`



const ContainerSlider = styled.div`
height: 60vh;
background-color: #D6D58E;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Desc = styled.p`
text-align:center ;
padding:20px ;
  font-size:20px ;
  font-weight:1000;
  color: ${color_text};
`


const ContainerLine = styled.div``

const Link = styled.a``

 const  Home = ()=> {

  
    return(
        <div>
            <ElementOne/>
            <Navbar/>
            <Slide/>
          

       
            <Container>
                <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
               <Text>CATEGORIAS</Text>
               <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
            </Container>

            <Categorias/>

            <ContainerSlider>
            <Text>Divulgue seus negócios, produtos ou serviços !  </Text>
           <Desc >Construa seu negocio de uma maneira simples e fácil , tenha a sua loja virtual a custo “0”! faça  o seu  cadastro como usuário , ou comerciante e comesse a publicitar os seus produtos.<Link href="/sobre">Saber mais </Link> </Desc>
            </ContainerSlider>

            <Container>
                <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
               <Text>PRODUTOS</Text>
               <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
            </Container>
            <Produtos/>
           
            <ContainerSlider>
            <Text>Ganhamos todos!</Text>
          <Desc>  Faça o cadastro como usuário e comesse a ganhar dinheiro convidado mais pessoas no site e ajudando a publicitar os produtos do site. <Link href="/sobre">Saber mais </Link> </Desc>
            </ContainerSlider>


            <Container>
                <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
               <Text>Lojas</Text>
               <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
            </Container>
             <Estabelecimentos/>
            <NovasLetras/>
            <Rodape/>
        </div>
    )
}

export default Home