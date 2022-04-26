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
     console.log(erro)
  }
}


export const novoUsuario = async (usuario)=>{
  try{
    const dados = {pontos :10, produtosVendidos:0}
    if(usuario.id){
     await publicRequest.post("/autenticacao/registro/usuario", usuario);
     await userRequest.put(`/users/${usuario.id}`, dados) 
     alert("Cadastro feito com sucesso!")
    }else{
        await publicRequest.post("/autenticacao/registro/usuario", usuario);
        alert("Cadastro feito com sucesso!")
    }
  }catch(erro){
    alert("Erro ao cadastrar  já existe um cadastro feito com estes dados!! ",+erro)
  }
}


export const updateUsuario = async ( usuario, _id)=>{

  try{
 await userRequest.put(`/users/${_id}`, usuario)

  }catch(erro){
    alert("Erro ao Actualizar !! ",+erro)
  }
}



//estabelecimento

export const novoEstabelecimento = async ( estabelecimento)=>{
try{
await publicRequest.post("/autenticacao/registro/estabelecimento", estabelecimento)
  alert("Cadastro feito com sucesso!")
}catch(erro){
  alert("Erro ao cadastrar Já existe um cadastro feitos com estes dados !! ",+erro)
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