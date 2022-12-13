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
     alert("Cadastro feito com sucesso!");
   
     refresh();

    }else{
        await publicRequest.post("/autenticacao/registro/usuario", usuario);
        alert("Cadastro feito com sucesso!")
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
    alert("Erro ao Actualizar !! ",+erro)
  }
}



//estabelecimento

export const novoEstabelecimento = async ( estabelecimento)=>{
 const dados = {email:estabelecimento.emailLoja, nomeLoja:estabelecimento.nomeLoja}
try{
await publicRequest.post("/autenticacao/registro/estabelecimento", estabelecimento)
  alert("Cadastro feito com sucesso!")
  redireciona(dados);
 refresh();
}catch(erro){
  alert("Erro ao cadastrar Já existe um cadastro feitos com estes dados !! ",+erro)
}

}



//recomedar produto actualizar

export const actPontos = async (id, rec)=>{
  try{
  await userRequest.put("/produtos/recomendacoes/"+id, rec)
  }catch(erro){
    alert("Erro ao cadastrar Já existe um cadastro feitos com estes dados !! ",+erro)
  }
  
  }

  //adicionar usuario que recomedou o produtpo

  export const addUsuario = async (id, idList)=>{
    try{
      const dados ={userRec:idList}
    await userRequest.put("/produtos/adicionar/id/"+id, dados)
      alert("Produto recomedado  com sucesso!")
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




