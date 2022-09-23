import { Facebook, Instagram, MailOutline, Phone, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";
import { mobile, PcGrande, tablet} from "../responsive";
const color = "white";


const ContainerRodape = styled.div`
display: flex;
background-color:#759EB8 ;
${mobile({ flexWrap:'wrap'  })};

`

const Link = styled.a`
color:${color};
` 


const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
color:${color};
`

const Logo = styled.h1`
size:20;
font-size:15px;

`

const Imge = styled.img`
width:100px ;
height:40px ;
`

const Desc = styled.p`
margin:15px 0px;
font-size: 12px;
`

const SocialContainer = styled.h1`
display: flex;
`

const SocialIcon = styled.span`
width: 25px;
height: 25px;
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
size:20 ;
font-size:15px ;
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
font-size:12px;

`

const Right = styled.div`

flex: 1;
padding: 20px;
color:${color};

`
const ContatoItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
color:${color};
font-size:12px ;
`
const Pagamento = styled.img`
width:35px ;
height:20px ;

`




const Rodape = () => {
    return (
        <div>
       <ContainerRodape>
           <Left>
               <Logo><Imge  src="image/logo.png"/></Logo>
               <Desc> O vandjaline  é um projeto criado com o intuito de facilitar a vida de fornecedores , revendedores  
            e compradores de produtos diversos tanto produtos digitais como produtos físicos</Desc>

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
               <ContatoItem><Phone/>+244 948 992 170</ContatoItem>
               <ContatoItem><MailOutline/>uservandja@gmail.com</ContatoItem>
               <Titulo>Metodos de pagamento</Titulo>
               <Pagamento src="image/payment.jfif"/>

              
           </Right>
         
       </ContainerRodape>
       </div>
    )
}

export default Rodape
