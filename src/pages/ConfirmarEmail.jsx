import React from 'react';
import {useLocation } from "react-router-dom";
import "./confirmarEmail/user.css";
import {publicRequest, userRequest } from "./../requesteMetodos";
import Navbar from "./../components/Navbar";
import Rodape from "./../components/Rodape";
import { useDispatch } from 'react-redux';
import { logaut } from './../redux/userRedux'
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';




 const ConfirmarEmail = () => {
  const location = useLocation();
  const id_user = location?.pathname.split("/")[2];
  const [dado , getDado]= useState()
  const dispach = useDispatch()

  useEffect(()=>{
    const getUser  = async ()=>{
      const res = await publicRequest.get(`users/${id_user}`);
      getDado(res.data) 
    }
    getUser()
  },[id_user])
  
const nadelClickTerminar = ()=>{

  
  const enviarEmail = async ()=>{

    if(dado?.convidado !== 0 ){
    const dados = {pontos :50, produtosVendidos:0}
    const inserir = async ()=>{
     await userRequest.put(`/users/${id_user}`, {confirmEmail:true})
   
   }
     const actualizar = async ()=>{
      await publicRequest.put(`/users/${dado?.convidado}`, dados) 
    };
  
    inserir();
    actualizar();
  }else{

    const inserir = async ()=>{
      await userRequest.put(`/users/${id_user}`, {confirmEmail:true})
    }
    inserir();

  }
   
  }
  enviarEmail().catch(console.error());
  
/*
  const enviarEmail = async ()=>{
    confirmarEmailCadastro({confirmEmail:true})
  }

  enviarEmail();
  
 */


  Swal.fire({
    icon: 'success',
    title: 'Tudo certo',
    text: "Conta confirmada com sucesso ! por favor reinicie sua conta para gravar as alterações, clicando no botão 'sair' ",
    footer: '<button style={{padding:"10px 40px", borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={SairUs}>Sair</button>'
  })
}

const SairUs = ()=>{
  dispach(logaut())

}

  return (
   
<div>
<div className="user">
    
<Navbar/>

<div style={{marginTop:"200px", padding:"50px" , justifyContent:"center", alignItems:"center" , fontFamily:"Titan one"}}  className="userTitleContainer">
    <h1 style={{padding:"20px"}} className="userTitle">Ultimo passo !</h1>
    <button style={{padding:"10px 40px", borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={SairUs}>Sair</button>
  </div>

<div className="confirEmail">
<h3 style={{fontFamily:"Titan one"}} className="userTitle"> <span>Obrigado por chegares ate aqui para terminar clique em terminar.</span></h3>
<span style={{fontFamily:"Titan one"}} className="userTitle">Enviamos um e-mail de confirmacao no seu e-mail, caso não tenhas recebido o e-mail por favor clique no botão confirmar e-mail obrigado.</span>
<button style={{ borderRadius:"5px", backgroundColor:"#00A6A6"}} onClick={nadelClickTerminar}> Terminar </button>
</div>

</div>
<Rodape/> 
</div>

       
  );
}

export default  ConfirmarEmail;