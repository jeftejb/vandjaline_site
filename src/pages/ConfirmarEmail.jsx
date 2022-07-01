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

    if(dado. idConvidado !==0 ){
    const dados = {pontos :15, produtosVendidos:0}
    const inserir = async ()=>{
     await userRequest.put(`/users/${id_user}`, {confirmEmail:true})
   
   }
     const actualizar = async ()=>{
      await publicRequest.put(`/users/${idConvidado}`, dados) 
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

  alert("Conta confirmada com sucesso ! por favor reinicie sua conta para gravar as alterações, clicando no botão 'sair' ")
}

const SairUs = ()=>{
  dispach(logaut())

}

  return (
    <div>
  <Navbar/>
  <div className='botaoSair'>
  <button  onClick={SairUs}>
          Sair
        </button>
  </div>
    <div className="user">
<div className="confirEmail">
<h1>Ultimo passo !</h1>
 <span>Obrigado por chegares ate aqui para terminar clique em terminar.</span>
 <button onClick={nadelClickTerminar} >terminar</button>
 </div>

    </div>
    <Rodape/> 
       </div>

       
  );
}

export default  ConfirmarEmail;