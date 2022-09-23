import React, { useState } from 'react';
import "./confirmarEmail/user.css";
import Navbar from "./../components/Navbar";
import Rodape from "./../components/Rodape";
import { publicRequest } from './../requesteMetodos';
import { useLocation } from 'react-router';



 const RecuperaEmailFim = () => {
  const location = useLocation(); 
  const [input, setInput] = useState();
  const [confirm, setConfirm] = useState();
   const email  = location.pathname.split("/")[4];

  const handelPass = (e)=>{

    setInput((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}

const handelPassConfirm = (e)=>{

    setConfirm((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}


const nadelClickTerminar = ()=>{
    if(input.password === confirm.senhaConfirm){
const dados = {...input , email : email}
  const enviarEmail = async ()=>{
     await publicRequest.put(`/users/mudar/pass/`, dados)
  }
  enviarEmail().catch(console.error());

}else{
    alert("Palavra passe Incopativeis")
}
}

  return (
    <div>
  <Navbar/>
    <div className="user">
<div className="confirEmail">
<h1>Recuperar Palavra Passe !</h1>
 <span>Por favor insere seu email.</span>
 <form action="">
 <input type="password" name="password" placeholder='Nova Palavra passe' onChange={handelPass}/>
 <input type="password" name="senhaConfirm"  placeholder='Confirmar palavra passe' onChange={handelPassConfirm}/>
 <button onClick={nadelClickTerminar} >Mudar</button>
 </form>
 </div>

    </div>
    <Rodape/> 
       </div>

       
  );
}

export default  RecuperaEmailFim;