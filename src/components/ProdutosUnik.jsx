
import { useState, useEffect } from "react"
import styled from "styled-components"
import Produto from "./Produto"
import axios from "axios"



const Container = styled.div`
padding:20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Containe = styled.div`
padding:20px;


`

const Div = styled.div`
justify-content: space-between;

text-align: center;
`
const Button = styled.button`
margin:4px;
`




const ProdutosUnik = ({cat,filters,sort}) => {
   const [produtos , setProdutos] = useState([]);
   const [filterProdutos , setFilterProdutos] = useState([]);
   useEffect(()=> {
      const getProduto = async ()=>{
          try{
              if (cat ){
                const res = await axios.get(`http://localhost:8080/api/produtos?categoria=${cat}`);
                setProdutos(res.data);

              }else if (filters.categoria){
                const res = await axios.get(`http://localhost:8080/api/produtos?categoria=${filters?.categoria}`);
                setProdutos(res.data);
              }else{
                const res = await axios.get("http://localhost:8080/api/produtos");
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

 const [itensPerPage]  = useState(5)
 const [currentPage , setcurrentPage] = useState(0)

 const pages = Math.ceil(produtos.length / itensPerPage )
  const startIndex = currentPage*itensPerPage
  const endIndex = startIndex+itensPerPage
  const currentitens =  produtos.slice(startIndex,endIndex )
    return (
        <Containe>
        <Container>
             
            {cat? filterProdutos.slice(startIndex, endIndex).map((item,i)=>(
                 <Produto item={item} key={item._id}/>
              
          )): currentitens.map((item, i)=>(
             <Produto item={item} key={item._id}/>
        ))}  
       
       </Container>
       <Div>{Array.from(Array(pages), (i, index)=>{
     return <Button value={index} onClick={(e)=>setcurrentPage(Number(e.target.value))} key={index}>{index +1}</Button>
      })}</Div>
       </Containe>
       
    )
}

export default ProdutosUnik
