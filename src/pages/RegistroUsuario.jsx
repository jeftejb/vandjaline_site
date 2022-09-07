import React from 'react'
import {mobile, tablet} from "../responsive"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import {  useEffect, useState } from "react"
import { novoUsuario, novoEstabelecimento} from "../redux/apiCalls"
import { publicRequest, userRequest } from "../requesteMetodos"
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./../firebase";
import "./../components/style.css"
import { CircularProgress } from "@material-ui/core"
import ReactPlayer from 'react-player'




const DivNormal = styled.div``
const DivImagem = styled.div`
width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`


const Container  = styled.div`
width: 100%;

position: relative;
background: url("");
background: #C5D5EA;
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

const Wrapper  = styled.div`
width: 50%;
padding: 20px;
background: #C5D5EA;
box-shadow: 20px 15px 15px black;
margin-top: 25px;
margin-bottom: 20px;
${mobile({ width: "75%" })}
`

const Titulo  = styled.h1`
font-size: 24px;
font-weight: 600;
`

const Form  = styled.form`
display: flex;
flex-wrap: wrap;
text-align:center ;



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

const TextArea  = styled.textarea`
flex:1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
border-radius: 5px;
border:3px solid #000;
background-color: transparent;
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

const Selecta = styled.select`
flex:1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
background-color: transparent ;

`

const Option = styled.option``





const Agradecimento  = styled.span`
font-size: 15px;
margin:20px 0px;
`

const Button  = styled.button`
width: 100%;
border:none;
margin-bottom:5px;
padding: 10px 0px;
background-color: teal ;
cursor: pointer;
color: white;
${mobile({ width: "100%" })}
${tablet({ width: "100%" })}
`

const ButtonCon  = styled.div`
width: 100%;
border:none;
margin-top: 30px;
margin-bottom: 5px;
padding: 10px 10px;
background-color: teal ;
text-align:center ;
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

const Img = styled.img`
      width: 100%;
`

const DivRorm = styled.div`
display:flex ;
width: 50% ;
${mobile({ width: "100%" })}
${tablet({ width: "100%" })}
`

const PlayerWrapper = styled.div`
margin: 15px;
padding: 25px ;
`

const PlayerWrapperContainer = styled.div`
display: flex;
margin: 15px;
padding: 25px ;
flex-wrap:wrap;
`

