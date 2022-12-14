import {
    loginStart, 
    loginSucess, 
    loginFailer, 
    
} from "./userRedux"



import { 
    novoFaturaStart, 
    novoFaturaSucess,
    novoFaturaFailer,

} from "./carrinhoRedux"




import {publicRequest ,userRequest} from "../requesteMetodos"
import Swal from "sweetalert2";




const refresh = ()=>{
  window.location.reload();
}

const redireciona = (dados)=>{
  window.location.href =`/pacotes?${dados.email}?${dados.nomeLoja}`
} 


//usuario
export const loginUser = async (dispatch,user)=>{
    dispatch(loginStart()); 
    try{
        const res = await publicRequest.post("/autenticacao/login/usuario", user)
        dispatch(loginSucess(res.data))
    }catch(erro){
        dispatch(loginFailer())
    }
}

export const confirmarCodigo = async (user)=>{
 
  try{
      await userRequest.post("/autenticacao/confirm", user)
    
  }catch(erro){
    
  }
}


export const novoUsuario = async (usuario)=>{

  try{
 
    if(usuario?.id !== 0){
      const inserir = async ()=>{
        await publicRequest.post("/autenticacao/registro/usuario", usuario);
    };

    const actualizarPontos = async()=>{
      await userRequest.put(`/users/${usuario?.id}`, {pontos:15})
    }
    
    inserir();
    actualizarPontos()
    Swal.fire({
      title: 'Tudo certo!',
      text: 'Cadastro feito com sucesso',
      icon: 'success',
      confirmButtonText: 'Entendi'
    })
   
     refresh();

    }else{
        await publicRequest.post("/autenticacao/registro/usuario", usuario);
        Swal.fire({
          title: 'Tudo certo!',
          text: 'Cadastro feito com sucesso',
          icon: 'success',
          confirmButtonText: 'Entendi'
        })
        refresh();
    }
  }catch(erro){
    alert(erro)
  }
}


export const updateUsuario = async ( usuario, _id)=>{

  try{
 await userRequest.put(`/users/${_id}`, usuario)

  }catch(erro){
    Swal.fire({
      title: 'Error',
      text: 'Algo deu errado por favor tente mais tarde',
      icon: 'error',
      confirmButtonText: 'Entendi'
    })
  }
}



//estabelecimento

export const novoEstabelecimento = async ( estabelecimento)=>{
 const dados = {email:estabelecimento.emailLoja, nomeLoja:estabelecimento.nomeLoja}
try{
await publicRequest.post("/autenticacao/registro/estabelecimento", estabelecimento)
Swal.fire({
  title: 'Tudo certo!',
  text: 'Cadastro feito com sucesso',
  icon: 'success',
  confirmButtonText: 'Entendi'
})
  redireciona(dados);
 refresh();
}catch(erro){
  Swal.fire({
    title: 'Error',
    text: 'Algo deu errado por favor tente novamente',
    icon: 'error',
    confirmButtonText: 'Entendi'
  })
}

}



//recomedar produto actualizar

export const actPontos = async (id, rec)=>{
  try{
  await userRequest.put("/produtos/recomendacoes/"+id, rec)
  }catch(erro){
    Swal.fire({
      title: 'Error!',
      text: 'Algo deu errado por favor tente mais tarde',
      icon: 'error',
      confirmButtonText: 'Entendi'
    })
  }
  
  }

  //adicionar usuario que recomedou o produtpo

  export const addUsuario = async (id, idList)=>{
    try{
      const dados ={userRec:idList}
    await userRequest.put("/produtos/adicionar/id/"+id, dados)
    Swal.fire({
      title: 'Tudo certo!',
      text: 'Produto recomendado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Entendi'
    })
    }catch(erro){
      Swal.fire({
        title: 'Error',
        text: 'Algo deu errado por favor tente mais tarde',
        icon: 'error',
        confirmButtonText: 'Entendi'
      })
    }
    
    }



// carrinho /fatura 

export const novaFatura = async (dispatch, dados)=>{
    dispatch(novoFaturaStart());
  try{
     await userRequest.post("/fatura", dados)
    dispatch(novoFaturaSucess())
  }catch(erro){
    dispatch(novoFaturaFailer())
  }
}




