import {mobile, tablet} from "../responsive"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import {  useEffect, useState } from "react"
import { novoUsuario, novoEstabelecimento} from "../redux/apiCalls"
import { userRequest } from "../requesteMetodos"
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./../firebase";



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
background: grey;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Wrapper  = styled.div`
width: 50%;
padding: 20px;
background: white;
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
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const TextArea  = styled.textarea`
flex:1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Select = styled.select`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Selecta = styled.select`
flex:1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Option = styled.option``





const Agradecimento  = styled.span`
font-size: 20px;
margin:20px 0px;
`

const Button  = styled.button`
width: 30%;
border:none;
margin:30px;
padding: 10px 15px;
background-color: teal ;
cursor: pointer;
color: white;
${mobile({ width: "100%" })}
${tablet({ width: "100%" })}
`

const ButtonCon  = styled.div`
width: 30%;
border:none;
margin-top: 30px;
margin-bottom: 30px;
padding: 10px 15px;
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

`

const Img = styled.img`
      width: 100%;
`

const RegistroUsuario = () => {

    const [inputUser , setInputUser] = useState({});
    const [inputEstabelecimento , setInputEstabelecimento] = useState({});
    const [dados, getDados] = useState();
    const [pass, setConfirm] = useState();
    const [passErro, setConfirmPassErro] = useState();
    const [passLoja, setConfirmLoja] = useState();
    const [passErroLoja, setConfirmPassErroLoja] = useState();
    const location = useLocation();
    const [progress ,  getProgress] = useState(0)
    const [file, setFile] = useState(null)
   const id_user = location?.pathname.split("/")[2] ;

 

 
    
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
        if (inputUser?.password === pass?.confirmPass ){
            try {
                const usuario = id_user !== ":" ? {...inputUser, id:id_user, imagem: imagem} :  {...inputUser, imagem:imagem};
               await novoUsuario(usuario)
            
            }catch{
                alert("Erro ao Cadastrar")
            }
        }else{ 
            alert("Erro ao cadastrar Palvra passe incopativel!!")
            setConfirmPassErro({state:"red"})
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

  if (inputEstabelecimento?.password === passLoja?.confirmPassLoja){
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
                });
              }
            );
            
            console.log(file? URL.createObjectURL(file) :"")
                
                
              }else{
                const estabelecimento = {...inputEstabelecimento , imagem:"https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fshopping-5217035_1280.png?alt=media&token=0428274b-7003-40f8-971a-9b97353b8f43"}
                novoEstabelecimento( estabelecimento)
              }
               
               
                
           
            }catch{
                alert("Erro ao cadastrar")
            }
       
        }else{ 
            alert("Erro ao cadastrar Palvra passe incopativel!!")
            setConfirmPassErroLoja({state:"red"})
            
           }
     
    }


    return (
        <div>
            <>
        <Navbar/>
        <Container>
       
            <Wrapper>
                <Titulo>{dados? "CONTA DE USUÁIO Convite feito por: "+dados.nomeCompleto :"CONTA DE USUÁRIO" }</Titulo>
                <Form>
                    <Imput name="nomeCompleto" placeholder = "Primeiro e segundo nome" onChange={handelChangeUser} required/>
                    <Imput name="email" type="email" placeholder = "Email" onChange={handelChangeUser} required/>
                    <Imput name="numeroTelefone"  type="number" max={10} placeholder = "Numero de telefone"onChange={handelChangeUser} required/>
                    <Select name = "pais" onChange={handelChangeUser} required>
                    <Option disable >
                         Pais
                           </Option> 
                           <Option valeu = "Angola" >
                         Angola
                           </Option>     
                    </Select>
                    <Select name = "provincia" onChange={handelChangeUser } required>
                            <Option disable>
                         Provincia
                            </Option>
                                <Option value = "Província_do_Bengo">"Província do Bengo</Option>
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
                    <Imput name ="municipio" placeholder="Municipio" onChange={handelChangeUser} required/>
                       
                        
                    <label>Data de nascimento</label>
                    <Imput type="date" name="dataNascimento" placeholder="Data de Nascimento " onChange={handelChangeUser} required/>
                    <Div> Genero
                    <label style={{fontSize:"15px", marginTop:"30px", size:"150"}}>Femenino</label>
                    <Imputr type="radio" name="sexo" value="Femenino"  onChange={handelChangeUser} required/>
                    <label style={{fontSize:"15px", marginTop:"30px"}}>Masculino</label>
                    <Imputr type="radio" name="sexo" value="Masculino" onChange={handelChangeUser}required/>
                    </Div>
                    <Imput name="endereco" placeholder = "Endereco" onChange={handelChangeUser} required/>
                    <Imput name="nomeUsuario" placeholder = "Nome de usuario" onChange={handelChangeUser} required/>
                    <Imput name="password" type="password" placeholder = "Palavra passe "onChange={handelChangeUser}required/>
                    <Imput name="confirmPass" type="password" placeholder = "Confirmar palavra passe " onChange = {handelChangeCOnfr} required/>
                   { passErro ?  <label className="label" style={{ color: passErro?.state}} htmlFor="">Palavra passe incopativel</label> : ""
                   
                   } 
                    <Agradecimento>
                      A conta de usuário te permite efectuar pesquisa de preços, criar a sua lista de compras,  efectuar reservas e pagamento de produtos.<br/>
                      Os pagamentos são efectuados atraves da carteira virtual kamba <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App Kamba</a>  
                    </Agradecimento>

                    <Button onClick ={handelClickUser} >CRIAR CONTA </Button> <ButtonCon> <Link style={{textDecoration:"none", color:"#fff", fontSize:"12px"}} to="/">VOLTAR A PAGINA INICIAL</Link> </ButtonCon>
                    </Form>
            </Wrapper>

            <Wrapper>
                <Titulo>CONTA DE COMERCIANTE</Titulo>
                <Form>
                    <Imput name ="nomeLoja" placeholder = "Nome da empresa/ Estabelecimento comercial" onChange={handelChangeEstabelecimento} required/>
                    <Imput name = "gerenteLoja" placeholder = "Nome do dono /Gerente" onChange={handelChangeEstabelecimento} required/>
                    <Imput name="nifLoja" placeholder = "Numero de do BI" onChange={handelChangeEstabelecimento} required/>
                    <Imput name="emailLoja" type="email" placeholder = "Email" onChange={handelChangeEstabelecimento} required/>
                    <Imput name="telefoneLoja" type = "number" placeholder = "Numero de Telefone" onChange={handelChangeEstabelecimento} required/>
                    <Imput name="enderecoLoja" placeholder = "Endereco" onChange={handelChangeEstabelecimento} required/>
                   
                    <Select name = "pais" onChange={handelChangeEstabelecimento} required>
                    <Option disable >
                         Pais
                           </Option> 
                           <Option valeu = "Angola" >
                         Angola
                           </Option>     
                    </Select>
                    <Select name = "provincia" onChange={handelChangeEstabelecimento } required>
                            <Option disable>
                         Provincia
                            </Option>
                                <Option value = "Província_do_Bengo">"Província do Bengo</Option>
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
                    <Imput name ="municipio" placeholder="Municipio" onChange={handelChangeEstabelecimento} required/>
                   

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
                        Venda de equipamentos Informaticos\reparção de computadores
                        </Option>
                        <Option value="Casa_de_peças_de_carros">
                        Casa de peças de automoveis 
                        </Option>
                        <Option value="Casa_de_peças_de_motos">
                        Casa de peças de motos
                        </Option>
                        <Option value="Farmacia">
                        Farmacia 
                        </Option>
                        <Option value="Fast_food">
                        Fast-Food 
                        </Option>
                        <Option value="Restaurante">
                        Restaurante 
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
                        Butique 
                        </Option>
                        <Option value="Agricultura">
                        Venda de inputes agricola
                        </Option>
                        <Option value="Fazenda">
                        Fazenda
                        </Option>
                        <Option value="Prestacao_de_servicos">
                        prestação de serviços
                        </Option>
                        <Option value="Diverços">
                        Diverços 
                        </Option>
                    </Selecta>
                    <Imput type="password" name="password" placeholder = "Palavra Passe" onChange={handelChangeEstabelecimento} required/>
                    <Imput name="confirmPassLoja" type="password" placeholder = "Confirmar palavra passe " onChange = {handelChangeCOnfrLoja}required/>
                   { passErroLoja ?  <label className="label" style={{ color: passErroLoja?.state}} htmlFor="">Palavra passe incopativel</label> : ""
                   
                   } 
                  <TextArea name="descricao" placeholder="Descricao do Estabelecimento" onChange={handelChangeEstabelecimento} required ></TextArea>
                   

                  <DivImagem>
                  
          <label className="imageL">Imagem</label>
          <DivNormal >
            <Img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
          </DivNormal>
          <Imput type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
          <span>download {progress} %</span>
        

                  </DivImagem>
                  <Agradecimento>
                     A conta de comerciante te permite criar uma pequena loja virtual com varias opções como: cadastrar, editar e eliminar produtos, ainda podes receber pagamentos e partilhar o link da sua loja nas tuas redes sociais e muito mais.<br/>  
                     Os pagamentos são efectuados atraves da carteira virtual kamba <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App Kamba</a>   
                    </Agradecimento>
                    <Button onClick={handelClickEstabelecimento} >CRIAR CONTA </Button> <ButtonCon> <Link style={{textDecoration:"none", color:"#fff", fontSize:"12px"}} to="/">VOLTAR A PAGINA INICIAL</Link> </ButtonCon>
                    </Form>
            </Wrapper>

            
        </Container>

<Rodape/>
        </>
    </div>
    )
    
}

export default RegistroUsuario
