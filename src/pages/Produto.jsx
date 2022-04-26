import { Add, Remove } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import styled from "styled-components"
import ElementOne from "../components/ElementOne"
import Navbar from "../components/Navbar"
import NovasLetras from "../components/NovasLetras"
import Rodape from "../components/Rodape"
import { addProduto } from "../redux/carrinhoRedux"
import { publicRequest, userRequest } from "../requesteMetodos"
import { mobile } from "../responsive"
import {useDispatch} from "react-redux"
//import { useLocation } from "react-router-dom"

const Container = styled.div``

const Wrapper= styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column"})}
`

const ImageContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`

const Titulo = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin:20px 0px;
`

const Preco = styled.span`
font-weight: 100px;
font-size: 40px;

`
const FilterContainer = styled.div`
width: 50%;
margin:30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width: "100% " })}
`


const Filter = styled.div`
display: flex;
align-items: center;
`


const FilterTitulo = styled.span`
font-size: 20px;
font-weight: 200;
`


const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor: pointer;
`


const FilterTamanho = styled.select`
margin-left: 10px;
padding: 10px;
`

const Loja = styled.h3`
font-size: 25px;

`
const FilterTamanhoOpcao = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100% " })}
`

const QuantidadeContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Quantidade = styled.span`
width: 30px;
height:30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:0px 5px;
`

const Button = styled.button`
padding: 15px;
border:2px solid teal;
margin-left: 10px;
color:#000; 
cursor: pointer;
font-weight: 700;
`

const Produto = () => {

    const location = useLocation();
    const _id = location?.pathname.split("/")[2] 
    const codigo_inter = JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser?.codigoInter
    const codigo_inter_fim = Number(codigo_inter)
    const [produto, setProduto] = useState({})
    const [proPub, setProPub] = useState({})
    const [quantidade , setQuantidade] = useState(1)
    const [cor , setCor] = useState("")
    const [tamanho , setTamanho] = useState("")
    const dispatch = useDispatch()
    const user = JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser 
    
    useEffect(()=>{
        const getProduto = async ()=>{
            try{
                const res = await publicRequest.get("/produtos/" + _id)
                setProduto(res.data)
                 if(codigo_inter!==isNaN){
                const proPub= await publicRequest.get(`/publicitar/buscaCod/inter/?cod=${codigo_inter_fim}`)
                setProPub(proPub.data)
                 }else{
                    setProPub([])
                 }
            }catch{}
        }
        getProduto()

    }, [_id,codigo_inter_fim, codigo_inter])



    const hendQuantidade = (type)=>{

        if(type === "remove"){
          quantidade >1 && setQuantidade(quantidade - 1)
        }else{
            if(quantidade < produto?.quanti){
                setQuantidade(quantidade + 1)
            }
           
        }

    }

    const handleClick = () => {
        const codInter = proPub[0]?.codigoInter ;
        dispatch(addProduto({...produto, quantidade, cor , tamanho, codInter}))
        
    }

    const handleClickPubli = () => {
        const url =  String(location.pathname.split("/", 3))
        const url_fin = url.replace(/,/g, "/")
       const url_pro = url_fin 
       const infAdd = {
            id_intermediario : user?._id,
            codigoInter : user?.codigoInter,
            nome_inter:user?.nomeUsuario,
            id_produto:produto?._id,
            imagem_pro:produto?.imagem,
            titulo:produto?.titulo,
            preco:produto?.preco,
            loja:produto?.loja,
            url_pro: url_pro
        }
        const addProPubli = async ()=>{
            try{
                await userRequest.post("/publicitar/insert", infAdd)
            }catch(error){
                console.log("Varios Erros")
            }
        }
        addProPubli();
    }

    return (
        <Container>
             <ElementOne/>
               <Navbar/>
               <Wrapper>
                   <ImageContainer>
                       <Image src={`${produto?.imagem}`} />
                   </ImageContainer>
                   <InfoContainer>
                       <Titulo>Nome: {produto?.titulo}</Titulo>
                       <Desc>Desacricao: {produto?.descricao}</Desc>
                       <Desc>Disponivel: {produto?.quanti}</Desc>
                       <Preco> Preco: {Number(produto?.preco).toFixed(2)}kz</Preco>
                       <Loja>Loja: {produto?.loja}</Loja>
                       <FilterContainer>
                           <Filter>
                               <FilterTitulo>Cor: </FilterTitulo>
                               {produto.cor? produto.cor.map((c)=>(
                                <FilterColor color = {c} key = {c} onClick = {()=>setCor(c)} />
                               )): <FilterColor color = "white" />}
                           </Filter>
                           <Filter>
                           <FilterTitulo>Tamanho: </FilterTitulo>
                               <FilterTamanho onChange={(e)=>setTamanho(e.target.value)}>
                               {produto.tamanho? produto.tamanho.map((t)=>(
                                <FilterTamanhoOpcao  key = {t} > {t} </FilterTamanhoOpcao> 
                               )): <FilterTamanhoOpcao>  </FilterTamanhoOpcao> }
                              
                               </FilterTamanho>
                           </Filter>
                       </FilterContainer>
                       <AddContainer>
                           <QuantidadeContainer>
                               <Remove onClick = {()=>hendQuantidade("remove")} />
                               <Quantidade> {quantidade} </Quantidade>
                               <Add  onClick = {()=>hendQuantidade("add")}/>
                           </QuantidadeContainer>
                           <Button onClick = {handleClick} >Adicionar ao Carrinho</Button>
                           {user?.confirmado === true? <Button onClick = {handleClickPubli} >Publicitar</Button> : ""}

                       </AddContainer>
                   </InfoContainer>
               </Wrapper>
        <NovasLetras/>
        <Rodape/>
        </Container>
    )
}

export default Produto
