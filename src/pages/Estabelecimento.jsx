import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import  styled from 'styled-components'
import ElementOne from '../components/ElementOne'
import Navbar from '../components/Navbar'
import Produtos from '../components/ProdutosLoja'
import Rodape from '../components/Rodape'
import { publicRequest } from '../requesteMetodos'

const Container = styled.div`

`
const ContainerImagem = styled.div`
width: 100%;
height: 20vh;

position: relative;
overflow: hidden;
`
const Inf = styled.div`
justify-content: space-between;
padding: 10px;
`
const DescContainer = styled.div`
padding: 10px;
margin:30px;
min-width: 260px;
height: 250px;
text-align: center;
border:1px solid black;
background-color: white;
`

const ContatoContainer = styled.div`
margin:30px;
padding: 10px;
min-width: 260px;
height: 250px;
text-align: center;
border:1px solid black;
background-color: white;
`

const Text  = styled.p`
margin-bottom: 5px;
`


const Img = styled.img`
width: 100%;
`
const Titulo = styled.h1`
margin-bottom: 10px;

`

const Desc = styled.span`

`


const ContainerEf = styled.div`
padding: 30px;
display: flex;
position: relative;
overflow: hidden;
justify-content: center;
align-items: center;
`
const Texte = styled.h1`
margin: 10px;
color: orange;
size: 20px;
font-size: 30px;

`

const LineOne = styled.div`
border: 2px solid orange; 
  width:100px;
  margin-bottom: 7px;
`

const LineDois = styled.div`
border: 2px solid orange; 
  width:100px;
`




const ContainerLine = styled.div`

`

const Estabelecimento = () => {
const location = useLocation()
const id = location.pathname.split("/")[2]
const [loja , getLoja] = useState()


useEffect(()=>{
const getItem = async()=>{
           try{
               const res = await publicRequest.get(`/estabelecimento/${id}`)
               getLoja(res.data)
           }catch{}
}
getItem()
},[id])

    return (
        <Container>
            <ElementOne/>
            <Navbar/>
            <ContainerImagem>
                <Img src ="/image/blog-1.jpg"/>
            </ContainerImagem>
            <Inf>
                <DescContainer>
                    <Titulo>{loja?.nomeLoja}</Titulo>
                    <Desc>{loja?.descricao}
                        </Desc>

                </DescContainer>
                <ContatoContainer>
                <Titulo>Outros</Titulo>
                    <Text>Telefone : +244{loja?.telefoneLoja}</Text>
                    <Text>Endereco : {loja?.enderecoLoja}</Text>
                    <Text>Provincia : {loja?.provinciaLoja}</Text>
                    <Text>Municipio : {loja?.municipioLoja}</Text>
                    <Text>Email : {loja?.emailLoja}</Text>
                </ContatoContainer>
            </Inf>

            <ContainerEf>
                <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
               <Texte>PRODUTOS</Texte>
               <ContainerLine>
          <LineOne/> 
          <LineDois/> 
          </ContainerLine>
            </ContainerEf>

<Produtos id={loja?._id}/>
<Rodape/>
        </Container>
    )
}

export default Estabelecimento
