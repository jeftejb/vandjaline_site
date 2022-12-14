import React from "react"
import { useState } from "react"
import styled from "styled-components"
import Swal from "sweetalert2"
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
font-size: 15px;
font-weight: 400;
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

        
    const redireciona = ()=>{
        window.location.href =`/perfilUser/${currentUser?._id}/${currentUser?.codigoInter}`
      } 
       
       
    const handleClickReq = (e)=>{
        e.preventDefault()
        const alerta = ()=>{
            
            Swal.fire({
                title: 'Tudo certo',
                text: 'Codigo enviado com sucesso ! Por favor verifique a sua caixa de E-mail para obter seu codigo!',
                icon: 'success',
                confirmButtonText: 'Entendi'
              })

        }
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
        alerta()
    }
    
    
    const handleClick = (e)=>{
        e.preventDefault()
        const alerta = ()=>{
            Swal.fire({
                title: 'Tudo certo',
                text: 'Confirmação feita com sucesso!',
                icon: 'success',
                confirmButtonText: 'Entendi'
              })
        }
        if(confirm_codigo){
        confirmarCodigo({confirm_codigo, id})
        alerta()
        redireciona()
        }
        else{
            
            Swal.fire({
                title: 'Error',
                text: 'Codigo invalido por favor coloque um codigo valido!',
                icon: 'error',
                confirmButtonText: 'Entendi'
              })
        }
       
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
                    <span>Caso haver algum problema no envio do seu codigo, entre em contacto com a nossa equipe: uservandja@gmail.com </span>
            </Wrapper>

            
        </Container>
    )


}

export default Confirm
