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
                <Titulo>{dados? "CONTA DE USUARIO   Convite feito por: "+dados.nomeCompleto :"CONTA DE USUARIO" }</Titulo>
                <Form>
                    <Imput name="nomeCompleto" placeholder = "Primeiro e segundo nome" onChange={handelChangeUser} required/>
                    <Imput name="email" type="email" placeholder = "Email" onChange={handelChangeUser} required/>
                    <Imput name="numeroTelefone"  type="number" placeholder = "Numero de telefone"onChange={handelChangeUser} required/>
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
                    <Select name ="municipio" onChange={handelChangeUser} required>
                        <Option disable>
                            Municipio
                        </Option>
        <Option value = "Dande">Dande</Option>
        <Option value = "Ambriz">Ambriz</Option>
        <Option value = "Icolo_e_Bengo">Icolo e Bengo</Option>
        <Option value= " Muxima">Muxima</Option>
        <Option value = "Nambuangongo">Nambuangongo</Option>
        <Option value = "Lobito">Lobito</Option>
       <Option value = "Bocoio">Bocoio</Option>
        <Option value = " Balombo">Balombo</Option>
        <Option value = "Ganda">Ganda</Option>
        <Option value = "Cubal">Cubal</Option>
        <Option value = "Caiambambo">Caiambambo</Option>
        <Option value ="Benguela">Benguela</Option>
        <Option value = "Baía_Farta">Baía Farta</Option>
        <Option value = "Chongoroi">Chongoroi</Option>
        <Option value = "Kuito">Kuito</Option>
        <Option value = "Andulo">Andulo</Option>
        <Option value = "Nharea">Nharea</Option>
        <Option value = "Cuemba">Cuemba</Option>
        <Option value = "Cunhinga">Cunhing</Option>
        <Option value ="Catabola">Catabola</Option>
        <Option value = "Camacupa">Camacupa</Option>
        <Option value = "Chinguar">Chinguar</Option>
        <Option value = "Chitembo">Chitembo</Option>
        <Option value = " Cabinda">Cabinda</Option>
       <Option value= "Cacongo">Cacongo</Option>
        <Option value = " Buco_Zau">Buco-Zau</Option>
        <Option value = "Belize">Belize</Option>
        <Option value = "Menongue">Menongue</Option>
        <Option value = "Cuito_Cuanavale">Cuito Cuanavale</Option>
        <Option value = "Cuchi">Cuchi</Option>
        <Option value =" Cuangar"> Cuangar</Option>
        <Option value = "Longa">Longa</Option>
        <Option value = "Mavinga">Mavinga</Option>
        <Option value = " Calai">Calai</Option>
        <Option value = "Dirico">Dirico</Option>
        <Option value = "Rivungo">Rivungo</Option>
        <Option value = "Cuanhama">Cuanhama</Option>
        <Option value = "Ombadja">Ombadja</Option>
        <Option value = "Cuvelai">Cuvelai</Option>
        <Option value = "Curoca">Curoca</Option>
        <Option value = "Cahama">Cahama</Option>
        <Option value = "Namacunde">Namacunde</Option>
        <Option value = "Huambo">Huambo</Option>
        <Option value = " Londuimbale"> Londuimbale</Option>
        <Option value = " Bailundo">Bailundo</Option>
        <Option value = "Mungo">Mungo</Option>
        <Option value = "Tchindjenje">Tchindjenje</Option>
        <Option value = "Ucuma">Ucuma</Option>
        <Option value = " Ekunha">Ekunha</Option>
        <Option value = "Tchicala_Tcholoanga">Tchicala-Tcholoanga</Option>
        <Option value = "Catchiungo">Catchiungo</Option>
        <Option value = "Longongo">Longongo</Option>
    <Option value = "Caála">Caála</Option>
        <Option value = " Quilengues"> Quilengues</Option>
        <Option value = "Lubango">Lubango</Option>
        <Option value = "Humpata">Humpata</Option>
        <Option value = "Chibia">Chibia</Option>
        <Option value = " Chiange">Chiange</Option>
        <Option value = "Quipungo">Quipungo</Option>
        <Option value = "Caluquembe">Caluquembe</Option>
        <Option value  = "Caconda">Caconda</Option>
        <Option value = "Chicomba">Chicomba</Option>
        <Option value= " Matala">Matala</Option>
        <Option value= " Jamba">Jamba</Option>
        <Option value = "Chipindo">Chipindo</Option>
        <Option value = " Kuvango"> Kuvango</Option>
        <Option value = "Sumbe">Sumbe</Option>
        <Option value = " Porto_Amboim">Porto_Amboim</Option>
        <Option value = "Quibala">Quibala</Option>
        <Option value = " Libolo">Libolo</Option>
    <Option value = "Mussende">Mussende</Option>   
        <Option value = "Amboim">Amboim</Option>
        <Option value = " Ebo">Ebo</Option>
       <Option value = " Quilenda">Quilenda</Option>
        <Option value= "Conda">Conda</Option>
        <Option value= "Waku_Kungo">Waku_Kungo</Option>
        <Option value = " Seles">Seles</Option>
        <Option value = " Cassongue">Cassongue</Option>
      <Option value = "Cazengo">Cazengo</Option>
        <Option value = " Lucala"> Lucala</Option>
        <Option value = "Ambaca">Ambaca</Option>
        <Option value= " Golungo_Alto">Golungo Alto</Option>
       <Option value = "Dembos">Dembos</Option>
        <Option value= "Bula_Atumba">Bula Atumba</Option>
        <Option value = "Cambambe">Cambambe</Option>
        <Option value="Quiculungo">Quiculungo</Option>
        <Option value = "Bolongongo">Bolongongo</Option>
    <Option value =  "Banga">Banga</Option>
        <Option value = "Samba_Cajú">Samba Cajú </Option> 
        <Option value = "Gonguembo" >Gonguembo</Option>
        <Option value = "Pango Alúquem">Pango Alúquem</Option>
        <Option value = "Luanda" >Luanda</Option>
        <Option value = " Tchitato">Tchitato</Option> 
        <Option value = "Cambulo">Cambulo</Option>
        <Option value = "Chitato">Chitato</Option>
        <Option value  = "Cuilo">Cuilo</Option>
        <Option valeu = "Caungula">Caungula</Option>
    <Option value = "Cuango">Cuango</Option>
        <Option value = "Lubalo">Lubalo</Option> 
     <Option value = "Capenda_Camulemba">Capenda Camulemba</Option>
        <Option value = "Xá_Muteba">Xá Muteba</Option> 
        <Option value = " Saurimo">Saurimo</Option>
        <Option value = " Dala"> Dala</Option>
        <Option value = " Muconda"> Muconda</Option> 
        <Option value = " Cacolo">Cacolo</Option>
        <Option value= " Massango">Massango</Option>
        <Option value= "Marimba">Marimba</Option> 
        <Option value=" Calandula">Calandula</Option> 
       <Option value = "Caombo">Caombo</Option>
       <Option value= "Cunda_Dia_Baza">Cunda-Dia-Baza</Option>
       <Option value= "Cacuzo">Cacuzo</Option>
        <Option value = "Cuaba_Nzogo">Cuaba Nzogo</Option>
        <Option value = "Quela">Quela</Option>
        <Option value = "Malanje">Malanje</Option>
        <Option value= "Mucari">Mucari</Option>
       <Option value = "Cangandala">Cangandala</Option>
        <Option value = "Cambundi_Catembo">Cambundi-Catembo</Option>
       <Option  value = "Luquembo">Luquembo</Option>     
        <Option value = "Quirima">Quirima</Option>
        <Option valeu = "Moxico">Moxico</Option>
       <Option value = "Camanongue">Camanongue</Option>
       <Option  value = "Léua">Léua</Option>
        <Option value = "Cameia">Cameia</Option>
        <Option value = "Luau">Luau</Option>
        <Option value = "Lucano">Lucano</Option>
        <Option value = "Alto_Zambeze">Alto Zambeze</Option>
        <Option value = "Luchazes">Luchazes</Option>
        <Option value = "Bundas">Bundas</Option>
        <Option value = "Namibe">Namibe</Option>
        <Option value = " Camacuio">Camacuio</Option>
        <Option value = "Bibala">Bibala</Option>
        <Option value = "Virei">Virei</Option>
     <Option value = "Tombwa">Tombwa</Option>
        <Option value = " Zombo">Zombo</Option>
    <Option valeu = "Quimbele">Quimbele</Option>
        <Option value= "Damba">Damba</Option>
        <Option value = " Mucaba">Mucaba</Option>
        <Option value = " Macocola">Macocola</Option> 
        <Option value= "Bembe">Bembe</Option>
       < Option value = " Songo">Songo</Option>
        <Option value = "Buengas">Buengas</Option>
        <Option value = "Sanza Pombo">Sanza Pombo</Option>
        <Option value = " Ambuíla"> Ambuíla</Option>
       <Option value =  "Uíge">Uíge</Option>
       <Option value= "Negage">Negage</Option>         
        <Option value="Puri">Puri</Option>
         <Option value = "Alto_Cauale">Alto Cauale</Option>
        <Option valeu="Quitexe">Quitexe</Option> 
        <Option value=" M_Banza_Kongo">M Banza Kongo</Option>
        <Option value =" Soyo"> Soyo</Option>
  <Option value =" N_Zeto">N Zeto</Option>
    <Option valeu="Cuimba">Cuimba</Option>
    <Option valeu=" Noqui">Noqui</Option>
    <Option valeu="  Tomboco ">Tomboco </Option>
    <Option valeu="Cazenga">Cazenga</Option>
    <Option valeu="Belas">Belas</Option>
    <Option valeu="Cacuaco">Cacuaco</Option>
    <Option valeu="Icolo_e_Bengo">Icolo e Bengo</Option>
    <Option valeu=" Quiçama">Quiçama</Option>
    <Option valeu="  Viana">Viana</Option>
   <Option valeu="Luanda">Luanda</Option>
    <Option valeu="Talatona">Talatona</Option>
    <Option valeu="Kilamba_Kiaxi">Kilamba-Kiaxi"</Option>
                        
                    </Select>

                        
                   
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
                      Os pagamentos são efectuados atraves da carteira virtual kamba <a href="https://m.usekamba.com/convite/86C210"> Clique aqui para baixar o App Kamba</a>  
                    </Agradecimento>

                    <Button onClick ={handelClickUser} >CRIAR CONTA </Button> <ButtonCon> <Link style={{textDecoration:"none", color:"#fff", fontSize:"12px"}} to="/">VOLTAR A PAGINA INICIAL</Link> </ButtonCon>
                    </Form>
            </Wrapper>

            <Wrapper>
                <Titulo>CONTA DE COMERCIANTE</Titulo>
                <Form>
                    <Imput name ="nomeLoja" placeholder = "Nome da empresa/ Estabelecimento comercial" onChange={handelChangeEstabelecimento} required/>
                    <Imput name = "gerenteLoja" placeholder = "Nome do dono /Gerente" onChange={handelChangeEstabelecimento} required/>
                    <Imput name="nifLoja" placeholder = "Numero de Identificacao fiscal" onChange={handelChangeEstabelecimento} required/>
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
                    <Select name ="municipio" onChange={handelChangeEstabelecimento} required>
                        <Option disable>
                            Municipio
                        </Option>
        <Option value = "Dande">Dande</Option>
        <Option value = "Ambriz">Ambriz</Option>
        <Option value = "Icolo_e_Bengo">Icolo e Bengo</Option>
        <Option value= " Muxima">Muxima</Option>
        <Option value = "Nambuangongo">Nambuangongo</Option>
        <Option value = "Lobito">Lobito</Option>
       <Option value = "Bocoio">Bocoio</Option>
        <Option value = " Balombo">Balombo</Option>
        <Option value = "Ganda">Ganda</Option>
        <Option value = "Cubal">Cubal</Option>
        <Option value = "Caiambambo">Caiambambo</Option>
        <Option value ="Benguela">Benguela</Option>
        <Option value = "Baía_Farta">Baía Farta</Option>
        <Option value = "Chongoroi">Chongoroi</Option>
        <Option value = "Kuito">Kuito</Option>
        <Option value = "Andulo">Andulo</Option>
        <Option value = "Nharea">Nharea</Option>
        <Option value = "Cuemba">Cuemba</Option>
        <Option value = "Cunhinga">Cunhing</Option>
        <Option value ="Catabola">Catabola</Option>
        <Option value = "Camacupa">Camacupa</Option>
        <Option value = "Chinguar">Chinguar</Option>
        <Option value = "Chitembo">Chitembo</Option>
        <Option value = " Cabinda">Cabinda</Option>
       <Option value= "Cacongo">Cacongo</Option>
        <Option value = " Buco_Zau">Buco-Zau</Option>
        <Option value = "Belize">Belize</Option>
        <Option value = "Menongue">Menongue</Option>
        <Option value = "Cuito_Cuanavale">Cuito Cuanavale</Option>
        <Option value = "Cuchi">Cuchi</Option>
        <Option value =" Cuangar"> Cuangar</Option>
        <Option value = "Longa">Longa</Option>
        <Option value = "Mavinga">Mavinga</Option>
        <Option value = " Calai">Calai</Option>
        <Option value = "Dirico">Dirico</Option>
        <Option value = "Rivungo">Rivungo</Option>
        <Option value = "Cuanhama">Cuanhama</Option>
        <Option value = "Ombadja">Ombadja</Option>
        <Option value = "Cuvelai">Cuvelai</Option>
        <Option value = "Curoca">Curoca</Option>
        <Option value = "Cahama">Cahama</Option>
        <Option value = "Namacunde">Namacunde</Option>
        <Option value = "Huambo">Huambo</Option>
        <Option value = " Londuimbale"> Londuimbale</Option>
        <Option value = " Bailundo">Bailundo</Option>
        <Option value = "Mungo">Mungo</Option>
        <Option value = "Tchindjenje">Tchindjenje</Option>
        <Option value = "Ucuma">Ucuma</Option>
        <Option value = " Ekunha">Ekunha</Option>
        <Option value = "Tchicala_Tcholoanga">Tchicala-Tcholoanga</Option>
        <Option value = "Catchiungo">Catchiungo</Option>
        <Option value = "Longongo">Longongo</Option>
    <Option value = "Caála">Caála</Option>
        <Option value = " Quilengues"> Quilengues</Option>
        <Option value = "Lubango">Lubango</Option>
        <Option value = "Humpata">Humpata</Option>
        <Option value = "Chibia">Chibia</Option>
        <Option value = " Chiange">Chiange</Option>
        <Option value = "Quipungo">Quipungo</Option>
        <Option value = "Caluquembe">Caluquembe</Option>
        <Option value  = "Caconda">Caconda</Option>
        <Option value = "Chicomba">Chicomba</Option>
        <Option value= " Matala">Matala</Option>
        <Option value= " Jamba">Jamba</Option>
        <Option value = "Chipindo">Chipindo</Option>
        <Option value = " Kuvango"> Kuvango</Option>
        <Option value = "Sumbe">Sumbe</Option>
        <Option value = " Porto_Amboim">Porto_Amboim</Option>
        <Option value = "Quibala">Quibala</Option>
        <Option value = " Libolo">Libolo</Option>
    <Option value = "Mussende">Mussende</Option>   
        <Option value = "Amboim">Amboim</Option>
        <Option value = " Ebo">Ebo</Option>
       <Option value = " Quilenda">Quilenda</Option>
        <Option value= "Conda">Conda</Option>
        <Option value= "Waku_Kungo">Waku_Kungo</Option>
        <Option value = " Seles">Seles</Option>
        <Option value = " Cassongue">Cassongue</Option>
      <Option value = "Cazengo">Cazengo</Option>
        <Option value = " Lucala"> Lucala</Option>
        <Option value = "Ambaca">Ambaca</Option>
        <Option value= " Golungo_Alto">Golungo Alto</Option>
       <Option value = "Dembos">Dembos</Option>
        <Option value= "Bula_Atumba">Bula Atumba</Option>
        <Option value = "Cambambe">Cambambe</Option>
        <Option value="Quiculungo">Quiculungo</Option>
        <Option value = "Bolongongo">Bolongongo</Option>
    <Option value =  "Banga">Banga</Option>
        <Option value = "Samba_Cajú">Samba Cajú </Option> 
        <Option value = "Gonguembo" >Gonguembo</Option>
        <Option value = "Pango Alúquem">Pango Alúquem</Option>
        <Option value = "Luanda" >Luanda</Option>
        <Option value = " Tchitato">Tchitato</Option> 
        <Option value = "Cambulo">Cambulo</Option>
        <Option value = "Chitato">Chitato</Option>
        <Option value  = "Cuilo">Cuilo</Option>
        <Option valeu = "Caungula">Caungula</Option>
    <Option value = "Cuango">Cuango</Option>
        <Option value = "Lubalo">Lubalo</Option> 
     <Option value = "Capenda_Camulemba">Capenda Camulemba</Option>
        <Option value = "Xá_Muteba">Xá Muteba</Option> 
        <Option value = " Saurimo">Saurimo</Option>
        <Option value = " Dala"> Dala</Option>
        <Option value = " Muconda"> Muconda</Option> 
        <Option value = " Cacolo">Cacolo</Option>
        <Option value= " Massango">Massango</Option>
        <Option value= "Marimba">Marimba</Option> 
        <Option value=" Calandula">Calandula</Option> 
       <Option value = "Caombo">Caombo</Option>
       <Option value= "Cunda_Dia_Baza">Cunda-Dia-Baza</Option>
       <Option value= "Cacuzo">Cacuzo</Option>
        <Option value = "Cuaba_Nzogo">Cuaba Nzogo</Option>
        <Option value = "Quela">Quela</Option>
        <Option value = "Malanje">Malanje</Option>
        <Option value= "Mucari">Mucari</Option>
       <Option value = "Cangandala">Cangandala</Option>
        <Option value = "Cambundi_Catembo">Cambundi-Catembo</Option>
       <Option  value = "Luquembo">Luquembo</Option>     
        <Option value = "Quirima">Quirima</Option>
        <Option valeu = "Moxico">Moxico</Option>
       <Option value = "Camanongue">Camanongue</Option>
       <Option  value = "Léua">Léua</Option>
        <Option value = "Cameia">Cameia</Option>
        <Option value = "Luau">Luau</Option>
        <Option value = "Lucano">Lucano</Option>
        <Option value = "Alto_Zambeze">Alto Zambeze</Option>
        <Option value = "Luchazes">Luchazes</Option>
        <Option value = "Bundas">Bundas</Option>
        <Option value = "Namibe">Namibe</Option>
        <Option value = " Camacuio">Camacuio</Option>
        <Option value = "Bibala">Bibala</Option>
        <Option value = "Virei">Virei</Option>
     <Option value = "Tombwa">Tombwa</Option>
        <Option value = " Zombo">Zombo</Option>
    <Option valeu = "Quimbele">Quimbele</Option>
        <Option value= "Damba">Damba</Option>
        <Option value = " Mucaba">Mucaba</Option>
        <Option value = " Macocola">Macocola</Option> 
        <Option value= "Bembe">Bembe</Option>
       < Option value = " Songo">Songo</Option>
        <Option value = "Buengas">Buengas</Option>
        <Option value = "Sanza Pombo">Sanza Pombo</Option>
        <Option value = " Ambuíla"> Ambuíla</Option>
       <Option value =  "Uíge">Uíge</Option>
       <Option value= "Negage">Negage</Option>         
        <Option value="Puri">Puri</Option>
         <Option value = "Alto_Cauale">Alto Cauale</Option>
        <Option valeu="Quitexe">Quitexe</Option> 
        <Option value=" M_Banza_Kongo">M Banza Kongo</Option>
        <Option value =" Soyo"> Soyo</Option>
  <Option value =" N_Zeto">N Zeto</Option>
    <Option valeu="Cuimba">Cuimba</Option>
    <Option valeu=" Noqui">Noqui</Option>
    <Option valeu="  Tomboco ">Tomboco </Option>
    <Option valeu="Cazenga">Cazenga</Option>
    <Option valeu="Belas">Belas</Option>
    <Option valeu="Cacuaco">Cacuaco</Option>
    <Option valeu="Icolo_e_Bengo">Icolo e Bengo</Option>
    <Option valeu=" Quiçama">Quiçama</Option>
    <Option valeu="  Viana">Viana</Option>
   <Option valeu="Luanda">Luanda</Option>
    <Option valeu="Talatona">Talatona</Option>
    <Option valeu="Kilamba_Kiaxi">Kilamba-Kiaxi"</Option>
                        
                    </Select>

                    <Selecta name="actuacao" onChange={handelChangeEstabelecimento} required>
                        <Option disable>
                   Tipo de Negocio
                        </Option>
                        <Option valeu="Super_mercado">
                     Super mercado
                        </Option>
                        <Option valeu="Construção">
                        Venda de material de construção
                        </Option>
                        <Option valeu="Electicidade">
                        Venda de equipamentos electricos
                        </Option>
                        <Option valeu="Informatica">
                        Venda de equipamentos Informaticos
                        </Option>
                        <Option valeu="Informatica_e_reparação">
                        Venda de equipamentos Informaticos\reparção de computadores
                        </Option>
                        <Option valeu="Casa_de_peças_de_carros">
                        Casa de peças de automoveis 
                        </Option>
                        <Option valeu="Casa_de_peças_de_motos">
                        Casa de peças de motos
                        </Option>
                        <Option valeu="Farmacia">
                        Farmacia 
                        </Option>
                        <Option valeu="Fast_food">
                        Fast-Food 
                        </Option>
                        <Option valeu="Restaurante">
                        Restaurante 
                        </Option>
                        <Option valeu="Livraria">
                        Livraria 
                        </Option>
                        <Option valeu="Venda_a_groço">
                        Venda a Groço 
                        </Option>
                        <Option valeu="Calçados">
                        Venda de Calçados 
                        </Option>
                        <Option valeu="Butique">
                        Butique 
                        </Option>
                        <Option valeu="Agricultura">
                        Venda de inputes agricola
                        </Option>
                        <Option valeu="Fazenda">
                        Fazenda
                        </Option>
                        <Option valeu="Diverços">
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
                     Os pagamentos são efectuados atraves da carteira virtual kamba <a href="https://m.usekamba.com/convite/86C210"> Clique aqui para baixar o App Kamba</a>   
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
