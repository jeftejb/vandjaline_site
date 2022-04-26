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
${tablet({ flex: 2,  justifyContent: "center" })}
`
const Logo = styled.h1`
font-weight: bold;
font-size:20px;
padding:0px 8px;
${mobile({ fontSize: "5px" })}
${tablet({ fontSize: "17px"})}
`


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
${mobile({ fontSize: "12px" , marginLeft:"8px" })}

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
           
            <Center> <Center> <Link to ="/"> <Logo>Vandjaline</Logo> </Link> </Center>  </Center> 
            <RightMenu className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
                <Link to ="/produtos"> <MenuItem>Produtos</MenuItem></Link>
                <Link to ="/estabelecimentos"> <MenuItem>lojas</MenuItem></Link>
            <Link to ="/registro/:%d"> <MenuItem>Cadastro</MenuItem> </Link>
            <Link to="/sobre"><MenuItem>Sobre</MenuItem></Link>
            {currentUser? <MenuItem> <Link to={`/perfilUser/${currentUserD?._id}/${currentUserD?.codigoInter}`}>
                {currentUserD?.confirmado===true? `${currentUserD.nomeUsuario}(V:${currentUserD?.pontos}Akz)` : currentUserD.nomeUsuario }</Link></MenuItem>
            : <Link to ="/login"> <MenuItem>Entrar</MenuItem></Link>
            }
                
                <Link to="/carrinho">
                <MenuItem>
                <Badge badgeContent = {quantidade} color="primary" >
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
                </Link>
                </RightMenu>    

                <Right >
                <Somem>
               
                <Link to ="/produtos"> <MenuItem>Produtos</MenuItem></Link>
                <Link to ="/estabelecimentos"> <MenuItem>lojas</MenuItem></Link>
               
                </Somem>

                <NaoSomem>
                <Link to="/sobre"><MenuItem>Sobre</MenuItem></Link>
                <Link to ="/registro/:"> <MenuItem>Cadastro</MenuItem> </Link>
            {currentUser? <MenuItem> <Link to={`/perfilUser/${currentUserD?._id}/${currentUserD?.codigoInter}`}>
                {currentUserD?.confirmado===true? `${currentUserD.nomeUsuario}(V:${currentUserD?.pontos}Akz)` : currentUserD.nomeUsuario }</Link></MenuItem>
            : <Link to ="/login"> <MenuItemFi>Entrar</MenuItemFi></Link>
            }
                
                <Link to="/carrinho">
                <MenuItemFi>
                <Badge badgeContent = {quantidade} color="primary" >
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItemFi>
                </Link>
                </NaoSomem>

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
