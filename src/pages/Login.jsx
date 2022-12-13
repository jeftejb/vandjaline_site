
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { loginUser } from "../redux/apiCalls"
import {mobile} from "../responsive"
import{Link} from "react-router-dom"
import { CircularProgress } from "@material-ui/core"
import "./../components/style.css"
import { PermIdentity } from "@material-ui/icons"

const Container  = styled.div`
width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Wrapper  = styled.div`
font-family:"Titan one" ;
text-align:center ;
justify-content:center ;
align-items:center ;
width: 25%;
padding: 20px;

margin-bottom: 20px;
${mobile({ width: "75%" })}
`

const Titulo  = styled.h1`
font-size: 24px;
font-weight: 600;
`

const Form  = styled.form`
font-family:"Titan one" ;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center ;
`

const Imput  = styled.input`
flex:1;
min-width: 100%;
margin: 10px 0px ;
padding: 10px;
`

const Logo  =  styled.div`

`;



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
    const {error} = useSelector((state)=>state?.user)
    const [loading ,setLoading] = useState()
    const dispatch = useDispatch()
    
    const handleClick = async (e)=>{
        e.preventDefault()
        setLoading(true)
        try{
           await loginUser(dispatch, {nomeUsuario, password})
            setLoading(false)
        }catch{
            setLoading(false)
        }
        
    }

  

    return (
       
            
        <Container>
           
            <Wrapper>
                <Logo><PermIdentity style={{fontSize:100}} /></Logo>
                <Titulo>Login</Titulo>  
                <Form>
                    <Imput placeholder = "E-MAIL" onChange={(e)=>setUserName(e.target.value)}  />
                    <Imput placeholder = "PALAVRA PASSE " type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Button disabled={loading} onClick = {handleClick} >ENTRAR</Button>
                    {error && <Error>Algo deu errado ...! Nome ou Palavra passe incorretos</Error>}
                    <Link style={{fontFamily:"Titan one" , textDecoration:"none", color:"#042940 " }}  to = "/recuperar/senha">NAO ME LEMBRO DA MINHA PALAVRA PASSE</Link>
                    <Link to ="/registro/:id" style={{fontFamily:"Titan one" , textDecoration:"none", color:"#042940"}}>Criar conta </Link>
                    <Link to ="/" style={{fontFamily:"Titan one" , textDecoration:"none", color:"#042940"}}>Voltar a Pagina Inicial</Link>
                    </Form>
            </Wrapper>

            {loading && 
<div className="loading">
  <CircularProgress/>
</div>
}

            
        </Container>

       
    )
}

export default Login
