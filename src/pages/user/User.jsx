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
import { publicRequest, userRequest } from "./../../requesteMetodos";
import { updateUsuario } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { logaut } from './../../redux/userRedux'
import Rodape from "../../components/Rodape";
import dotenv from "dotenv";
import copy from "copy-to-clipboard"
import Swal from "sweetalert2";

//import {confirmarEmailCadastro} from "./../../data" 



const  User = ()=> {
  //const result = useSelector((state)=>state.user.currentUser)
  const location = useLocation()
   const  dispatch = useDispatch()
  const [dados, setUser] = useState([]);
  const id_user = location?.pathname.split("/")[2] 
  const [updateDados , getUpdateDados] = useState();
  const [dadosInter , getDadosInter] = useState();
  const [dadosEntre , getDadosEntre] = useState();
  const [pagamento, getPagamento] = useState();
  const [pagamentoDados, getPagamentoDados] = useState([]);
  const imagem = "https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fkindpng_786207.png?alt=media&token=a59d158e-d6b7-459c-b760-002177d9f886"

dotenv.config();  

  useEffect(()=>{

    const getUser = async ()=>{
      const result =  await publicRequest.get("/users/"+id_user)
     setUser(result.data)
    }
    const getUserPagamentos = async ()=>{
      const result =  await userRequest.get("/pagamentos/data/"+id_user)
      getPagamentoDados(result.data)
    }
    getUser()
    getUserPagamentos()
 
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


  const handelChangeEntre = (e)=>{
    getDadosEntre((prev)=>{
      return {...prev , [e.target.name]:e.target.value}
    })
      }
    

      const handelEntregador = (e)=>{
        e.preventDefault();

        Swal.fire({
          title: 'Olá caro entregador!',
          text: ' Este serviço encontra-se em construção de momento, mas dentro em breve estará pronto!!',
          icon: 'info',
          confirmButtonText: 'Entendi'
        })
       
      }


  const handelIntermediario = ()=>{
    
    
  
    const max = 1000000
    const  min = 50000
    const codigoInter = Math.floor(Math.random() * (max - min) + min)
    const dadosInterFinal = {...dadosInter, codigoInter:codigoInter, confirmado:false}
 
   if( dadosInter!== undefined ){
    if(dados?.intermediario !== "Pendente" && dados?.intermediario !== "Confirmado" ){
      updateUsuario( dadosInterFinal, id_user)
  
    }else{
       
      Swal.fire({
        title: 'Alerta',
        text: 'Voce já é um intermediario!',
        icon: 'info',
        confirmButtonText: 'Entendi'
      })
    
    }

  }else{  
    Swal.fire({
        title: 'Error',
        text: 'Precisas preencher os dados!',
        icon: 'error',
        confirmButtonText: 'Entendi'
      })}

  }

 
  
  
  const SairUs = ()=>{
   

    Swal.fire({
      title: 'Terminar minha sessão?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logaut())
        Swal.fire(
          'Sessão terminada!',
          '',
          'success'
        )
      }
    })


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

  const dataHoje = new Date();
  const diaHoje = Number(dataHoje.getDate())
  const data  = pagamentoDados[0]?.createdAt.split("-")[2]
  const dataActual = Number(data?.split("T")[0])
         
  if(diaHoje !== dataActual){
  if(pagamento){

  
  
if(Number(pagamento.valor) <= Number(dados?.pontos)){
  const dadosIn= {id_usuario:dados?._id ,nomeUsuario:dados?.nomeCompleto, valor:pagamento?.valor, iban:dados?.iban, kamba:dados?.kamba, telefone:dados?.numeroTelefone}
 const soliPagamento = async ()=>{
    try{
         await publicRequest.post("/pagamentos/", dadosIn)
    }catch{}
  
  }

  const notifica = ()=>{
    Swal.fire({
      title: 'Tudo certo',
      text: 'Solicitação feita com sucesso!',
      icon: 'success',
      confirmButtonText: 'Entendi'
    })

  }
  const refress = ()=>{
    window.location.reload(false);
  }
  
 soliPagamento()
 notifica()
 refress()

}else{
  Swal.fire({
    title: 'Alerta',
    text: 'Solicitação invalida, não tem dinheiro suficiente!',
    icon: 'info',
    confirmButtonText: 'Entendi'
  })

}

  }else{
 
    Swal.fire({
      title: 'Alerta',
      text: 'Solicitação invalida por favor selecione o valor que pretendes retirar!',
      icon: 'info',
      confirmButtonText: 'Entendi'
    })

  }
}else{
  Swal.fire({
    title: 'Alerta',
    text: 'Atingiu o limite de saque de hoje!',
    icon: 'info',
    confirmButtonText: 'Entendi'
  })

}

}


const nadelClickEmail = (dados)=>{
  const email ={email: dados , id:id_user}
  
  try{
    const enviarEmail = async ()=>{
      await publicRequest.post(`/autenticacao/email/confirmacao`, email)
       //confirmarEmailCadastro(email);
   
     }

     const alerta = ()=>{
      Swal.fire({
        title: 'Tudo certo',
        text: 'E-mail enviado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Entendi'
      })
     }

     enviarEmail();
     alerta();

  }catch{  
    
    Swal.fire({
      title: 'Error',
      text: 'Não foi possivel enviar o email por favor tente mais tarde',
      icon: 'error',
      confirmButtonText: 'Entendi'
    })
  }
 

 

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


const funcaoCopiar = (url)=>{
const copiar  = ()=>{
  copy(url)
}
  const aviso = ()=>{
  
    Swal.fire({
      title: 'Tudo certo',
      text: 'Link copiado com sucesso',
      icon: 'success',
      confirmButtonText: 'Entendi'
    })
   
  }

  copiar ();
  aviso();
  

}

const dinheiro = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'AKZ' })

if( dados?.confirmEmail === true || dados?.confirmEmail === undefined ){

  return (
    <div>
   
     <Navbar/>
    <div className="user">
        
    
       
       <div style={{marginTop:"40px", padding:"50px" , justifyContent:"center", alignItems:"center" , fontFamily:"Titan one"}}  className="userTitleContainer">
        <h1 style={{padding:"20px"}} className="userTitle">Perfil de Usuario</h1>
        <button style={{padding:"10px 40px", borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={SairUs}>
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
              <span className="userShowUsername">{String(dados?.nomeCompleto)}</span>
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
              <span className="userShowInfoTitle">Intermediario :</span>
              <span className="userShowUserTitle">{dados?.intermediario === 'Pendente' && dados?.confirmado !== true? <Link to="/confirm">confirmar</Link>:dados?.intermediario}</span>
              
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.dataNascimento}</span>
            </div>
            <div className="userShowInfo">
              <label htmlFor="" className="userShowIcon">Sexo: </label>
              <span className="userShowInfoTitle">{dados?.sexo}</span>
            </div>

            
           
             {dados?.confirmado !== false && <div className="userShowInfo">
              <span className="userShowInfoTitle">Produtos vendidos :{dados?.produtosVendidos}</span>
            </div> 
            }
            {dados?.confirmado !== false && <div className="userShowInfo">
              <span className="userShowInfoTitle">Valor Actual :{dados?.pontos <= 0 ? dinheiro.format(0) : dinheiro.format(Number(dados?.pontos))}
              <form action="">
              { dados?.pontos >= 10 ?
              <>
                  <select name="valor" onChange={handelChangePagamento}>
                  <option >Retirar</option>
                  <option value={50} >50 Akz</option>
                 <option value={100} >100 Akz</option>
                 <option value={250} >250 Akz</option>
                
                  </select> <p>
                <button onClick={handelClikPagamento} >Solicitar</button>
                </p>
                </>
                :"Pouco dinheiro"
              }
                </form>
              <Link to={"/historico/"+dados._id}>Historico de pagamentos</Link><br/>
              <Link to={"/historico_pedidos/"+dados._id}>Historico de Pedidos</Link>
              
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
            <h5 className="linkDePartilha"><button style={{padding:"10px 40px", borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={()=>funcaoCopiar(`${process.env.REACT_APP_SITE_LINK}registro/usuario/${id_user}`)}>Convidar Amigos</button>
             <p>Para poder partihlar o link por favor primerio active a opção de intermediario para seres remunerado </p>
             </h5> 
           </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span><br/>
          <span>Por favor actualize os todos que estiverem em falta, para proteger melhor a sua conta.</span>
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
                <label>BI</label>
                <input
                  type="text"
                  placeholder={dados?.bi}
                  className="userUpdateInput"
                  name="bi"
                  onChange={handelChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>Link de pagamento da carteira digital Kamba(Recomendado)</label>
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
             
              <button style={{backgroundColor:"#00A6A6"}} onClick={handelClick} className="userUpdateButton">Actualizar</button>
            </div>
            <div className="userUpdateRight">
              
            </div>
          </form>
          {dados?.intermediario !== "Pendente" && dados?.intermediario !== "Confirmado"?
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
                  <button style={{backgroundColor:"#00A6A6", marginBottom:"15px"}} onClick={handelIntermediario} className="userUpdateButton">Ser Intermediario</button>
                </form>
                </>
                : ""}

{dados?.entregador !== "pendente" && dados?.confirmado!== "true" && dados?.entregador !== "confirmado" ?
          <>
          <form className="userUpdateRight">
              <label htmlFor="file">
              Me tornar Entregador
                </label>
                  <select name="intermediario" onChange={handelChangeEntre}>
                    <option undefined="true">Me tornar entregador</option>
                    <option value="Pendente">
                      Sim
                    </option>
                    <option value="Nao">
                      Nao
                    </option>
                  </select>
                  <button onClick={handelEntregador} style={{backgroundColor:"#00A6A6", marginBottom:"15px"}} className="userUpdateButton">Ser Entregador</button>
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

    <div style={{marginTop:"40px", padding:"50px" , justifyContent:"center", alignItems:"center" , fontFamily:"Titan one"}}  className="userTitleContainer">
        <h1 style={{padding:"20px"}} className="userTitle">Perfil de Usuario</h1>
        <button style={{padding:"10px 40px", borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={SairUs}>
          Sair
        </button>
      </div>

<div className="confirEmail">
<h1 style={{fontFamily:"Titan one"}} className="userTitle">Confirmar Email</h1>
 <span style={{fontFamily:"Titan one"}} className="userTitle">Enviamos um e-mail de confirmacao no seu e-mail, caso não tenhas recebido o e-mail por favor clique no botão confirmar e-mail obrigado.</span>
 <button style={{ borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={()=>nadelClickEmail(dados?.email)}> Confirmar e-mail </button>
 </div>

 </div>
 <Rodape/> 
 </div>
  );
}

 
}


export default User