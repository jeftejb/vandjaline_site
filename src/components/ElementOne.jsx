import styled from "styled-components"
import React from "react"
import  {Link}  from 'react-router-dom'
import {mobile, tablet} from "../responsive"

const Container = styled.div`
position: fixed ;
width:100% ;
height: 10rem;
background-color: #F49F0A;
color: white;
display: flex;
text-align: center;
justify-content: center;
flex-direction:column ;
font-size: 14px;
font-weight: 500;
`

const TextElement = styled.span`
size: 10px;
font-size: 25px;
margin: 15px;
font-family:'Corinthia';
`

const Logo = styled.h1`
font-weight: bold;
color: white;
font-size:17px;
margin-top:10px;
padding:0px 8px;
${mobile({ fontSize: "5px" })}
${tablet({ fontSize: "17px"})}
`



const ElementOne = () => {
    return (
       <Container>
              <Link className='textNav' to ="/"> <Logo>Vandjaline</Logo> </Link> 
           <TextElement>
               
                Venda ganhe e Cresça!
                </TextElement>
       </Container>
    )
}

export default ElementOne
