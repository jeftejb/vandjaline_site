import React, { useState } from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined, Menu} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import { ReactDimmer } from "react-dimmer";
import {mobile, tablet} from "../responsive"
import "./style.css"
//import { useEffect } from 'react'

import{useSelector} from "react-redux"
import  {Link}  from 'react-router-dom'



const Container = styled.div`

height:60px;
margin-top: 30px ;
margin-bottom:30px ;
align-items:center ;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding:  10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
${tablet({   padding: "10px 10px" })}

`
const Left = styled.div`
flex: 1;
display: flex;
align-items:center;

`
const Language = styled.div`
font-size: 14px;
cursor: pointer;
display: none;
${mobile({ display: "flex" })}
${tablet({  display:"flex" })}
`



const Center = styled.div`
flex: 1;
text-align: center;
display:flex ;
${tablet({ flex: 2,  justifyContent: "center" })}
`
/*
const Logo = styled.h1`
font-weight: bold;
font-size:20px;
padding:0px 8px;
${mobile({ fontSize: "5px" })}
${tablet({ fontSize: "17px"})}
`
*/


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

`


const RightMenu = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;



`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 15px;
margin-bottom: 15px;
font-weight: bold;
text-transform: uppercase;
border:2px solid #000;
border-radius:15px;
padding:5px 10px;
${mobile({ fontSize: "12px" , marginLeft:"8px" })}

:hover{
    background-color:orange ;
}

`

const MenuItemFi = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;

${mobile({ fontSize: "12px" , marginLeft:"8px" })}
`

const Somem = styled.div`
display: flex;
${mobile({ flex: 2,  justifyContent: "center", display:"none" })}
${tablet({ flex: 2,  justifyContent: "center", display:"none" })}

`
const NaoSomem = styled.div`
display: flex;

`



const Navbar = () => {
   
    const quantidade = useSelector(state => state.carrinho?.quantidade); 
    const currentUser =localStorage.getItem("persist:root")!== null?
     JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser?.acessoToken :""

    const currentUserD = localStorage.getItem("persist:root")!== null?
     JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser :""
    const [isMenuOpen, setMenu] = useState(false);
    
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };
  
    return (
        <>
        <Container>
            <Wrapper>
            <Left> <Language> <Menu className="Hamburger" onClick={handleMenu}></Menu> </Language>
          
            </Left>
           
            <Center> <Center>
                
                
            <Link className='textNav' to="/"><MenuItem>Home</MenuItem></Link>
                 <Somem>
               
               <Link className='textNav' to ="/produtos"> <MenuItem>Produtos</MenuItem></Link>
               <Link className='textNav' to ="/estabelecimentos"> <MenuItem>Estabelecimentos</MenuItem></Link>
               <Link className='textNav' to ="/servicos"> <MenuItem>Serviços</MenuItem></Link>
               <Link className='textNav' to ="/fazendas"> <MenuItem>Fazendas</MenuItem></Link>
            
              
               </Somem>

               <NaoSomem>
             
               <Link className='textNav' to="/sobre"><MenuItem>Sobre</MenuItem></Link>
               <Link className='textNav' to ="/registro/:"> <MenuItem>Cadastro</MenuItem> </Link>
           {currentUser? <MenuItem> <Link className='textNav' to={`/perfilUser/${currentUserD?._id}/${currentUserD?.codigoInter}`}>
               {currentUserD?.confirmado===true? `${currentUserD.nomeUsuario}(V:${currentUserD?.pontos}Akz)` : currentUserD.nomeUsuario }</Link></MenuItem>
           :<> <Link className='textNav' to ="/login"> <MenuItemFi>Login</MenuItemFi></Link>
           <Link className='textNav' to ="/pacotes"> <MenuItem>Planos</MenuItem></Link>
           </>
           }
               
               <Link className='textNav' to="/carrinho">
               <MenuItemFi>
               <Badge badgeContent = {quantidade} color="primary" >
                   <ShoppingCartOutlined/>
               </Badge>
               </MenuItemFi>
               </Link>
               </NaoSomem>

              

                 </Center>  </Center> 

                 

            <RightMenu className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
                <Link className='textNav' to ="/produtos"> <MenuItem>Produtos</MenuItem></Link>
                <Link className='textNav' to ="/estabelecimentos"> <MenuItem>Estabelecimentos</MenuItem></Link>
                <Link className='textNav' to ="/servicos"> <MenuItem>Serviços</MenuItem></Link>
                <Link className='textNav' to ="/fazendas"> <MenuItem>Fazendas</MenuItem></Link>
            <Link className='textNav' to ="/registro/:%d"> <MenuItem>Cadastro</MenuItem> </Link>
            <Link className='textNav' to="/sobre"><MenuItem>Sobre</MenuItem></Link>
            {currentUser? <MenuItem> <Link to={`/perfilUser/${currentUserD?._id}/${currentUserD?.codigoInter}`}>
                {currentUserD?.confirmado===true? `${currentUserD.nomeUsuario}(V:${currentUserD?.pontos}Akz)` : currentUserD.nomeUsuario }</Link></MenuItem>
            : <Link className='textNav' to ="/login"> <MenuItem>Login</MenuItem></Link>
            }
                
                <Link className='textNav' to="/carrinho">
                <MenuItem className='carrinhoDeCompras'>
                <Badge badgeContent = {quantidade} color="primary"  >
                    <ShoppingCartOutlined  />
                </Badge>
                </MenuItem>
                </Link>
                </RightMenu>    


               
                <Right >
               

                </Right> 

              
             </Wrapper>
            
        </Container>

<ReactDimmer
isOpen={isMenuOpen}
exitDimmer={setMenu}
zIndex={50}
blur={1.5}
/>
</>
    )
}

export default Navbar
