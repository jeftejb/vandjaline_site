import React from 'react';
import {useLocation } from "react-router-dom";
import "./confirmarEmail/user.css";

import {userRequest } from "./../requesteMetodos";

import Navbar from "./../components/Navbar";

import Rodape from "./../components/Rodape";


 const ConfirmarEmail = () => {
  const location = useLocation();
  const id_user = location?.pathname.split("/")[2];
  
const nadelClickTerminar = ()=>{

  const enviarEmail = async ()=>{
     await userRequest.put(`/users/${id_user}`, {confirmEmail:true})
  }
  enviarEmail().catch(console.error());
}

  return (
    <div>
  <Navbar/>
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