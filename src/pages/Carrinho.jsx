import { Delete} from "@material-ui/icons"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Rodape from "../components/Rodape"
import { publicRequest } from "../requesteMetodos"
import { mobile } from "../responsive"
import ElementOne from "./../components/ElementOne"
import Navbar from "./../components/Navbar"
import {novaFatura} from "./../redux/apiCalls"
import {deleteProduto} from "./../redux/carrinhoRedux"
import userPdf from "./files/userPdf"



const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px " })}
`

const Titulo = styled.h1`
font-weight: 10;
font-size:10px ;
text-align:center;
${mobile({ fontSize:"15px"})}
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
${mobile({ padding: "10px " })}
`
const TopButton = styled.button`
padding: 7px;
font-weight: 200;
cursor: pointer;
border : ${(props)=>props.type === "filled" && "none"};
background-color : ${(props)=>props.type === "filled" ? "black" : "transparent"};
color : ${(props)=>props.type === "filled" && "white"};
${mobile({ padding: "5px  " })}
${mobile({ marginLeft: "25px  " })}
`

const TopTexts = styled.div`
${mobile({ display : "none" })}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:0px 10px; 
`

const Button = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column " })}
`

const Inf = styled.div`
flex: 3;
`

const Produto = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column " })}
`

const ProdutoDetalhes = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width: 100px;
`

const Detalhe = styled.span`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ProdutoNome = styled.span``



const ProdutoCor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${(props)=>props.color};
`

const ProdutoTamanho = styled.span``

const ProdutoLoja = styled.span``

const PrecoDetalhes = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProdutoPagamento = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProdutosQuantidade = styled.div`
font-size: 14px;
margin:5px;
${mobile({ margin: "5px  17px" })}
`
const ProdutoPreco = styled.div`
font-size: 15px;
font-weight: bolder;
`


const Resumo = styled.div`
flex: 1;
border:0.5px solid lightgray;
padding: 20px;
height: 50vh;
${mobile({ marginTop: "50px" })}
`

const ResumoTitulo = styled.h1`
font-weight: 100;
`

const ResumoItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props)=>props.type === "total" && "500"};
font-size: ${(props)=>props.type === "total" && "24px"};
`

const ResumoItemText = styled.span`
font-size:15px ;
font-weight:bolder;
`

const ButtonResumo = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 300;
`


const Hr= styled.hr`
background-color: #eee;
border:none;
height: 1px;
`


const Carrinho = () => {
    const dispatch = useDispatch()
    const carrinho = useSelector(state=> state?.carrinho)
    const id_usuario =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id
    const usuario =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser
    const produtos =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).carrinho)?.produtos
    

    const produto = produtos.map((dados) =>(
        {
        id_produto :dados?._id, 
        id_loja:dados?.id_loja,
        titulo: dados?.titulo,
        preco: dados?.preco,
        imagem_produto: dados?.imagem,
        quantidade: dados?.quantidade,
        codInter:dados?.codInter,
        loja:dados?.loja
   
        }
   ))

   



    const handelClick = (e) =>{
        e.preventDefault()
        if(usuario){
        const dados = {
            id_usuario : id_usuario, 
            nomeUsuario : usuario.nomeCompleto,
            emailUsuario : usuario.email,
            telefoneUsuario : usuario.numeroTelefone,
            produtos: produto, 
            motante: carrinho.total,
            endereco: usuario.endereco
        }

        novaFatura(dispatch, dados)
        alert("Pedido feito com sucesso!")
    }else{
        alert("Precisas de efectuar o login")
    }
    }
   
    const handelDelite = async (dados)=>{

        const res = await publicRequest.get("/produtos/"+dados.id)
        const quantidadeMais = res.data.quanti+ dados.quantidade
         await dispatch(deleteProduto(dados))
         await publicRequest.put("/produtos/menos/"+dados.id, {quanti:quantidadeMais } )
         
    }
   
     const handelClickGerarPdf = (dado)=>{
     if (usuario){
        const dados = {...dado, id_usuario:id_usuario, nomeUsuario:usuario.nomeCompleto}
     const gerarPDF = async ()=>{
        try{
                await userPdf(dados)
               alert("Obrigado por utilizares o Vandjaine! o seu download será realizado em breve!.")
     
        }catch{
            console.log("Houve algum erro!! Por favor entre em contacto caso o erro persistir para resolver obrigado.")
        }
     }
       
      gerarPDF();
    }else{
        alert("Precisa efectuar o login")

    }
        
    }

    const voltarProdutos = ()=>{
        window.location.href=`/produtos`
    }
    
   
    const dinheiro = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'AKZ' })
  
    return (
       <Container>
           <ElementOne/>
           <Navbar/>
          <Wrapper>
              <Titulo>O TEU CARRINHO DE COMPRAS </Titulo>
              <Top> 
                 
                  <TopButton onClick={voltarProdutos} >CONTINUAR A COMPRAR</TopButton>
                  <TopTexts>
                      <TopText>Produtos no Carrinho({carrinho.produtos.length})</TopText>
                      
                  </TopTexts>
                  <TopButton onClick={(e)=>handelClickGerarPdf(carrinho)} type="filled" >REQUISITAR LISTA DE COMPRA</TopButton>
                 
                
              </Top>
              <Button>
                  <Inf>
                      {carrinho?.produtos.map((produto,i)=>(
                        <div key={i}>
                  <Produto key={produto._id}>
                          <ProdutoDetalhes >
                              <Image src={`${produto?.imagem}`} />
                              <Detalhe>
                                  <ProdutoNome><b>Produto:</b>{produto?.titulo}</ProdutoNome>
                                  
                                  <ProdutoCor color = {produto?.cor} />
                                  <ProdutoTamanho><b>Tamanho:</b>{produto?.tamanho}</ProdutoTamanho>
                                  <ProdutoLoja><b>Loja:</b>{produto?.loja}</ProdutoLoja>
                              </Detalhe>
                          </ProdutoDetalhes>
                          <PrecoDetalhes >
                              <ProdutoPagamento>
                              
                                  <ProdutosQuantidade>{produto?.quantidade}</ProdutosQuantidade>
                         <Delete onClick={()=>handelDelite({id:produto?._id, preco:produto?.preco, quantidade:produto?.quantidade})}/>
                              </ProdutoPagamento>
                              <ProdutoPreco>{dinheiro.format(Number(produto?.preco*produto?.quantidade))}</ProdutoPreco>
                          </PrecoDetalhes>
                       
                      </Produto>
                      <Hr/>
                          </div>
                             ))}
                            
                    
                  </Inf>
                  <Resumo>
                      <ResumoTitulo>Resumo</ResumoTitulo>
                      <ResumoItem key={1}>
                          <ResumoItemText>Subtotal</ResumoItemText>
                          <ResumoItemText>{dinheiro.format(Number(carrinho.total))}</ResumoItemText>
                      </ResumoItem>
                      <ResumoItem  key={2}>
                          <ResumoItemText>Desconto</ResumoItemText>
                          <ResumoItemText>Kz 0%</ResumoItemText>
                      </ResumoItem>
                      <ResumoItem  key={3} type="total">
                          <ResumoItemText>Total</ResumoItemText>
                          <ResumoItemText> {dinheiro.format(Number(carrinho.total))}</ResumoItemText>
                      </ResumoItem>
                      <ButtonResumo onClick={handelClick}>Solicitar Agora</ButtonResumo>
                      
                      
                  </Resumo>
              </Button>
          </Wrapper>
           <Rodape/>

           

       </Container>
    )
}

export default Carrinho
