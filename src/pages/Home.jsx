import React from 'react'
import Categorias from '../components/Categorias'
import Navbar from '../components/Navbar'
import NovasLetras from '../components/NovasLetras'
import Produtos from '../components/Produtos'
import ProdutoCampoTodos from '../components/ProdutoCampoTodosPrincipal'
import Rodape from '../components/Rodape'
import Slide from '../components/Slide'
import styled from "styled-components"
import Estabelecimentos from '../components/Estabelecimentos'
import { tablet } from '../responsive'
import "./../components/style.css"
import reveal  from '../redux/style'
import {Storefront} from "@material-ui/icons"



const color_text = "#042940"


const Container = styled.div`
padding: 30px;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
`

const Text = styled.h1`
color:${color_text};
size: 10px;
font-size: 25px;
margin: 15px;
margin-top:45px ;
font-family:'Titan One';
${tablet({ fontSize:"14px", margin:"50px 20px 10px 20px"})}
`

const TextC = styled.h1`
color:${color_text};
size: 10px;
font-size: 25px;

font-family:'Titan One';
${tablet({ fontSize:"18px"})}
`

const TextP = styled.h1`
color:${color_text};
size: 10px;
font-size: 18px;
margin: 15px;
font-family:'Titan One';

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






const Desc = styled.p`
text-align:center ;
padding:20px ;
margin-bottom:20px;
  font-size:50px ;
  font-weight:500;
  font-family: 'Six Caps', sans-serif;
  color: ${color_text};
  ${tablet({ fontSize:"28px"})}
`


const DescP = styled.p`
text-align:center ;
padding:20px ;
  font-size:17px ;
  font-weight:500;
 font-weight:bold ;
  color: ${color_text};
  ${tablet({ fontSize:"18px"})}
`






const Link = styled.a`
margin-top:20px ;
${tablet({ marginTop:"100px" , padding: "10px 10px" })}
`

const ContainerSlider = styled.div`
height: 60vh;
display: flex;
padding:20px ;
flex-direction:row;



${tablet({ flex:"1",padding:"5px", flexDirection:"column", height: "200px" })}
`


const ContainerText = styled.div`
width: 100% ;
height: 60% ;
padding: 20px ;
margin:0px;
border-radius:10px ;
background-color: #FA7F08 ;
box-shadow: 20px 15px 15px black;
align-items: center ;

${tablet({ width: "40px", height:"20px", display:"none"})}
`

const ContainerDesc = styled.div`
width: 90% ;
height: 55% ;
padding:0px 0px 20px 0px ;
margin:10px ;
border-radius:10px ;
background-color:#F24405 ;
box-shadow: 35px 25px 25px black;
align-items: center ;
justify-content: center ;

${tablet({ width: "30px", display:"none"})}
`

const ContainerDes = styled.div`
width: 80% ;
height: 55% ;
padding:0px 0px 20px 0px ;
margin-top:30px ;
margin-left:50px ;
margin-bottom:20px;
align-items: center ;
justify-content: center ;

${tablet({ width: "360px", padding:"0px" , marginLeft:"0px", marginTop:"10px"})}
`


const ContainerT = styled.div`
margin-left:10% ;
width:25% ;
height:100% ;
`;

const ContainerD = styled.div`
height:100% ;
width:25% ;
margin-right:10% ;
margin-top:0px ;

`;


const ContainerP = styled.div`
height:100% ;
align-items:center ;
justify-content:center ;
text-align:center ;
${tablet({ width: "360px", height:"400px"})}
`;


const ContainerInfo = styled.div`
display:flex;
margin-top:25px ;
margin-bottom:25px;
width:100% ;

align-items:center ;
justify-content:space-between ;
text-align:center ;
flex-wrap:wrap ;
`;

const InfoItem = styled.div`
margin-top:20px ;
margin-left:20px ;
margin-right:20px ;
width:30% ;



`;

const TitleContainer = styled.div``;
const Title = styled.text`
font-family:"Titan one";
font-size:28px ;
size:500 ;
${tablet({ fontSize:"10px"})}
`;

const IconContainer = styled.div``;
const Icon = styled.div`


