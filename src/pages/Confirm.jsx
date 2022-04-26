
import { useState } from "react"
import {  useSelector } from "react-redux"
import styled from "styled-components"
import { confirmarCodigo  } from "../redux/apiCalls"
import { publicRequest, userRequest } from "../requesteMetodos"
import {mobile} from "../responsive"


const Container  = styled.div`
width: 100vw;
height: 100vh;
background: url("");
background: grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Wrapper  = styled.div`
width: 25%;
padding: 20px;
background: white;
margin-bottom: 20px;
${mobile({ width: "75%" })}
`

const Titulo  = styled.h1`
font-size: 24px;
font-weight: 600;
`

const Form  = styled.form`
display: flex;
flex-direction: column;

`

const Imput  = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px ;
padding: 10px;
`



const Button  = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal ;
cursor: pointer;
color: white;
margin-bottom: 10px;
&::disabled{
    color:green;
    cursor: not-allowed;

}
`

const Error = styled.span`
color :red;
`



const Confirm = () => {
    const [confirm_codigo, setCodigo] = useState("")
    const {isFetching,error} = useSelector((state)=>state.user)
    const currentUser = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser
    const id = currentUser._id
    const email = currentUser.email
        
       
       
    const handleClickReq = (e)=>{
        e.preventDefault()
        const updateCod = async ()=>{
            const max = 1000000
        const  min = 50000
        const codigoConfirm = Math.floor(Math.random() * (max - min) + min)
        const dado = {email:email, conteudo:codigoConfirm}
            try{
               
                 await userRequest.put(`/users/${id}`, {codigoConfirm: codigoConfirm})

                 await publicRequest.post("/autenticacao/email", dado)
               
            }catch{}
        }
        updateCod()
    }
    
    
    const handleClick = (e)=>{
        e.preventDefault()
        confirmarCodigo({confirm_codigo, id})
    }

  

    return (
        <Container>
            <Wrapper>
                <Titulo>CONFIRMAR CODIGO </Titulo>   
                <Form>
                    <Imput placeholder = "Confirmar codigo" onChange={(e)=>setCodigo(e.target.value)} />
                    <Button onClick = {handleClick} disabled={isFetching} >Confirmar</Button>
                    <Button onClick = {handleClickReq} disabled={isFetching} >Requisitar codigo</Button>
                    {error && <Error>Algo deu errado ...!</Error>}
                    </Form>
            </Wrapper>

            
        </Container>
    )
}

export default Confirm
