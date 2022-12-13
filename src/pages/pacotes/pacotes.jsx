import React from "react";
import NavBar from "./../../components/Navbar"
import Rodape from "./../../components/Rodape"
import ElementOne from "./../../components/ElementOne"
//import {useLocation} from "react-router-dom"
import "./pacotes.css"





 const  Pacotes = ()=>{
    // const location =  useLocation()
    //const email =  window.location.href.split('?')[1] ;
    //const nomeLoja =  window.location.href.split('?')[2];



/*
const handelClick = (e)=>{
    e.preventDefault();
   window.location.href ="http://localhost:3001/login"

}
*/
    return(
     <div>
         <ElementOne/>
        <NavBar/>

        <div className="container">
            <span className="nomeLoja">Planos Vandjaline</span>
            <span className="inf">O vandjaline possui pacotes acessíveis para toda empresa que quer divulgar os seus serviços 
            e produtos. A escolha de um dos pacotes é feita depois do cadastro da empresa. </span>
            <div className="containerPacotes">
            <div className="pacote">
                <div className="circulo"><h5 style={{color:"green"}}>Disponivel</h5> </div>
                <div className="containerImagem">
                    <img className="img" alt="Serviço" src="/image/baner-1.png"/>
                </div>
                <div className="containerInfo">
                    <h3 className="titulo"> Pacote grátis  </h3>
                    <span className="preco">Kz 0/100% de Deconto</span>
                   
                    
                    <span className="descricao">
                    Este pacote permite  ao utilizador usufluir de todos os serviços que a plataforma oferece por um período determinado que servirá como um período de teste.

                    <h4>Serviços disponíveis </h4> 
                    <ul>
                        <li>Acesso a área de gerenciamento   de produtos </li>
                        <li> Gerenciamento  de pedidos  de compra</li>
                        <li>Pagamentos online</li>
                        <li>Serviço de afiliados </li>
                    </ul>
                    </span>
                </div>
           
            </div>

            <div className="pacote" >
            <div className="circulo"><h5 style={{color:"red"}}>Indisponivel</h5> </div>
                <div className="containerImagem">
                    <img className="img" alt="Serviço" src="/image/baner-1.png"/>
                </div>
                <div className="containerInfo">
                    <h3 className="titulo"> Pacote facilíta </h3>
                    <span className="preco">Indisponivel</span>
                    <span className="descricao">
                    Este pacote permite ao usuário efectuar tarefas  simples como cadastrar produtos,  editar e eliminar produtos , ou seja terá acesso a área de administração de produtos  e ao serviço de afiliados sem contar com o serviço de pagamentos online .   
                    <h4>Serviços disponíveis </h4> 
                    <ul>
                        <li>Acesso a área de gerenciamento   de produtos </li>
                     
                        <li>Serviço de afiliados </li>
                    </ul>
                    </span>
                </div>
                
            </div>

            <div className="pacote">
            <div className="circulo"><h5 style={{color:"red"}}>Indisponivel</h5> </div>
                <div className="containerImagem">
                    <img className="img" alt="Serviço" src="/image/baner-1.png"/>
                </div>
                <div className="containerInfo">
                    <h3 className="titulo">Pacote  completo</h3>
                    <span className="preco">Indisponivel </span>
                    <span className="descricao">
                    Este pacote permite ao usuário utilizar todos so serviços disponíveis na plataforma 
                   
                   
                   <h4>Serviços disponíveis </h4> 
                    <ul>
                        <li>Acesso a área de gerenciamento   de produtos </li>
                        <li> Gerenciamento  de pedidos  de compra</li>
                        <li>Pagamentos online</li>
                        <li>Serviço de afiliados </li>
                    </ul>

                    </span>

                </div>
             
            </div>

            </div>
        </div>

         <Rodape/>
     </div>
    );

}


export default Pacotes;