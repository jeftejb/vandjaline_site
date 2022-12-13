import React from 'react'
import styled from "styled-components"

import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";

import { tablet } from '../responsive';
import "./../components/style.css"
import ElementOne from "../components/ElementOne"

import ReactPlayer from 'react-player'

import {Storefront , PersonAdd, PermIdentity} from "@material-ui/icons"




const Container  = styled.div`
width: 100%;

position: relative;
background: url("");
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`







const PlayerWrapper = styled.div`
margin: 15px;
padding: 25px ;
`

const PlayerWrapperContainer = styled.div`
display: flex;
margin: 15px;
padding: 25px ;
flex-wrap:wrap;
`



const ContainerInfo = styled.div`
display:flex;
margin-top:105px ;
margin-bottom:25px;
width:100% ;
flex-wrap:wrap ;

justify-content:space-between ;

${tablet({})}

`;

const InfoItem = styled.div`
top:0px;
text-align:center ;
margin-left:50px ;
margin-right:50px ;
width:40% ;
${tablet({width:"100%", marginBottom:"40px" })}


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



const ContainerInformationVideo = styled.div`
text-align:center ;
justify-content:center ;
align-items:center ;
`;
  const ContainerItensInformations = styled.div`
  display: flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  `;

  const ItemInFormationLogo = styled.div`
  width:100px;
  height:100px;
  background-color:#BBDEF0;
  border:2px solid #ccc;
  border-radius:50% ;
  margin-bottom: 50px;
  `;
  
    const  ItemIndormationDesc = styled.text`
    font-family:"Titan one";
    font-size:18px ;
    font-weight:500;
    `;


const LinkButton = styled.a`

`;


const ContainerInfoCad  =styled.div`
margin-top:155px ;
align-items:center ;
justify-content:center ;
text-align:center ;
`;


const TituloInfoCad = styled.h2`
font-family:"Titan One" ;
font-size:38px;
font-weight:bold ;
margin-bottom:40px ;
`;
const DescTextCad = styled.h4`
font-family:"Exo, sans-serif" ;
font-size:28px ;

`;





const RegistroUsuario = () => {

    


 



    return (
        <div>
            <>
            <ElementOne/>
        <Navbar/>
        <Container>
       
         <ContainerInfoCad>
          <TituloInfoCad>Olá seja bem vindo a vandjaline o site de todos nós !</TituloInfoCad>
          <DescTextCad>Faça o seu cadastro na vandjaline  </DescTextCad>
         </ContainerInfoCad>
       <ContainerInfo>
            <InfoItem className="reveal fade-bottom">
                <IconContainer>
                    <Icon><PersonAdd style={{fontSize:100}} /></Icon>
                </IconContainer>

                <TitleContainer>
                    <Title>CRIAR CONTA DE USUÁRIO" </Title>
                </TitleContainer>
                <ContainerDesc>
                    <Desc>
                    A conta de usuário te permite efectuar pesquisa de preços, criar a sua lista de compras,  efectuar reservas e pagamento de produtos.<br/>
                      Os pagamentos são efectuados através da carteira virtual kamba <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App Kamba</a> 
                      </Desc>
                </ContainerDesc>

               
                 <LinkButton
                 style={{
                  margin:"20px",
                  padding:"20px 40px",
                  borderRadius:"5px",
                  backgroundColor:"#00A6A6",
                  color:"#ffff"
                }}
                 
                 href='/registro/usuario/:id'>Conta de suario</LinkButton>
                
            </InfoItem>

            <InfoItem className="reveal fade-bottom">
            <IconContainer>
            <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>
                <TitleContainer>
                    <Title>CRIAR CONTA DE COMERCIANTE</Title>
                </TitleContainer>
                <ContainerDesc>
                    <Desc>
                    A conta de comerciante te permite criar uma pequena loja virtual com varias opções como: cadastrar, editar e eliminar produtos, ainda podes receber pagamentos e partilhar o link da sua loja nas tuas redes sociais e muito mais.<br/>  
                     Os pagamentos são efectuados através da carteira virtual kamba <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App Kamba</a>  
                      </Desc>
                </ContainerDesc>

                <LinkButton
                style={{
                  margin:"20px",
                  padding:"20px 40px",
                  borderRadius:"5px",
                  backgroundColor:"#00A6A6",
                  color:"#ffff"
                }}
                href='/registro/comerciante/:id'>Conta de Comerciante</LinkButton>
            </InfoItem>
        </ContainerInfo>

        <ContainerInformationVideo>
  <ContainerItensInformations  className="reveal fade-bottom">
    <ItemInFormationLogo><PermIdentity style={{fontSize:100}} /></ItemInFormationLogo>
    <ItemIndormationDesc>Se hover alguma dificuldade veja os videos e siga o passo a passo para criar uma conta, se tornar um intermediario etc. </ItemIndormationDesc>
  </ContainerItensInformations>
</ContainerInformationVideo>

<PlayerWrapperContainer  className="reveal fade-bottom">

            <PlayerWrapper>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/OrIQs4WQP4g'
          width='100%'
          height='100%'
        />
        <span style={{fontFamily:"Exo , sans-serif", fontSize:"15px", fontWeight:"bold" }} >Como cadastrar o meu estabelecimento</span>
      </PlayerWrapper>

      <PlayerWrapper>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/Eax-WWJrvmM'
          width='100%'
          height='100%'
        />
        <span style={{fontFamily:"Exo , sans-serif", fontSize:"15px", fontWeight:"bold" }} >Cadastro de Usuário</span>
      </PlayerWrapper>


      <PlayerWrapper>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/1Nebuxv_gBY'
          width='100%'
          height='100%'
        />
        <span style={{fontFamily:"Exo , sans-serif", fontSize:"15px", fontWeight:"bold" }} >Como me tornar um intermediario</span>
      </PlayerWrapper>


      </PlayerWrapperContainer>

      

   
        </Container>
        <Rodape/>
        </>
 
    </div>
    )
    
}

export default RegistroUsuario
