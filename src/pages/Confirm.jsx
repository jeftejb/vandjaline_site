
import { useState } from "react"
import styled from "styled-components"
import { confirmarCodigo  } from "../redux/apiCalls"
import { publicRequest, userRequest} from "../requesteMetodos"
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
width: 100%;
border:none;
padding: 15px 15px;
background-color: teal ;
cursor: pointer;
color: white;
margin-bottom: 10px;
&::disabled{
    color:green;
    cursor: not-allowed;

}
`




const Confirm = () => {
    const [confirm_codigo, setCodigo] = useState("")
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
           
         try {
            await userRequest.put(`/users/${id}`, {codigoConfirm: dado.conteudo})
             await publicRequest.post("/autenticacao/email", dado)

         }catch(erro){
             console.log(erro)
         }
         }
        updateCod()
    }
    
    
    const handleClick = (e)=>{
        e.preventDefault()
        const alerta = ()=>{
            alert("Confirmação feita com sucesso !")
        }
        confirmarCodigo({confirm_codigo, id})
        alerta()
       
    }

  


    return (

        

        <Container>
            <Wrapper>
                <Titulo>CONFIRMAR CODIGO </Titulo>   
                <Form>
                    <Imput placeholder = "Confirmar codigo" onChange={(e)=>setCodigo(e.target.value)} />
                    <Button onClick = {handleClick}  >Confirmar</Button>
                    <Button onClick = {handleClickReq}  >Requisitar codigo</Button>
                   
                    </Form>
            </Wrapper>

            
        </Container>
    )


}

export default Confirm
