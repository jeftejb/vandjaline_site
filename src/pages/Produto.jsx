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
import {addUsuario} from  "./../redux/apiCalls"
import {actPontos} from "./../redux/apiCalls"
//import { useLocation } from "react-router-dom"
import Estabelecimento from "../components/Estabelecimento"
import "./../components/style.css"
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
height: 50vh;
text-align:center ;
justify-content:center ;
align-items:center ;
object-fit: cover;
${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
flex: 1;
padding: 70px 40px;
${mobile({ padding: "10px" })}
`

const Titulo = styled.h1`
font-family:"Titan one" ;
font-size: 20px;
`

const Desc = styled.p`
margin:20px 0px;
font-family:"Exo, sans-serif" ;
font-size:20px ;
`


const Preco = styled.span`
font-weight:bolder;
font-size: 20px;

font-family:"Exo, sans-serif" ;

`
const FilterContainer = styled.div`
width: 50%;
margin:20px 0px;
display: flex;
justify-content: space-between;

${mobile({ width: "100% " })}
`


const Filter = styled.div`
display: flex;
align-items: center;
`


const FilterTitulo = styled.span`
font-size: 13px;
font-weight: 200;
`


const FilterColor = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor: pointer;
`


const FilterTamanho = styled.select`
margin-left: 10px;
padding: 3px 10px;
`

const Loja = styled.h3`
font-weight:bolder;
font-size: 15px;

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
padding: 10px;
border:2px solid teal;
margin-left: 10px;
color:#000; 
cursor: pointer;
font-weight: 700;
`

const TituloContainer = styled.text`
    font-family:"Titan one" ;
    font-size:18px;
    margin-top:20px ;
    margin-bottom:40px ;
`

const ContainerLoja = styled.div`
margin: 40px;
justify-content:center ;
align-items:center ;
text-align:center ;
`;


const ContainerDecription =styled.div`
margin-top:25px ;
margin-bottom:25px ;
align-items:center ;
justify-content:center ;
text-align:center ;
`;
const TitleDescription = styled.text`
margin-top:25px ;
margin-bottom:25px ;
font-family:"Titan one" ;
font-size:18px;

`;


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
    const id_user = JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser?._id
    
    useEffect(()=>{
        const getProduto = async ()=>{
            try{
                const res = await publicRequest.get("/produtos/"+_id)
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

    const handleClick = async () => {
        const produtoMenos = produto?.quanti - quantidade;
        const codInter = proPub[0]?.codigoInter ;

       await  dispatch(addProduto({...produto, quantidade, cor , tamanho, codInter}))
       await publicRequest.put("/produtos/menos/"+_id, {quanti:produtoMenos} )
        

    }

    const handleClickRecomendar = (e) =>{
        e.preventDefault()
     
if(user){
const pontos = produto?.rec ;
const pontosAct = Number(pontos) + 1
const rec = {rec : pontosAct}
const ids = produto?.userRec


if(ids.indexOf(id_user) === -1){
    const idList =  produto?.userRec
    idList.push({id_usuario:id_user})

    const actualizarPontos = async ()=>{
        actPontos(_id, rec)
    }
    const adicionarIdUsuario = async () =>{
        addUsuario(_id, idList)
    }
    
    actualizarPontos();
    adicionarIdUsuario();

}else{
    alert("Esteproduto ja foi recomedado")
}


}else{
    alert("Por favor faça o login para poder recomendar este produto")
}
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
        const mensagen = ()=>alert("O produto foi adicionado com sucesso na sua lista de produtos afiliados, verifique a sua lista de produtos afiliados no seu perfil.")
        const addProPubli = async ()=>{
            try{
                await userRequest.post("/publicitar/insert", infAdd)
                mensagen();
            }catch(error){
                console.log("Varios Erros")
            }
        }
        addProPubli();
    }


    const dinheiro = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'AKZ' })
    return (
        <Container>
             <ElementOne/>
               <Navbar/>
               <Wrapper>
                   <ImageContainer>
                   <Titulo> {produto?.titulo}</Titulo>
                       <Image src={`${produto?.imagem}`} />
                   </ImageContainer>
                   <InfoContainer>
                    
                       <Preco> Preço: {dinheiro.format(Number(produto?.preco))}</Preco>
                       <Desc>Disponivel: {produto?.quanti}</Desc>
                       <Desc>Recomendações: {produto?.rec}</Desc>
                       <Loja>Loja: {produto?.loja}</Loja>
                       <Desc> {produto?.novo === "Novo" ? <span style={{color:"#FA7F08"}}> Novo </span> : ""}</Desc>
                       
                       <FilterContainer>
                           <Filter>
                               <FilterTitulo>Cor: </FilterTitulo>
                               {produto.cor? produto.cor.map((c)=>(
                                <FilterColor color = {c} key = {c} onClick = {()=>setCor(c)} />
                               )): <FilterColor color = "white" />}
                           </Filter>
                           <QuantidadeContainer>
                               <Remove onClick = {()=>hendQuantidade("remove")} />
                               <Quantidade> {quantidade} </Quantidade>
                               <Add  onClick = {()=>hendQuantidade("add")}/>
                           </QuantidadeContainer>
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
                          
                           <Button onClick = {handleClick} >Ad.Carrinho</Button>
                           {user?.confirmado === true? <Button onClick = {handleClickPubli} >Publicitar</Button> : ""}
                           <Button onClick = {handleClickRecomendar} >Recomendar</Button>
                       </AddContainer>
                   </InfoContainer>
               </Wrapper>
               <ContainerDecription className="reveal fade-bottom">
                <TitleDescription>Descrição:</TitleDescription>
               <Desc> {produto?.descricao}</Desc>
               </ContainerDecription>

               <ContainerLoja className="reveal fade-bottom">
                <TituloContainer>Estabelecimento</TituloContainer>
                  <Estabelecimento item={{nomeLoja:produto.loja, _id:produto.id_loja}}/>
               </ContainerLoja>
        <NovasLetras/>
        <Rodape/>
        </Container>
    )
}

export default Produto
