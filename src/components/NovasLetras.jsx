import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
height: 60vh;
background-color: #D6D58E;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Titulo = styled.h1`
font-size: 70px;
margin-bottom: 20px;
font-size: 25px;
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
${mobile({ width: "80%" })}
`
const Description = styled.div`
font-size: 20px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`
const Input = styled.input`
border:none;
flex: 8;
padding-left: 20px;
`

const InputTextBox = styled.textarea`
border:1px solid #ccc;
margin-top: 15px;
width: 50%;
padding: 30px;


`
const Button = styled.button`
flex: 1;
background-color: #8888f3;
color: white;
`

const NovasLetras = () => {
    return (
        <Container>
            <Titulo>Envia-nos uma mensagem </Titulo>
            <Description>Envia-nos uma mensagem(Sujestão, Critica ou Reclamacão)</Description>
            <InputContainer>
            <Input placeholder="Teu Email" />
            <Button>
                <Send/>
            </Button>
          
            </InputContainer>
            <InputTextBox placeholder="Escreva aqui a sua mensagem" ></InputTextBox>
        </Container>
    )
}

export default NovasLetras
