
import  styled  from 'styled-components'
import { mobile } from '../responsive'
import CategoriaItem from './CategoriaItem'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useEffect, useState } from 'react';
import { publicRequest } from '../requesteMetodos';
const Container = styled.div`
padding:20px;
margin: 20px 150px 20px 150px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items:center ;

${mobile({ padding:"0px", margin:"10px" , display:"flex", flexDirection:"row" })}
`


const ContainerItem = styled.div`

`;

const Categorias = () => {

  const [cat , getCat] = useState([])

  useEffect(()=>{
  const getCatItem = async ()=>{
       const res = await publicRequest.get("/categorias/")
       getCat(res.data)
  } 

  getCatItem()
  }, [])

 
    return (
       
             <Container>
            {cat.map( (item, i)=>(
              <ContainerItem key={i}><CategoriaItem item = {item} key={item?.id}/></ContainerItem> 
            ))}
        </Container>
       
    )
}

export default Categorias
