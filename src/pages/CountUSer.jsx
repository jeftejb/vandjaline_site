import React from 'react'
import {mobile, tablet} from "../responsive"
import styled from "styled-components"
import {  useLocation } from "react-router-dom"
import {  useEffect, useState } from "react"
import { novoUsuario} from "../redux/apiCalls"
import {  userRequest} from "../requesteMetodos"
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import "./../components/style.css"
import { CircularProgress } from "@material-ui/core"
import { PersonAdd} from "@material-ui/icons"





const Container  = styled.div`
width: 100%;
margin-top:200px ;
position: relative;
background: url("");
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`



const TextLabel = styled.span`

margin-bottom:150px ;
position: absolute;
color:#948f8f ;
`




const Form  = styled.form`
display: flex;
flex-direction:column ;
flex-wrap: wrap;
text-align:center ;
justify-content:center ;
align-items:center ;



`

const Imput  = styled.input`
flex:1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 5px;
background-color:transparent;
border:3px solid #000;
`


const Select = styled.select`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 5px;
border:3px solid #000;
background-color: transparent ;
`


const Option = styled.option``






const Button  = styled.button`

border:none;
margin-top:20px ;
margin-bottom:5px;
padding: 20px 40px;
border-radius:5px ;
background-color: #00A6A6;
cursor: pointer;
color: white;
${mobile({ width: "100%" })}
${tablet({ width: "100%" })}
`


const Div = styled.div`
flex:1;
display: flex;
padding: 1px;
align-items: center;
text-align:center ;
justify-content:space-between ;


`;

const Imputr = styled.input`
flex:1;
min-width: 5%;
margin: 35px 10px 0px 0px;
padding: 10px;
background-color: transparent ;

`



const DivRorm = styled.div`
display:flex ;
width: 100% ;
${mobile({ width: "100%" })}
${tablet({ width: "100%" })}
`



const ContainerInfo = styled.div`
display:flex;
margin-top:105px ;
margin-bottom:25px;
width:100% ;
flex-wrap:wrap ;

justify-content:center ;

`;

const InfoItem = styled.div`
top:0px;
text-align:center ;
margin-left:50px ;
margin-right:50px ;
width:40% ;
${tablet({ width: "90%" })}
`;

const TitleContainer = styled.div``;
const Title = styled.text`
font-family:"Titan one";
font-size:28px ;
size:500 ;
`;

const IconContainer = styled.div``;
const Icon = styled.div`


`;



const Loading = styled.div`
    
    position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  text-align: center;
`;







