
import { useState, useEffect } from "react"
import styled from "styled-components"
import Produto from "./Produto"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { publicRequest } from "../requesteMetodos";
import reveal from "../redux/style"


const Container = styled.div`
padding:5px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`


const Div = styled.div`
justify-content: space-between;

text-align: center;
`
const Button = styled.button`
margin:4px;
padding:10px 20px;
border-radius:5px ;
background-color:#BBDEF0;
`




const ProdutosCampoTodos = () => {
   const [produtos , setProdutos] = useState([]);
  
   useEffect(()=> {
      const getProduto = async ()=>{
          try{
              const res = await publicRequest.get(`/produtos/fazenda/todos`);
              setProdutos(res.data);
          }catch(err){
          }
      }
      getProduto()
   }, []);
  
  
const [itensPerPage]  = useState(8)
const [currentPage , setcurrentPage] = useState(0)

const pages = Math.ceil(produtos.length / itensPerPage )
const startIndex = currentPage*itensPerPage
const endIndex = startIndex+itensPerPage
const currentitens =  produtos.slice(startIndex,endIndex )

reveal()
    return (
        <Container>
            <Container>
           { currentitens.map((item, i)=>(
             <Produto  item={item} key={item._id}/>
        ))}
        </Container>
       <Div>{Array.from(Array(pages), (i, index)=>{
     return <Button value={index} onClick={(e)=>setcurrentPage(Number(e.target.value))} key={index}>{index +1}</Button>
      })}</Div>
       </Container>
    )
}

export default ProdutosCampoTodos