`;
const ContainerDescInf = styled.div``;
const DescInf = styled.text`
font-size:18px ;
font-weight:bold ;
size:500 ;
font-family:"Exo, sans-serif";
${tablet({ fontSize:"10px"})}
`;

 const  Home = ()=> {

  reveal()
  
    return(
        <div>
            
            <Navbar/>
            <Slide/>
          
            <Container>
              
               <Text>CATEGORIAS</Text>
             
            </Container>

            <Categorias/>

            <ContainerSlider>
              <ContainerT>
              <ContainerText className='reveal fade-top'> <TextP>Poupe seus recursos!  </TextP></ContainerText>
               <ContainerDesc className='reveal fade-right'><DescP >Gaste menos com publicidade, deixe que alguem faça isso por voce e aumente seus ganhos  </DescP></ContainerDesc>
              </ContainerT>
              <ContainerD>
           <ContainerDesc className='reveal fade-left'><DescP >Faça o cadastro e comesse a publicitar os seus produtos e serviços</DescP></ContainerDesc>
           <ContainerText className='reveal fade-bottom'> <TextP>Divulgue seus produtos ou serviços !  </TextP></ContainerText>
              </ContainerD>
              <ContainerP>
                <TextC className='reveal fade-top' >Vamos juntos crescer!!</TextC>
           <ContainerDes className='reveal fade-bottom'><Desc >Construa o seu negocio de uma maneira simples e fácil , tenha a sua loja virtual a custo “0”! faça já o seu  cadastro como comerciante, e comesse a publicitar os seus produtos.</Desc></ContainerDes>
           <Link className='tuttomInfo reveal fade-bottom' style={{ backgroundColor:"#00A6A6", textDecoration:"none"}} href="/sobre">Saber mais </Link>
              </ContainerP>
            </ContainerSlider>

            <Container>
             
               <Text>PRODUTOS</Text>
           
            </Container>
            <Produtos/>
           
            <ContainerSlider>
            <ContainerP>
            <TextC className='reveal fade-top '>Ganhamos Todos!!</TextC>
           <ContainerDes className='reveal fade-bottom'><Desc >Encontre aqui a Oportunidade de se tornar um intermediario e comesse a ganhar dinheiro publicitando produtos. </Desc></ContainerDes>
           <Link  className='tuttomInfo reveal fade-bottom' style={{ backgroundColor:"#00A6A6", textDecoration:"none"}} href="/sobre">Saber mais </Link>
              </ContainerP>
              <ContainerT>
              <ContainerText className='reveal fade-top' ><TextP>Ganhamos todos!</TextP></ContainerText>
              <ContainerDesc className='reveal fade-right' ><DescP>Fique por dentro de todas a promoções e novidades!!   </DescP> </ContainerDesc>
              </ContainerT>
              <ContainerD>
              <ContainerDesc className='reveal fade-bottom' ><DescP>Faça a sua lista de compras dos melhores produtos e melhores preços do mercado!</DescP> </ContainerDesc>
              <ContainerText className='reveal fade-left' ><TextP>Produtos de Qualidade e preços acessiveis</TextP></ContainerText>
             
              </ContainerD>
            </ContainerSlider>

                
            <Container>
           
               <Text>PRODUTOS DO CAMPO</Text>
               
            </Container>
            <ProdutoCampoTodos/>
           

            <Container>
               
               <Text>Lojas</Text>
              
            </Container>
             <Estabelecimentos/>

             <Container>
           
           <Text>Saiba Mais</Text>
           
        </Container>

             <ContainerInfo>
            <InfoItem className="reveal fade-bottom">
                <IconContainer>
                    <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>

                <TitleContainer>
                    <Title>Contacto</Title>
                </TitleContainer>
                <ContainerDescInf>
                    <DescInf>Entre em contacto com o estabelecimento se pretendes adquiri alguma informação, ou clique no botão Saber Mais para ter mais informações do estabelecimento </DescInf>
                </ContainerDescInf>
            </InfoItem>

            <InfoItem className="reveal fade-bottom">
                <IconContainer>
                <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>

                <TitleContainer>
                    <Title>Reserva</Title>
                </TitleContainer>
                <ContainerDescInf>
                    <DescInf>Faça reserva de produtos, clique em Saber Mais veja os produtos ou serviços  que estao em distaque,  e faça reserva antes que eles se esgotem!  </DescInf>
                </ContainerDescInf>
            </InfoItem>

            <InfoItem className="reveal fade-bottom">
            <IconContainer>
            <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>
                <TitleContainer>
                    <Title>Pesquisa</Title>
                </TitleContainer>
                <ContainerDescInf>
                    <DescInf>Não precisas mais sair de sua casa para saber o preço de um produto ou serviço, faça a sua pesquisa aqui !!</DescInf>
                </ContainerDescInf>
            </InfoItem>
        </ContainerInfo>
            <NovasLetras/>
            <Rodape/>
        </div>
    )
}

export default Home