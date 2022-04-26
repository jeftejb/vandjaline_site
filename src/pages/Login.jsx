
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { loginUser } from "../redux/apiCalls"
import {mobile} from "../responsive"
import{Link} from "react-router-dom"


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



const Login = () => {
    const [nomeUsuario, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const {isFetching,error} = useSelector((state)=>state?.user)
    const dispatch = useDispatch()
    
    const handleClick = (e)=>{
        e.preventDefault()
        loginUser(dispatch, {nomeUsuario, password})
    }

  

    return (
       
            
        <Container>
           
            <Wrapper>
                <Titulo>Login</Titulo>  
                <Form>
                    <Imput placeholder = "nome de usuario" onChange={(e)=>setUserName(e.target.value)} />
                    <Imput placeholder = "palavra passe " type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Button onClick = {handleClick} disabled={isFetching} >ENTRAR</Button>
                    {error && <Error>Algo deu errado ...!</Error>}
                    <Link to = "/recuperar/senha">NAO ME LEMBRO DA MINHA PALAVRA PASSE</Link>
                    <Link to ="/registro/:id">Criar conta </Link>
                    <Link to ="/">Voltar a Pagina Inicial</Link>
                    </Form>
            </Wrapper>

            
        </Container>

       
    )
}

export default Login
