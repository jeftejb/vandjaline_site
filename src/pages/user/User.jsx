import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import { userRequest, publicRequest } from "./../../requesteMetodos";
import { updateUsuario } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { logaut } from './../../redux/userRedux'
import Rodape from "../../components/Rodape";
import dotenv from "dotenv";
import copy from "copy-to-clipboard"
//import {confirmarEmailCadastro} from "./../../data" 



const  User = ()=> {
  //const result = useSelector((state)=>state.user.currentUser)
  const location = useLocation()
   const  dispatch = useDispatch()
  const [dados, setUser] = useState([]);
  const id_user = location?.pathname.split("/")[2] 
  const [updateDados , getUpdateDados] = useState();
  const [dadosInter , getDadosInter] = useState();
  const [pagamento, getPagamento] = useState();
  const imagem = "https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fkindpng_786207.png?alt=media&token=a59d158e-d6b7-459c-b760-002177d9f886"

dotenv.config();  

  useEffect(()=>{

    const getUser = async ()=>{
      const result =  await publicRequest.get("/users/"+id_user)
     setUser(result.data)
    }
    getUser()
 
  }, [id_user])
 
 

  const handelChange = (e)=>{
  getUpdateDados((prev)=>{
    return {...prev, [e.target.name]:e.target.value}
  })
  }
  
  const usuario = {...updateDados}

  const handelClick = ()=>{

     updateUsuario( usuario, id_user )
  }

  const handelChangeInter = (e)=>{
getDadosInter((prev)=>{
  return {...prev , [e.target.name]:e.target.value}
})
  }

  const handelIntermediario = ()=>{
  
    const max = 1000000
    const  min = 50000
    const codigoInter = Math.floor(Math.random() * (max - min) + min)
    const dadosInterFinal = {...dadosInter, codigoInter:codigoInter, confirmado:false}
 
   if( dadosInter!== undefined ){
    if(dados?.intermediario !== "Pendente" && dados?.intermediario !== "Aceite"){
      updateUsuario( dadosInterFinal, id_user)
  
    }else{
      console.log("voce ja e um intermediario")
      console.log( dadosInterFinal)
      console.log(dados?.codigoInter)
    }

  }else{alert("precisa de Preencher os dados")}

  }

 
  
  
  const SairUs = ()=>{
    dispatch(logaut())

}

//pagamento

const handelChangePagamento = (e)=>{
  e.preventDefault()
  getPagamento((prev)=>{
     return {...prev , [e.target.name]:e.target.value}
  })
}

const handelClikPagamento = (e)=>{
  e.preventDefault();
if(Number(pagamento.valor) <= Number(dados?.pontos)){
  const dadosIn= {id_usuario:dados?._id ,nomeUsuario:dados?.nomeCompleto, valor:pagamento?.valor, iban:dados?.iban, kamba:dados?.kamba, telefone:dados?.numeroTelefone}
 const soliPagamento = async ()=>{
    try{
         await userRequest.post("/pagamentos/", dadosIn)
    }catch{}
 }
 soliPagamento()
}else{
  alert("Solicitacao invalida nao tem dinheiro suficiente")
}

}


const nadelClickEmail = (dados)=>{
  const email ={email: dados , id:id_user}
  const enviarEmail = async ()=>{
   await publicRequest.post(`/autenticacao/email/confirmacao`, email)
    //confirmarEmailCadastro(email);

  }
  enviarEmail().catch(console.error());
}

/*
const nadelClickEmail = ()=>{

  try{
  const enviarEmail = async ()=>{
     await userRequest.put(`/users/${id_user}`, {confirmEmail:true})
  }
  enviarEmail().catch(console.error());
  alert("Conta confirmada com sucesso! por favor reinicie o login para continuar")
  }catch(err){
    console.log(err)
  }
}
*/


const funcaoCopiar = ()=>{
const copiar  = ()=>{
  const url  = process.env.REACT_APP_SITE_LINK+"/registro/"+id_user
  copy(url)
}
  const aviso = ()=>{
    alert("Link copiado com sucesso")
  }

  copiar ();
  aviso();
  

}

if( dados?.confirmEmail === true || dados?.confirmEmail === undefined ){

  return (
    <div>
  
    <div className="user">
        
       <Navbar/>
       
      <div className="userTitleContainer">
        <h1 className="userTitle">Perfil Usuario</h1>
        <button onClick={SairUs}>
          Sair
        </button>
      </div>
      
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={dados.imagem ? dados.imagem : imagem}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{String(dados?.nomeUsuario)}</span>
              <span className="userShowUserTitle">intermediario : {dados?.intermediario} </span>
           
  
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Sobre a Conta </span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.nomeCompleto}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Intermediario : {dados?.intermediario}</span>
              <span className="userShowUserTitle">{dados?.intermediario === 'Pendente' && dados?.confirmado !== true? <Link to="/confirm">confirmar</Link>:""}</span>
              
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.dataNascimento}</span>
            </div>
            <div className="userShowInfo">
              <label htmlFor="" className="userShowIcon">Sexo: </label>
              <span className="userShowInfoTitle">{dados?.sexo}</span>
            </div>

            <div className="userShowInfo">
            <label htmlFor="" className="userShowIcon">IBAN: </label>
              <span className="userShowInfoTitle">{dados?.iban}</span>
            </div>

           
           
             {dados?.confirmado !== false && <div className="userShowInfo">
              <span className="userShowInfoTitle">Produtos vendidos :{dados?.produtosVendidos}</span>
            </div> 
            }
            {dados?.confirmado !== false && <div className="userShowInfo">
              <span className="userShowInfoTitle">Valor Actual :{dados?.pontos < 0 ? 0 : dados?.pontos}Kz
              <form action="">
              { dados?.pontos >= 10 ?
              <>
                  <select name="valor" onChange={handelChangePagamento}>
                  <option >Retirar</option>
                  <option value={10} >10 Akz</option>
                  <option value={15} >15 Akz</option>
                 <option value={30} >30 Akz</option>
                 <option value={50} >50 Akz</option>
                 <option value={70} >70 Akz</option>
                 <option value={100} >100 Akz</option>
                  </select> <p>
                <button onClick={handelClikPagamento} >Solicitar</button>
                </p>
                </>
                :"Pouco dinheiro"
              }
                </form>
              
               
              </span>

            </div> 
            }
             
            <span className="userShowTitle">Contacto Detalhes</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.numeroTelefone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.endereco}</span>
            </div>
            
            <div className="userShowInfo">
            <h5 className="linkDePartilha"><button onClick={funcaoCopiar}>Convidar Amigos</button>
             <p>Para poder partihlar o link por favor primerio active a opção de intermediario para seres remunerado </p>
             </h5> 
           </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              
              <div className="userUpdateItem">
                <label>Nome Completo</label>
                <input
                  type="text"
                  placeholder={dados?.nomeCompleto}
                  className="userUpdateInput"
                  name="nomeCompleto"
                  onChange={handelChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Data de Nacimento</label>
                <input
                  type="date"
                  placeholder={Date(dados?.dataNascimento)}
                  className="userUpdateInput"
                  name="dataNascimento"
                  onChange={handelChange}
                />
              </div>
              
             
             
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder={dados?.endereco}
                  className="userUpdateInput"
                  name="endereco"
                  onChange={handelChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>IBAN</label>
                <input
                  type="text"
                  placeholder={dados?.iban}
                  className="userUpdateInput"
                  name="iban"
                  onChange={handelChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Link de Pagamento da Carteira Digital Kamba(recomendado)</label>
                <input
                  type="text"
                  placeholder={dados?.kamba}
                  className="userUpdateInput"
                  name="kamba"
                  onChange={handelChange}
                />
              </div>

              <div>
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                
              </div>
             
              <button onClick={handelClick} className="userUpdateButton">Actualizar</button>
            </div>
            <div className="userUpdateRight">
              
            </div>
          </form>
          {dados?.intermediario !== "Pendente" && dados?.intermediario !== "Aceite" ?
          <>
          <form className="userUpdateRight">
              <label htmlFor="file">
              Me tornar Intermediario
                </label>
                  <select name="intermediario" onChange={handelChangeInter}>
                    <option undefined="true">Me tornar intermediario</option>
                    <option value="Pendente">
                      Sim
                    </option>
                    <option value="Nao">
                      Nao
                    </option>
                  </select>
                  <button onClick={handelIntermediario} className="userUpdateButton">Ser Intermediario</button>
                </form>
                </>
                : ""}
                <span>A carteira digital "Kamba" é um aplicativo inovador 100% angolano que permite efectuar varios tipos de operações na internet como pagamentos transferencias e outros, link para fazer o download: <a href={process.env.REACT_APP_SITE_LINK_KAMBA}> Clique aqui para baixar o App</a> </span>
        </div>
      </div>

      <div className="homeWidgets">
      {dados?.confirmado === true ? <WidgetSm/>:""}
        <WidgetLg/>
      </div>
    

    </div>
    <Rodape/> 
       </div>
  );

}
else{
  return(
    <div>
    <div className="user">
        
    <Navbar/>

    <div className="userTitleContainer">
        <h1 className="userTitle">Perfil Usuario</h1>
        <button onClick={SairUs}>
          Sair
        </button>
      </div>

<div className="confirEmail">
<h1>Confirmar Email</h1>
 <span>Enviamos um email de confirmacao no seu email, caso nao receberes o email por favor clique no botao confirmar email obrigado.</span>
 <button onClick={()=>nadelClickEmail(dados?.email)} >Confirmar email</button>
 </div>

 </div>
 <Rodape/> 
 </div>
  );
}

 
}


export default User