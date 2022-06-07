import React from 'react'
import Categorias from '../components/Categorias'
import ElementOne from '../components/ElementOne'
import Navbar from '../components/Navbar'
import NovasLetras from '../components/NovasLetras'
import Produtos from '../components/Produtos'
import ProdutoCampoTodos from '../components/ProdutoCampoTodos'
import Rodape from '../components/Rodape'
import Slide from '../components/Slide'
import styled from "styled-components"
import Estabelecimentos from '../components/Estabelecimentos'

import { tablet } from '../responsive'

import "./../components/style.css"
import reveal  from '../redux/style'



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
font-size: 20px;

animation:go-back 1s;

@keyframes go-back {
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0);
  }
} 

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





const Desc = styled.p`
text-align:center ;
padding:20px ;
  font-size:15px ;
  font-weight:1000;
  color: ${color_text};
`


const ContainerLine = styled.div`
animation:go-back 1s;

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
} 
 
`

const Link = styled.a``

const ContainerSlider = styled.div`
height: 60vh;
background-color: #7392B7;
box-shadow: 20px 15px 15px black;
display: flex;
align-items: center;
justify-content: space-between;
padding:20px ;

${tablet({ flexDirection:"column" })}
`


const ContainerText = styled.div`
width: 45% ;
height: 60% ;
padding: 20px ;
margin:10px ;
background-color: #FA7F08 ;
box-shadow: 20px 15px 15px black;
align-items: center ;

${tablet({ width: "300px"})}
`

const ContainerDesc = styled.div`
width: 55% ;
height: 70% ;
padding:20px ;
margin:10px ;
background-color:#F24405 ;
box-shadow: 35px 25px 25px black;
align-items: center ;
justify-content: center ;

${tablet({ width: "300px"})}
`


 const  Home = ()=> {

  reveal()
  
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
           <ContainerText className='reveal fade-left'> <Text>Divulgue seus negócios, produtos ou serviços !  </Text></ContainerText>
           <ContainerDesc className='reveal fade-right'><Desc >Construa seu negocio de uma maneira simples e fácil , tenha a sua loja virtual a custo “0”! faça  o seu  cadastro como usuário , ou comerciante e comesse a publicitar os seus produtos.<Link href="/sobre">Saber mais </Link> </Desc></ContainerDesc>
            </ContainerSlider>

            <Container>
                <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
               <Text>PRODUTOS DIVREÇOS</Text>
               <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
            </Container>
            <Produtos/>
           
            <ContainerSlider>
              <ContainerText className='reveal fade-left' ><Text>Ganhamos todos!</Text></ContainerText>
              <ContainerDesc className='reveal fade-right' ><Desc>Faça o cadastro como usuário e comesse a ganhar dinheiro convidado mais pessoas no site e ajudando a publicitar os produtos do site. <Link href="/sobre">Saber mais </Link> </Desc> </ContainerDesc>
            </ContainerSlider>

                
            <Container>
                <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
               <Text>PRODUTOS DO CAMPO</Text>
               <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
            </Container>
            <ProdutoCampoTodos/>
           

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