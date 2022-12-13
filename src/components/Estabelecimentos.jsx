import styled from "styled-components"
import Estabelecimento from "./Estabelecimento"
import { useEffect, useState } from "react";
import { publicRequest } from "../requesteMetodos";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const Container = styled.div`
padding:15px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom:35px ;
`
const Containe = styled.div`



`

const Div = styled.div`
justify-content: space-between;
text-align: center;
margin-bottom:20px ;

`
const Button = styled.button`
margin:4px;
padding:10px 20px;
border-radius:5px ;
background-color:#BBDEF0;

`

const  Estabelecimentos = () => {
const [loja, getLoja] = useState([])


useEffect(()=>{
   const  getLojas = async ()=>{
       try{
        const res = await publicRequest.get("/estabelecimento/site/pro")
        getLoja(res.data)
       }catch{}
      
    }

    getLojas()

}, [])

const [itensPerPage]  = useState(5)
const [currentPage , setcurrentPage] = useState(0)

const pages = Math.ceil(loja.length / itensPerPage )
 const startIndex = currentPage*itensPerPage
 const endIndex = startIndex+itensPerPage
 const currentitens =  loja.slice(startIndex,endIndex )

return(
  <Containe>
        <Container>
             {currentitens.map((item, i)=>(
              <Estabelecimento item={item} key={i} />
            ))}
        </Container>
        <Div>{Array.from(Array(pages), (i, index)=>{
     return <Button value={index} onClick={(e)=>setcurrentPage(Number(e.target.value))} key={index}>{index +1}</Button>
      })}</Div>
        </Containe>
)

}

export default Estabelecimentos
