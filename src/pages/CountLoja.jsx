import React from 'react'
import {mobile, tablet} from "../responsive"
import styled from "styled-components"
import {   useState } from "react"
import {  novoEstabelecimento} from "../redux/apiCalls"
import { publicRequest} from "../requesteMetodos"
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import "./../components/style.css"
import { CircularProgress } from "@material-ui/core"


import {Storefront } from "@material-ui/icons"
import Swal from 'sweetalert2'




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

const Selecta = styled.select`
flex:1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
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





const CountLoja = () => {


    const [inputEstabelecimento , setInputEstabelecimento] = useState({});

    const [passLoja, setConfirmLoja] = useState();
    const [passErroLoja, setConfirmPassErroLoja] = useState();
    const [vasioLoja, setVasioLoja] = useState();
    //const [progress ,  getProgress] = useState(0)
    //const [file, setFile] = useState(null)
   
   const [loading ,setLoading] = useState();


   

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
       
        e.preventDefault();
        //const fileName = new Date().getTime()+ file?.name;
        //const storage = getStorage(app)
        //const storageRef = ref (storage, `filesLoja/${fileName}`)
        if(
          inputEstabelecimento?.nomeLoja === undefined || 
          //inputEstabelecimento?.gerenteLoja === undefined || 
          inputEstabelecimento?.telefoneLoja === undefined || 
          inputEstabelecimento?.enderecoLoja === undefined || 
          inputEstabelecimento?.nifLoja === undefined || 
          inputEstabelecimento?.emailLoja === undefined || 
          //inputEstabelecimento?.pais === undefined || 
          //inputEstabelecimento?.provincia === undefined || 
          //inputEstabelecimento?.municipio === undefined || 
          inputEstabelecimento?.actuacao === undefined ||
          inputEstabelecimento?.nomeLoja === "" || 
          //inputEstabelecimento?.gerenteLoja === "" || 
          inputEstabelecimento?.telefoneLoja === "" || 
          inputEstabelecimento?.enderecoLoja === "" || 
          inputEstabelecimento?.nifLoja === "" || 
          inputEstabelecimento?.emailLoja === "" || 
          //inputEstabelecimento?.pais === "" || 
          //inputEstabelecimento?.provincia === "" || 
          //inputEstabelecimento?.municipio === "" || 
          inputEstabelecimento?.actuacao === "" 
         ){
          setVasioLoja({state:"red"})
         }else if (inputEstabelecimento?.password === passLoja?.confirmPassLoja){
            setLoading(true);
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
           /* if(file){
              div imagem
              <DivImagem hidden >
                  
          <label className="imageL">Imagem</label>
          <DivNormal >
            <Img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
          </DivNormal>
          <Imput type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
          <span>download {progress} %</span>

                  </DivImagem>
            
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
                setLoading(true)
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const estabelecimento = {...inputEstabelecimento , imagem:downloadURL}
                    novoEstabelecimento( estabelecimento)
                    //enviaPagamento()
                    setLoading(false)
                });
              }
            );
            
            console.log(file? URL.createObjectURL(file) :"")
                
                
              }else{

                
              }
               */
            
              
              
              const estabelecimento = {...inputEstabelecimento , imagem:"https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fshopping-5217035_1280.png?alt=media&token=0428274b-7003-40f8-971a-9b97353b8f43"}
              novoEstabelecimento( estabelecimento)
              enviaPagamento()
              setLoading(false)
                
           
            }catch{
              Swal.fire({
                title: 'Error!',
                text: 'Algo deu errado, por favor tente novamente',
                icon: 'error',
                confirmButtonText: 'Entendi'
              })
                setLoading(false)
            }
       
        }else{ 
          Swal.fire({
            title: 'Error!',
            text: 'Palavra passe incompatíveis, por favor verifique e tente novamnet',
            icon: 'error',
            confirmButtonText: 'Entendi'
          })
       
            setConfirmPassErroLoja({state:"red"})
            setLoading(false)
            
           }

          }
    




    return (
        <div>
            <>
         
        <Navbar/>
        <Container>
       <ContainerInfo>

              <InfoItem className="reveal fade-bottom">
            <IconContainer>
            <Icon><Storefront style={{fontSize:100}} /></Icon>
                </IconContainer>
                <TitleContainer>
                    <Title>CRIAR CONTA DE COMERCIANTE</Title>
                </TitleContainer>
              

                <Form>
                <DivRorm>
                     
                    <Imput name ="nomeLoja" placeholder = "Nome da empresa/ Estabelecimento comercial" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>


                    <DivRorm>
                   
                    <Imput name="nifLoja" placeholder = "Numero do BI/NIF" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>
                    
                    <DivRorm>
                   
                    <Imput name="emailLoja" type="email" placeholder = "Email" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>

                    <DivRorm>
                     
                    <Imput name="telefoneLoja" type = "number" placeholder = "Numero de Telefone" onChange={handelChangeEstabelecimento} required/>
                    </DivRorm>

                    <DivRorm>
                
                    <Imput name="enderecoLoja" placeholder = "Ex:Huíla, Lubango, Arco-ires" onChange={handelChangeEstabelecimento} required/>
                   </DivRorm>

                   <DivRorm hidden>
                     
                    <Select name = "pais" onChange={handelChangeEstabelecimento} required>
                    <Option disable >
                         Pais
                           </Option> 
                           <Option valeu = "Angola" >
                         Angola
                           </Option>     
                    </Select>
                     </DivRorm>


                     <DivRorm hidden>
                    
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
                    
                    <Imput type="password" name="password" placeholder = "Palavra Passe" onChange={handelChangeEstabelecimento} required/>
                   </DivRorm>

                    <DivRorm>
                   
                    <Imput name="confirmPassLoja" type="password" placeholder = "Confirmar palavra passe " onChange = {handelChangeCOnfrLoja}required/>
                   </DivRorm>
                  
                 

                

                  { passErroLoja ?  <label className="label" style={{ color: passErroLoja?.state}} htmlFor="">Palavra passe incopativel</label> : "" } 
                  { vasioLoja ?  <label className="label" style={{ color: vasioLoja?.state}} htmlFor="">Nao pode existir campos vasios</label> : ""}
                 
                    <Button disabled={loading} onClick={handelClickEstabelecimento} >CRIAR CONTA </Button> 
              
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

export default CountLoja ; 
