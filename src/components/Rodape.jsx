import { Facebook, Instagram, MailOutline, Phone, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"
import { mobile, PcGrande, tablet} from "../responsive"
const color = "white";


const ContainerRodape = styled.div`
display: flex;

background-color:#042940 ;
${mobile({ flexWrap:'wrap'  })}

`

const Link = styled.a`
color:${color};
` 


const Left = styled.div`
background-color:#042940 ;
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
color:${color};
`

const Logo = styled.h1``

const Desc = styled.p`
margin:20px 0px;
`

const SocialContainer = styled.h1`
display: flex;
`

const SocialIcon = styled.span`
width: 40px;
height: 40px;
border-radius: 50%;
color:${color};
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 25px;
`

const  Center= styled.div`
flex:1;
padding: 20px;
color:${color};
${mobile({ display: "none" })}
${PcGrande({ padding: "10px" })}
${tablet({ display:"none" })}

`
const Titulo = styled.h3`
margin-bottom: 30px;
color:${color};

`

const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`

const Right = styled.div`
background-color:#042940 ;
flex: 1;
padding: 20px;
color:${color};

`
const ContatoItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
color:${color};
`
const Pagamento = styled.img`
width: 50%;
`




const Rodape = () => {
    return (
        
       <ContainerRodape>
           <Left>
               <Logo>Vandjaline</Logo>
               <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat eius, 
                   ducimus accusamus quas, modi exercitationem amet doloribus veritatis ea dol
                   oremque tempora? Harum quis officiis quod doloribus placeat 
                   repudiandae consectetur?</Desc>

                   <SocialContainer>
                       <SocialIcon color="3B5999">
                           <Facebook/>
                       </SocialIcon>
                       <SocialIcon color="E4405F">
                           <Instagram/>
                       </SocialIcon>
                       <SocialIcon color="55ACEE">
                           <Twitter/>
                       </SocialIcon>
                       <SocialIcon color="E60023">
                           <YouTube/>
                       </SocialIcon>
                   </SocialContainer>
           </Left>
           <Center>

               <Titulo>Todos os links</Titulo>
               <List>
                   <ListItem>Home</ListItem>
                   <ListItem>Lojas</ListItem>
                   <ListItem>Produtos</ListItem>
                   <ListItem>Servicos</ListItem>
                   <ListItem>Contas</ListItem>
                   <ListItem>Termos</ListItem>
                  <Link href="/sobre"> <ListItem>Sobre</ListItem></Link>
               </List>
           </Center>
           <Right>
               <Titulo>Contatos</Titulo>
               <ContatoItem><Phone/>+244 929 312 201 / +244 929 312 201</ContatoItem>
               <ContatoItem><MailOutline/>contatoVandja@gmail.com</ContatoItem>
               <Pagamento src="/image/payment.png"/>

              
           </Right>
         
       </ContainerRodape>
     
    )
}

export default Rodape
