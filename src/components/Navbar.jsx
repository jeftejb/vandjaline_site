import React, { useState } from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined, Menu} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import { ReactDimmer } from "react-dimmer";
import {mobile, tablet} from "../responsive"
import { PermIdentity} from "@material-ui/icons"
//import { useEffect } from 'react'

import{useSelector} from "react-redux"
import  {Link}  from 'react-router-dom'



const ContainerNav = styled.div`

width:100% ;
height:15rem;
margin-top: 0;
margin-bottom:100px ;
align-items:center ;
justify-content:space-between ;
background-color:#F49F0A ;

${mobile({ height: "15rem" })}
`
const Wrapper = styled.div`
padding:  10px 20px;
display: flex;
align-items: center;
justify-content: center;
${mobile({ padding: "10px 0px" })}
${tablet({   padding: "10px 10px" })}
text-decoration:none ;
`

const Language = styled.div`
cursor: pointer;
display: none;

${mobile({ display: "flex" })}
${tablet({  display:"flex" })}
`



const Center = styled.div`
margin-top:2px;
width:100%;
text-align: center;
justify-content:center;
align-items: center;
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
display:flex ;
text-decoration:none ;
font-size:17px ;
cursor: pointer;
margin-left: 15px;
margin-bottom: 15px;
font-weight: bold;
text-transform: uppercase;
padding:2px 5px;
${mobile({ fontSize: "13px" , marginLeft:"8px" , padding:"2px 7px"})}



`

const MenuItemFi = styled.div`

cursor: pointer;
margin-left: 15px;
font-weight:bold ;
font-size:20px ;
padding:1px 5px;
text-transform: uppercase;
${mobile({ fontSize: "12px" , marginLeft:"8px", padding:"2px 7px"})}
:hover{
    background-color:orange ;
}
`

const Somem = styled.div`
display: flex;
${mobile({ flex: 2,  justifyContent: "center", display:"none" })}
${tablet({ flex: 2,  justifyContent: "center", display:"none" })}

`
const NaoSomem = styled.div`
display: flex;

`

const DivCircle = styled.div`
position:relative ;
width:50px ;
height:35px ;
border:2px solid #ccc ;
border-radius:50% ;
top:0px ;
left: 40% ;
align-items:center ;
justify-content:center ;
text-align:center ;
background-color:#00A6A6 ;

${tablet({ height:"35px" , width:"50px", left:"20%", padding:"0px"})}
`;


const ContainerElement = styled.div`
width:100% ;
height: 10rem;
background-color: #F49F0A;
color: white;
display: flex;
text-align:center ;
justify-content: center;
flex-direction:column ;
font-size: 14px;
font-weight: 500;

${mobile({ flex:1})}
`

const TextElement = styled.span`
size: 10px;
font-size: 35px;
margin: 15px;
font-family:'Corinthia';
`

const Logo = styled.h1`
font-weight: bold;
color: white;
font-size:20px;
margin-top:10px;
padding:0px 8px;
${mobile({ fontSize: "5px" })}
${tablet({ fontSize: "17px"})}
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
        <ContainerNav className='fixed-top' id='menuContainer'>
        <ContainerElement>
              <Link className='textNav' to ="/"> <Logo>Vandjaline</Logo> </Link> 
           <TextElement>
               
                Venda ganhe e Cresça!
                </TextElement>
       </ContainerElement>
            <Wrapper>
          
           
            <Center> 
                
            <Language><MenuItem> <Menu style={{fontSize:"30px"}} className="Hamburger" onClick={handleMenu}></Menu> </MenuItem></Language>
            <Link className='textNav'  style={{textDecoration:"none", color:"#042940"}} to="/"><MenuItem>Home</MenuItem></Link>
                 <Somem>
               <Link className='textNav'  style={{textDecoration:"none", color:"#042940"}} to ="/produtos" > <MenuItem>Produtos</MenuItem></Link>
               <Link className='textNav' style={{textDecoration:"none", color:"#042940"}}to ="/registro/:d"> <MenuItem>Cadastro</MenuItem> </Link>
               <div className="dropdown ">
  <button className="btn btn-secondary dropdown-toggle" style={{backgroundColor:"transparent" , border:"none",color:"#042940", fontWeight:"bold" ,fontSize:"17px", textTransform:"uppercase"}} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Comércio 
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
  <Link  className='textNav'style={{textDecoration:"none", color:"#042940" }} to ="/estabelecimentos"> <MenuItem>Lojas</MenuItem></Link>
  <Link className='textNav'style={{textDecoration:"none" , color:"#042940"}} to ="/servicos"> <MenuItem>Serviços</MenuItem></Link>
  <Link className='textNav' style={{textDecoration:"none", color:"#042940"}}to ="/fazendas"> <MenuItem>Fazendas</MenuItem></Link>
  </div>
</div>
<Link className='textNav' style={{textDecoration:"none", color:"#042940"}}to="/sobre"><MenuItem>Sobre</MenuItem></Link>
<Link className='textNav' style={{textDecoration:"none", color:"#042940"}}to ="/pacotes"> <MenuItem>Planos</MenuItem></Link>
               </Somem>

               <NaoSomem>
             
     
          
          
               
               <Link style={{textDecoration:"none", color:"#042940"}} className='textNav' to="/carrinho">
               <MenuItemFi>
               <Badge  badgeContent = {quantidade} color="primary" >
                 <MenuItem>Carrinho <ShoppingCartOutlined style={{marginLeft:"5px", fontSize:"15px"}} className='carroDeCompras'/></MenuItem> 
               </Badge>
               </MenuItemFi>
               </Link>
                
                <DivCircle>
               {currentUser? <MenuItem> <Link className='textNav'style={{textDecoration:"none", color:"#042940",fontSize:"20px"}} to={`/perfilUser/${currentUserD?._id}/${currentUserD?.codigoInter}`}>
               {currentUserD?.confirmado === true? `${[currentUserD.nomeCompleto][0][0]}` : [currentUserD.nomeCompleto][0][0] }</Link></MenuItem>
           :<> <Link className='textNav'style={{textDecoration:"none", color:"#042940"}} to ="/login"><PermIdentity style={{fontSize:"30px"}}/></Link>
         
           </>
           }
           </DivCircle>
               </NaoSomem>

              

                 </Center> 

                 

            <RightMenu className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
                <Link className='textNav'style={{textDecoration:"none"}} to ="/produtos"> <MenuItem>Produtos</MenuItem></Link>
                <Link className='textNav' style={{textDecoration:"none"}}to ="/estabelecimentos"> <MenuItem>Lojas</MenuItem></Link>
                <Link className='textNav' style={{textDecoration:"none"}}to ="/servicos"> <MenuItem>Serviços</MenuItem></Link>
                <Link className='textNav'style={{textDecoration:"none"}} to ="/fazendas"> <MenuItem>Fazendas</MenuItem></Link>
            <Link className='textNav' style={{textDecoration:"none"}}to ="/registro/:%d"> <MenuItem>Cadastro</MenuItem> </Link>
            <Link className='textNav' style={{textDecoration:"none"}}to="/sobre"><MenuItem>Sobre</MenuItem></Link>
            <Link className='textNav' style={{textDecoration:"none"}}to ="/pacotes"> <MenuItem>Planos</MenuItem></Link>
        
                
                <Link className='textNav' style={{textDecoration:"none", color:"#042940"}}to="/carrinho">
                
                </Link>
                </RightMenu>    


               
                <Right >
               

                </Right> 

              
             </Wrapper>
            
        
        </ContainerNav>

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
