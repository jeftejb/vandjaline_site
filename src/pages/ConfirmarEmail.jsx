import React from 'react';
import {useLocation } from "react-router-dom";
import "./confirmarEmail/user.css";
import {userRequest } from "./../requesteMetodos";
import Navbar from "./../components/Navbar";
import Rodape from "./../components/Rodape";
import { useDispatch } from 'react-redux';
import { logaut } from './../redux/userRedux'




 const ConfirmarEmail = () => {
  const location = useLocation();
  const id_user = location?.pathname.split("/")[2];
  const dispach = useDispatch()
  
const nadelClickTerminar = ()=>{

  
  const enviarEmail = async ()=>{
     await userRequest.put(`/users/${id_user}`, {confirmEmail:true})
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