const CountUSer = () => {

    const [inputUser , setInputUser] = useState({});
    const [dados, getDados] = useState();
    const [pass, setConfirm] = useState();
    const [passErro, setConfirmPassErro] = useState();
    const [vasio, setVasio] = useState();
    const location = useLocation();
   const id_user = location?.pathname.split("/")[3] ;
   const [loading ,setLoading] = useState();


 

 
    
  useEffect(()=>{
    const getDado = async ()=>{
     try{
         const res = await userRequest.get("/users/"+id_user)
        getDados(res?.data)
     }catch{}
    }
    getDado();
 },[id_user]);

     




    //user
    const handelChangeUser = (e)=>{
        setInputUser((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })

      
    }


    const handelChangeCOnfr = (e)=>{
        setConfirm ((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        }) 
    }
  
    const handelClickUser = async (e)=>{
      e.preventDefault();
      setLoading(true)
        const imagem = "https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fkindpng_786207.png?alt=media&token=a59d158e-d6b7-459c-b760-002177d9f886"
             if(
              inputUser?.nomeCompleto === undefined || 
              inputUser?.email === undefined || 
              inputUser?.numeroTelefone === undefined || 
              //inputUser?.pais === undefined || 
              //inputUser?.provincia === undefined || 
              //inputUser?.municipio === undefined || 
              //inputUser?.dataNascimento === undefined || 
              inputUser?.sexo === undefined || 
              //inputUser?.endereco === undefined || 
              //inputUser?.nomeUsuario === undefined ||
              inputUser?.nomeCompleto === "" || 
              inputUser?.email === "" || 
              inputUser?.numeroTelefone === "" || 
              //inputUser?.pais === "" || 
              //inputUser?.provincia === "" || 
              //inputUser?.municipio === "" || 
              //inputUser?.dataNascimento === "" || 
              inputUser?.sexo === "" 
              //inputUser?.endereco === "" || 
              //inputUser?.nomeUsuario === "" 
             ){
              setVasio({state:"red"})
              setLoading(false)
             }
           else if (inputUser?.password !== pass?.confirmPass){
          setConfirmPassErro({state:"red"})
          setLoading(false)
        }else{ 
         
          try {
            const usuario = id_user !== ":id" ? {...inputUser, id:id_user, imagem:imagem} : {...inputUser, imagem:imagem, id:0};
           await novoUsuario(usuario)
           setLoading(false)
        }catch{
            alert("Erro ao Cadastrar")
            setLoading(false)
        }
           
           }
         
          }
      
    

    //estabelecimento

    return (
        <div>
            <>
         
        <Navbar/>
        <Container>
       



       <ContainerInfo>
            <InfoItem className="reveal fade-bottom">
                <IconContainer>
                    <Icon><PersonAdd style={{fontSize:100}} /></Icon>
                </IconContainer>

                <TitleContainer>
                    <Title>{dados? "CRIAR CONTA DE USUÁRIO Convite feito por: "+dados.nomeCompleto :"CRIAR CONTA DE USUÁRIO" }</Title>
                </TitleContainer>
                

                <Form>
                <DivRorm>
                
                    <Imput name="nomeCompleto"  placeholder = "Primeiro e Segundo nome" onChange={handelChangeUser} />
                    </DivRorm>

                    <DivRorm>
              
                    <Imput name="email" type="email" placeholder = "E-mail" onChange={handelChangeUser} />
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Numero de telefone  +244</TextLabel> 
                   
                    <Imput name="numeroTelefone"  type="number" pattern='[0-9]{2}-[0-9]{9}' placeholder = "Numero de telefone"onChange={handelChangeUser} required/>
                    </DivRorm>

                    <DivRorm hidden>
                    
           
                    <Select name = "pais" onChange={handelChangeUser} required>
                    <Option disable >
                         Pais
                           </Option> 
                           <Option valeu = "Angola" >
                         Angola
                           </Option>     
                    </Select>
                    </DivRorm>

                    <DivRorm hidden>
                 
  
                    <Select name = "provincia" onChange={handelChangeUser } required>
                            <Option disable>
                         Província
                            </Option>
                                <Option value = "Província_do_Bengo">Província do Bengo</Option>
                                <Option value = "Província_de_Benguela">Província de Benguela</Option>
                                <Option value = "Província_do_Bié">Província do Bié</Option>
                                <Option value = "Província_de_Cabinda">Província de Cabinda</Option>
                                <Option value = "Província_do_Cuando_Cubango ">Província do Cuando-Cubango</Option>
                                <Option value = "Província_do_Cunene">Província do Cunene</Option>
                                <Option value = "Província_do_Huambo">Província do Huambo</Option>
                                <Option value = "Província_da_Huíla">Província da Huíla</Option>
                                <Option value = "Província_do_Kwanza_Sul">Província do Kwanza Sul</Option>
                                <Option value = "Província_do_Kwanza_Norte">Província do Kwanza Norte</Option>
                                <Option value = "Província_de_Luanda">Província de Luanda</Option>
                                <Option value = "Província_da_Lunda_Norte">Província da Lunda Norte</Option>
                                <Option value = "Província_da_Lunda_Sul">Província da Lunda Sul</Option>
                                <Option value = "Província_de_Malanje">Província de Malanje</Option>
                                <Option value = "Província_do_Moxico">Província do Moxico</Option>
                                <Option value = "Província_do_Namibe">Província do Namibe</Option>
                                <Option value = "Província_do_Uíge">Província do Uíge</Option>
                                <Option value = "Província_do_Zaire">Província do Zaire</Option>


                    </Select>
                    </DivRorm>

                    <DivRorm hidden>
                   
                  
                    <Imput name ="municipio" placeholder="Munícipio" onChange={handelChangeUser} required/>
                    </DivRorm>
                        

                    <DivRorm hidden>
             
                    
                    <Imput type="date" name="dataNascimento" placeholder="Data de Nascimento " onChange={handelChangeUser} required/>
                    </DivRorm>

                   
                    <Div>
                    
                    <label style={{fontSize:"15px", marginTop:"30px", size:"150"}}>Femenino</label>
                    <Imputr type="radio" name="sexo" value="Femenino"  onChange={handelChangeUser} required/>
                    <label style={{fontSize:"15px", marginTop:"30px"}}>Masculino</label>
                    <Imputr type="radio" name="sexo" value="Masculino" onChange={handelChangeUser}required/>
                    </Div>
                     
                    <DivRorm hidden>
                    <TextLabel>Endereço*</TextLabel> 
                    <Imput name="endereco" placeholder = "Endereço" onChange={handelChangeUser} required/>
                    </DivRorm>

                    <DivRorm hidden>
              
                   
                    <Imput name="nomeUsuario" placeholder = "Nome de usuário" onChange={handelChangeUser} required/>
                    </DivRorm>

                    <DivRorm>
                   
                    <Imput name="password" type="password" placeholder = "Palavra passe "onChange={handelChangeUser}required/>
                    </DivRorm>

                    <DivRorm>
               
                    <Imput name="confirmPass" type="password" placeholder = "Confirmar palavra passe " onChange = {handelChangeCOnfr} required/> 
                   </DivRorm>
                    { passErro ?  <label className="label" style={{ color: passErro?.state}} htmlFor="">Palavra passe incopativel.</label> : ""}
                   { vasio ?  <label className="label" style={{ color: vasio?.state}} htmlFor="">Nao pode existir campos vasios</label> : ""}
                   

                    <Button disabled={loading} onClick={handelClickUser}  >CRIAR CONTA </Button> 
                    </Form>

                
            </InfoItem>
            {loading && 
            <Loading >
              <CircularProgress/>
            </Loading>
            }
          
        </ContainerInfo>

   
        </Container>
        <Rodape/>
        </>
 
    </div>
    )
    
}

export default CountUSer;
