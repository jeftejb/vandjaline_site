import styled from "styled-components"
import Navbar from "../components/Navbar"
import Produtos from "../components/ProdutosUnik"
import NovasLetras from "../components/NovasLetras"
import Rodape from "../components/Rodape"
import { mobile , tablet} from "../responsive"
import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import { publicRequest } from "../requesteMetodos"


const Container = styled.div`
margin-top:200px ;
`

const Titulo = styled.h1`
margin-top:40px ;
margin-left:160px ;
font-family:"Titan one" ;
${mobile({ fontSize:"18px", marginLeft:"18px"  })}
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 60px 20px 60px ;
`
const Filter= styled.div`
margin:20px;  
${mobile({ width: "0px 20px" , display:"flex", flexDirection:"column"}) } 
${tablet({ width: "0px 20px" , display:"flex", flexDirection:"column"})}

`


const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 15px;
` 

const Select = styled.select`
padding: 10px;
margin-right: 10px;
${mobile({ margin: "10px 0px" })}
${tablet({ margin: "10px 0px" })}
`
const Option = styled.option``

const ListaDeProdutos = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]; 
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("news");
    const [categoria , getCategoria] = useState([]);
   

    useEffect(()=>{

        const getCat = async ()=>{
             const res = await publicRequest.get("/categorias/");
             getCategoria(res.data)

        }
             getCat();
    },[])

    
 

    const handleFilters = (e)=>{
        

        const value = e.target.value;
        
        setFilters({
            ...filters,
            [e.target.name]:value,
        })
    }
  
   

    return (
        <>
        <Navbar/>
        <Container>
        
           
            <Titulo> {cat?decodeURI(cat) : "Produtos"}</Titulo>

            <FilterContainer>
                <Filter><FilterText>Categoria:</FilterText> 
                <Select name = "categoria" onChange={handleFilters}>
                    {categoria?.map((item, i)=>(
                     <Option key={i} >{item?.nomeCat}</Option>
                    ))}
                </Select>
               
                </Filter>
                {/*<Filter>
                    <FilterText>Outros Produtos:</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value = "news" >Novos</Option>
                    
                    </Select>
                    
                    
                </Filter>
                    */}
            </FilterContainer>
            <Produtos cat = {cat} filters = {filters} sort = {sort} />
            <NovasLetras/>
            <Rodape/>
        </Container>
        </>
    )
}

export default ListaDeProdutos
