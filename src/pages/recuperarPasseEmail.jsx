import React, { useState } from 'react';

import "./confirmarEmail/user.css";

import Navbar from "./../components/Navbar";

import Rodape from "./../components/Rodape";
import { publicRequest } from './../requesteMetodos';



 const RecuperaEmail = () => {

  const [input, setInput] = useState()

  const handelEmail = (e)=>{
    setInput((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}


const nadelClickTerminar = ()=>{
const dados = input
if(dados !== undefined){
  const enviarEmail = async ()=>{

    try{
         await publicRequest.post(`/autenticacao/email/recuperacao`, dados)

         alert("Email enviado com sucesso!")
         
    }catch(erro){
console.log(erro)
    }
    
  }
  enviarEmail();
}else{
    alert("Por favor insira o seu email!")
}
 
}

  return (
    <div>
  <Navbar/>
    <div className="user">
<div className="confirEmail">
<h1>Recuperar Palavra Passe !</h1>
 <span>Por favor insere seu email.</span>
 <form>
 <input type="email" name="email" id="" placeholder='Email' onChange={handelEmail} required/>
 <button onClick={nadelClickTerminar} >Enviar</button>
 </form>
 </div>

    </div>
    <Rodape/> 
       </div>

       
  );
}

export default  RecuperaEmail;