
import { useState, useEffect } from "react"
import styled from "styled-components"
import Produto from "./Produto"
//import axios from "axios"
import { publicRequest } from "../requesteMetodos"
import "./style.css"

import reveal from "../redux/style"


const Container = styled.div`
padding:5px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Containe = styled.div`
padding:10px;


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




const ProdutosUnik = ({cat,filters,sort}) => {
   const [produtos , setProdutos] = useState([]);
   const [filterProdutos , setFilterProdutos] = useState([]);
  


   useEffect(()=> {
      const getProduto = async ()=>{
          try{
              if (cat ){
                const res = await publicRequest.get(`produtos?categoria=${cat}`);
                setProdutos(res.data);

              }else if (filters.categoria){
                const res = await publicRequest.get(`produtos?categoria=${filters?.categoria}`);
                setProdutos(res.data);
              }else{
                const res = await publicRequest.get(`produtos`);
                setProdutos(res.data);
                
              }
     
          }catch{}
      }
      getProduto()
   }, [cat, filters]);
   useEffect(() => {
      cat && setFilterProdutos(
          produtos.filter((item) => Object.entries(filters).every(([key,value]) => item[key].includes(value)))
      );
   }, [produtos,cat, filters]);

 const [itensPerPage]  = useState(8)
 const [currentPage , setcurrentPage] = useState(0)

 const pages = Math.ceil(produtos.length / itensPerPage )
  const startIndex = currentPage*itensPerPage
  const endIndex = startIndex+itensPerPage
  const currentitens =  produtos.slice(startIndex,endIndex )

  reveal()
    return (
        <Containe>
        <Container className="reveal fade-bottom">
             
            {cat? filterProdutos.slice(startIndex, endIndex).map((item,i)=>(
                 <Produto item={item} key={item._id}/>
              
          )): currentitens.map((item, i)=>(
             <Produto  item={item} key={item._id}/>
        ))}  
       
       </Container>
       <Div>{Array.from(Array(pages), (i, index)=>{
     return <Button value={index} onClick={(e)=>setcurrentPage(Number(e.target.value))} key={index}>{index +1}</Button>
      })}</Div>
       </Containe>
       
    )
}

export default ProdutosUnik
