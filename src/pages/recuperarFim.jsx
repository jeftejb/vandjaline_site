import React, { useState } from 'react';
import "./confirmarEmail/user.css";
import Navbar from "./../components/Navbar";
import Rodape from "./../components/Rodape";
import { publicRequest } from './../requesteMetodos';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';



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
  enviarEmail().then(Swal.fire({
    title: 'Tudo certo!',
    text: 'Palavra passe alterada com sucesso',
    icon: 'success',
    confirmButtonText: 'Entendi'
  })).catch(
    Swal.fire({
      title: 'Error',
      text: 'Algo deu errado por favor tente mais tarde',
      icon: 'error',
      confirmButtonText: 'Entendi'
    })
  );

}else{
  Swal.fire({
    title: 'Error!',
    text: 'Palavra passe incompatíveis',
    icon: 'error',
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