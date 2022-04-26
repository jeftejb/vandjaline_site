import styled from "styled-components"
import React from "react"



const Container = styled.div`
height: 60px;
background-color: #005C53;
color: white;
display: flex;
text-align: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const TextElement = styled.span`
size: 10px;
font-size: 20px;
margin: 15px;
`

const ElementOne = () => {
    return (
       <Container>
           <TextElement>Venda ganhe e Cresça!</TextElement>
       </Container>
    )
}

export default ElementOne