const RegistroUsuario = () => {

    const [inputUser , setInputUser] = useState({});
    const [inputEstabelecimento , setInputEstabelecimento] = useState({});
    const [dados, getDados] = useState();
    const [pass, setConfirm] = useState();
    const [passErro, setConfirmPassErro] = useState();
    const [passLoja, setConfirmLoja] = useState();
    const [passErroLoja, setConfirmPassErroLoja] = useState();
    const [vasio, setVasio] = useState();
    const [vasioLoja, setVasioLoja] = useState();
    const location = useLocation();
    const [progress ,  getProgress] = useState(0)
    const [file, setFile] = useState(null)
   const id_user = location?.pathname.split("/")[2] ;
   const [loading ,setLoading] = useState();


 

 
    
  useEffect(()=>{
    const getDado = async ()=>{
     try{
         const res = await userRequest.get("/users/"+id_user)
        getDados(res.data)
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
        const imagem = "https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fkindpng_786207.png?alt=media&token=a59d158e-d6b7-459c-b760-002177d9f886"
             if(
              inputUser?.nomeCompleto === undefined || 
              inputUser?.email === undefined || 
              inputUser?.numeroTelefone === undefined || 
              inputUser?.pais === undefined || 
              inputUser?.provincia === undefined || 
              inputUser?.municipio === undefined || 
              inputUser?.dataNascimento === undefined || 
              inputUser?.sexo === undefined || 
              inputUser?.endereco === undefined || 
              inputUser?.nomeUsuario === undefined ||
              inputUser?.nomeCompleto === "" || 
              inputUser?.email === "" || 
              inputUser?.numeroTelefone === "" || 
              inputUser?.pais === "" || 
              inputUser?.provincia === "" || 
              inputUser?.municipio === "" || 
              inputUser?.dataNascimento === "" || 
              inputUser?.sexo === "" || 
              inputUser?.endereco === "" || 
              inputUser?.nomeUsuario === "" 
             ){
              setVasio({state:"red"})
             }
           else{
         if (inputUser?.password !== pass?.confirmPass){
          setConfirmPassErro({state:"red"})
            
        }else{ 
          setLoading(true)
          try {
            const usuario = id_user !== ":" ? {...inputUser, id:id_user, imagem:imagem} : {...inputUser, imagem:imagem, id:0};
           await novoUsuario(usuario)
           setLoading(false)
        }catch{
            alert("Erro ao Cadastrar")
            setLoading(false)
        }
           
           }
         
          }
      
    }

    //estabelecimento

  

    const handelChangeEstabelecimento = (e)=>{
        setInputEstabelecimento((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    const handelChangeCOnfrLoja = (e)=>{
        setConfirmLoja ((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        }) 
    }
      
    const handelClickEstabelecimento = async (e)=>{
           e.preventDefault()
        const fileName = new Date().getTime()+ file?.name;
        const storage = getStorage(app)
        const storageRef = ref (storage, `filesLoja/${fileName}`)

    
  

        if(
          inputEstabelecimento?.nomeLoja === undefined || 
          inputEstabelecimento?.gerenteLoja === undefined || 
          inputEstabelecimento?.telefoneLoja === undefined || 
          inputEstabelecimento?.enderecoLoja === undefined || 
          inputEstabelecimento?.nifLoja === undefined || 
          inputEstabelecimento?.emailLoja === undefined || 
          inputEstabelecimento?.pais === undefined || 
          inputEstabelecimento?.provincia === undefined || 
          inputEstabelecimento?.municipio === undefined || 
          inputEstabelecimento?.actuacao === undefined ||
          inputEstabelecimento?.nomeLoja === "" || 
          inputEstabelecimento?.gerenteLoja === "" || 
          inputEstabelecimento?.telefoneLoja === "" || 
          inputEstabelecimento?.enderecoLoja === "" || 
          inputEstabelecimento?.nifLoja === "" || 
          inputEstabelecimento?.emailLoja === "" || 
          inputEstabelecimento?.pais === "" || 
          inputEstabelecimento?.provincia === "" || 
          inputEstabelecimento?.municipio === "" || 
          inputEstabelecimento?.actuacao === "" 
         ){
          setVasioLoja({state:"red"})
         }else{
      
          setLoading(true)
  if (inputEstabelecimento?.password === passLoja?.confirmPassLoja){
    const enviaPagamento = async ()=>{

      try{
      await publicRequest.post("/autenticacao/email/link/loja" , {email : inputEstabelecimento?.emailLoja })
       }catch(error){
           console.log(error)
       }
  }
            try{
            
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            if(file){
            
              const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
            
              (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                 getProgress(progress)
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                    
                }
              },
              (error) => {
                // Handle unsuccessful uploads
              },
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const estabelecimento = {...inputEstabelecimento , imagem:downloadURL}
                    novoEstabelecimento( estabelecimento)
                    enviaPagamento()
                    setLoading(false)
                });
              }
            );
            
            console.log(file? URL.createObjectURL(file) :"")
                
                
              }else{
                const estabelecimento = {...inputEstabelecimento , imagem:"https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fshopping-5217035_1280.png?alt=media&token=0428274b-7003-40f8-971a-9b97353b8f43"}
                novoEstabelecimento( estabelecimento)
                enviaPagamento()
                setLoading(false)
              }
               
               
                
           
            }catch{
                alert("Erro ao cadastrar")
                setLoading(false)
            }
       
        }else{ 
            alert("Erro ao cadastrar Palvra passe incopativel!!")
            setConfirmPassErroLoja({state:"red"})
            setLoading(false)
            
           }

          }
    }




    return (
        <div>
            <>
        <Navbar/>
        <Container>
       
{loading && 
<div className="loading">
  <CircularProgress/>
</div>
}

            <Wrapper>
                <Titulo>{dados? "CONTA DE USUÁRIO Convite feito por: "+dados.nomeCompleto :"CONTA DE USUÁRIO" }</Titulo>
                <Form>
                <DivRorm>
                <TextLabel>Primeiro e segundo nome*</TextLabel> 
                    <Imput name="nomeCompleto"  placeholder = "Primeiro e segundo nome" onChange={handelChangeUser} />
                    </DivRorm>

                    <DivRorm>
               <TextLabel>E-mail*</TextLabel> 
                    <Imput name="email" type="email" placeholder = "E-mail" onChange={handelChangeUser} />
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Numero de telefone*  +244</TextLabel> 
                   
                    <Imput name="numeroTelefone"  type="tel" pattern="[0-9]{9}" placeholder = "Numero de telefone"onChange={handelChangeUser} required/>
                    </DivRorm>

                    <DivRorm>
                    <TextLabel>Pais*</TextLabel> 
           
                    <Select name = "pais" onChange={handelChangeUser} required>
                    <Option disable >
                         Pais
                           </Option> 
                           <Option valeu = "Angola" >
                         Angola
                           </Option>     
                    </Select>
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Província*</TextLabel> 
  
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

                    <DivRorm>
                   <TextLabel>Município*</TextLabel> 
                  
                    <Imput name ="municipio" placeholder="Munícipio" onChange={handelChangeUser} required/>
                    </DivRorm>
                        

                    <DivRorm>
              <TextLabel>Data de nascimento*</TextLabel> 
                    
                    <Imput type="date" name="dataNascimento" placeholder="Data de Nascimento " onChange={handelChangeUser} required/>
                    </DivRorm>

                   
                    <Div>
                       Genero*
                    <label style={{fontSize:"15px", marginTop:"30px", size:"150"}}>Femenino</label>
                    <Imputr type="radio" name="sexo" value="Femenino"  onChange={handelChangeUser} required/>
                    <label style={{fontSize:"15px", marginTop:"30px"}}>Masculino</label>
                    <Imputr type="radio" name="sexo" value="Masculino" onChange={handelChangeUser}required/>
                    </Div>
                     
                    <DivRorm>
                    <TextLabel>Endereço*</TextLabel> 
                    <Imput name="endereco" placeholder = "Endereço" onChange={handelChangeUser} required/>
                    </DivRorm>

                    <DivRorm>
                  <TextLabel>Nome de usuário*</TextLabel> 
                   
                    <Imput name="nomeUsuario" placeholder = "Nome de usuário" onChange={handelChangeUser} required/>
                    </DivRorm>

                    <DivRorm>
                    <TextLabel>Palavra passe*</TextLabel> 
                    <Imput name="password" type="password" placeholder = "Palavra passe "onChange={handelChangeUser}required/>
                    </DivRorm>

                    <DivRorm>
                    <TextLabel>Confirmar palavra passe*</TextLabel>
                    <Imput name="confirmPass" type="password" placeholder = "Confirmar palavra passe " onChange = {handelChangeCOnfr} required/> 
                   </DivRorm>
                    { passErro ?  <label className="label" style={{ color: passErro?.state}} htmlFor="">Palavra passe incopativel.</label> : ""}
                   { vasio ?  <label className="label" style={{ color: vasio?.state}} htmlFor="">Nao pode existir campos vasios</label> : ""}
                    <Agradecimento>
                      A conta de usuário te permite efectuar pesquisa de preços, criar a sua lista de compras,  efectuar reservas e pagamento de produtos.<br/>
                      Os pagamentos são efectuados atraves da carteira virtual kamba <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App Kamba</a>  
                    </Agradecimento>
                   

                    <Button disabled={loading} onClick ={handelClickUser} >CRIAR CONTA </Button> <ButtonCon> <Link style={{textDecoration:"none", color:"#fff", fontSize:"12px"}} to="/">VOLTAR A PAGINA INICIAL</Link> </ButtonCon>
                    </Form>
            </Wrapper>

            <Wrapper>
                <Titulo>CONTA DE COMERCIANTE</Titulo>
                <Form>
                <DivRorm>
                     <TextLabel>Nome da loja* </TextLabel> 
                    <Imput name ="nomeLoja" placeholder = "Nome da empresa/ Estabelecimento comercial" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Gerente/Dono da loja*</TextLabel> 
                    <Imput name = "gerenteLoja" placeholder = "Nome do dono /Gerente" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Numero do BI/ NIF*</TextLabel> 
                    <Imput name="nifLoja" placeholder = "Numero de do BI/NIF" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>
                    
                    <DivRorm>
                     <TextLabel>E-mail*</TextLabel> 
                    <Imput name="emailLoja" type="email" placeholder = "Email" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Numero de telefone*</TextLabel> 
                    <Imput name="telefoneLoja" type = "number" placeholder = "Numero de Telefone" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>

                    <DivRorm>
                     <TextLabel>Endereço da loja*</TextLabel> 
                    <Imput name="enderecoLoja" placeholder = "Endereco" onChange={handelChangeEstabelecimento} required/>
                   </DivRorm>

                   <DivRorm>
                     <TextLabel>Pais*</TextLabel> 
                    <Select name = "pais" onChange={handelChangeEstabelecimento} required>
                    <Option disable >
                         Pais
                           </Option> 
                           <Option valeu = "Angola" >
                         Angola
                           </Option>     
                    </Select>
                     </DivRorm>


                     <DivRorm>
                     <TextLabel>Província*</TextLabel> 
                    <Select name = "provincia" onChange={handelChangeEstabelecimento } required>
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

                    <DivRorm>
                     <TextLabel>Município*</TextLabel> 
                    <Imput name ="municipio" placeholder="Município" onChange={handelChangeEstabelecimento} required/>
                   </DivRorm>

                   <DivRorm>
                     <TextLabel>Tipo de negócio*</TextLabel> 
                    <Selecta name="actuacao" onChange={handelChangeEstabelecimento} required>
                        <Option disable>
                   Tipo de Negócio
                        </Option>
                        <Option value="Super_mercado">
                     Super mercado
                        </Option>
                        <Option value="Construção">
                        Venda de material de construção
                        </Option>
                        <Option value="Electicidade">
                        Venda de equipamentos electricos
                        </Option>
                        <Option value="Informatica">
                        Venda de equipamentos Informaticos
                        </Option>
                        <Option value="Informatica_e_reparação">
                        Venda de equipamentos Informaticos e reparção de computadores
                        </Option>
                        <Option value="Casa_de_peças_de_carros">
                        Casa de peças de automoveis 
                        </Option>
                        <Option value="Casa_de_peças_de_motos">
                        Casa de peças de motociclos
                        </Option>
                        <Option value="Farmacia">
                        Farmácia 
                        </Option>
                        <Option value="Fast_food">
                        Fast-Food 
                        </Option>
                        <Option value="Hotelaria_e_turismo">
                       Hotelaria e turismo
                        </Option>
                        <Option value="Restaurante">
                        Restaurante 
                        </Option>
                        <Option value="Confeitaria">
                        Confeitaria
                        </Option>
                        <Option value="Padaria">
                        Padaria
                        </Option>
                        <Option value="Geladaria">
                        Geladaria
                        </Option>
                        <Option value="Livraria">
                        Livraria 
                        </Option>
                        <Option value="Venda_a_groço">
                        Venda a Groço 
                        </Option>
                        <Option value="Calçados">
                        Venda de Calçados 
                        </Option>
                        <Option value="Butique">
                        Boutique
                        </Option>
                        <Option value="Agricultura">
                        Venda de inputs agrícola
                        </Option>
                        <Option value="Fazenda">
                        Fazenda
                        </Option>
                        <Option value="Avicultura">
                        Avicultura
                        </Option>
                        <Option value="Suinocultura">
                        Suinocultura
                        </Option>
                        <Option value="Caprinocultura">
                        Caprinocultura 
                        </Option>
                        <Option value="Bovinocultura">
                        Bovinocultura
                        </Option>
                        <Option value="Aquicultura">
                        Aquicultura 
                        </Option>
                        <Option value="Apicultura">
                        Apicultura
                        </Option>
                        <Option value="Floricultura">
                        Floricultura
                        </Option>
                        <Option value="Prestacao_de_servicos">
                        prestação de serviços
                        </Option>
                        <Option value="Diverços">
                        Diverços 
                        </Option>
                    </Selecta>
                      </DivRorm>

                      <DivRorm>
                     <TextLabel>Palavra passe*</TextLabel> 
                    <Imput type="password" name="password" placeholder = "Palavra Passe" onChange={handelChangeEstabelecimento} required/>
                   </DivRorm>

                    <DivRorm>
                     <TextLabel>Confirmar palavra passe*</TextLabel> 
                    <Imput name="confirmPassLoja" type="password" placeholder = "Confirmar palavra passe " onChange = {handelChangeCOnfrLoja}required/>
                   </DivRorm>
                  
                 
                  <DivRorm>
                     <TextLabel>Descrição*</TextLabel> 
                  <TextArea name="descricao" placeholder="Descrição do Estabelecimento/Empresa" onChange={handelChangeEstabelecimento} required ></TextArea>
                   </DivRorm>

                  <DivImagem>
                  
          <label className="imageL">Imagem</label>
          <DivNormal >
            <Img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
          </DivNormal>
          <Imput type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
          <span>download {progress} %</span>
        

                  </DivImagem>

                  { passErroLoja ?  <label className="label" style={{ color: passErroLoja?.state}} htmlFor="">Palavra passe incopativel</label> : "" } 
                  { vasioLoja ?  <label className="label" style={{ color: vasioLoja?.state}} htmlFor="">Nao pode existir campos vasios</label> : ""}
                  <Agradecimento>
                     A conta de comerciante te permite criar uma pequena loja virtual com varias opções como: cadastrar, editar e eliminar produtos, ainda podes receber pagamentos e partilhar o link da sua loja nas tuas redes sociais e muito mais.<br/>  
                     Os pagamentos são efectuados atraves da carteira virtual kamba <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App Kamba</a>   
                    </Agradecimento>
                    <Button disabled={loading} onClick={handelClickEstabelecimento} >CRIAR CONTA </Button> <ButtonCon> <Link style={{textDecoration:"none", color:"#fff", fontSize:"12px"}} to="/">VOLTAR A PAGINA INICIAL</Link> </ButtonCon>
                    </Form>
            </Wrapper>


<PlayerWrapperContainer>

            <PlayerWrapper>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/OrIQs4WQP4g'
          width='100%'
          height='100%'
        />
        <span>Como cadastrar o meu estabelecimento</span>
      </PlayerWrapper>

      <PlayerWrapper>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/Eax-WWJrvmM'
          width='100%'
          height='100%'
        />
        <span>Cadastro de Usuário</span>
      </PlayerWrapper>


      <PlayerWrapper>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/1Nebuxv_gBY'
          width='100%'
          height='100%'
        />
        <span>Como me tornar um intermediario</span>
      </PlayerWrapper>


      </PlayerWrapperContainer>

      


        </Container>

<Rodape/>
        </>
    </div>
    )
    
}

export default RegistroUsuario
