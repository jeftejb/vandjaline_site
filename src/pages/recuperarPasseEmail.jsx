import React, { useState } from 'react';
import "./confirmarEmail/user.css";
import Navbar from "./../components/Navbar";
import Rodape from "./../components/Rodape";
import { publicRequest } from './../requesteMetodos';
import Swal from 'sweetalert2';



 const RecuperaEmail = () => {

  const [input, setInput] = useState()

  const handelEmail = (e)=>{
    setInput((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}


const nadelClickTerminar = ()=>{
const dados = input
const alerta = ()=>{
  Swal.fire({
    title: 'Tudo certo!',
    text: 'E-mail enviado com sucesso ',
    icon: 'success',
    confirmButtonText: 'Entendi'
  })
}
if(dados !== undefined){
  const enviarEmail = async ()=>{

    try{
         await publicRequest.post(`/autenticacao/email/recuperacao`, dados)
          
        
         
    }catch(erro){
console.log(erro)
    }
    
  }
  enviarEmail();
  alerta()
}else{
  Swal.fire({
    title: 'Alerta!',
    text: 'Por favor informe seu e-mail ',
    icon: 'info',
    confirmButtonText: 'Entendi'
  })
}
 
}

  return (
    <div>
  <Navbar/>
    <div className="user">
<div className="confirEmail">
<h1>Recuperar Palavra Passe !</h1>
 <span style={{}}>Por favor insere seu email.</span>
 <form>
 <input type="email" name="email" id="" placeholder='Email' onChange={handelEmail} required/>
 <button style={{backgroundColor:"##00A6A6"}} onClick={nadelClickTerminar} >Enviar</button>
 </form>
 </div>

    </div>
    <Rodape/> 
       </div>

       
  );
}

export default  RecuperaEmail;