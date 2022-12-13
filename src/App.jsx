import React, { useEffect, useState } from 'react';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';
import Home from './pages/Home';
import ListaDeProdutos from './pages/ListaDeProdutos';
import Produto from './pages/Produto';
import RegistroUsuario from './pages/RegistroUsuario';
import Estabelecimentos from './pages/ListaDeEstabelecimentos';
import Estabelecimento from './pages/Estabelecimento';
import Servicos from './pages/ListPrestacao';
import Fazenda from './pages/ListFazenda';
import PerfilUser from './pages/user/User';
import Confirm from './pages/Confirm';
import Sobre from './pages/Sobre/sobre';
import Confirmar from './pages/ConfirmarEmail';
import RecuperaEmail from './pages/recuperarPasseEmail';
import RecuperaEmailFim from './pages/recuperarFim';
import Pacotes from "./pages/pacotes/pacotes";
import Historico from "./pages/user/Historico";
import HistoricoPedidos from "./pages/user/HistoricoPedidos";
import CountLoja from "./pages/CountLoja";
import CountUser from "./pages/CountUSer";
import {
  BrowserRouter as Router, Route, Routes,Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';


const  App = ()=> {
  const [user,setUser] = useState({})
  const result = useSelector((state)=>state.user?.currentUser)

  


  useEffect(()=>{
    const getUser = ()=>{
     setUser(result)
    }
    getUser()
 
  }, [result])
  const confirm = useSelector((state)=>state.user?.currentUser?.confirmado);
  const confirmarEmail = useSelector((state)=>state.user?.currentUser?.confirmEmail);
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/produtos" element={<ListaDeProdutos/>}/>
          <Route exact path="/estabelecimentos" element={<Estabelecimentos/>}/>
          <Route exact path="/carrinho" element={<Carrinho/>}/>
          <Route exact path="/confirm" element={confirm === true  ? <Navigate to ={"/"}/>  :<Confirm/>}/>
          <Route exact path="/login" element = {user ? <Navigate to ={`/perfilUser/${user?._id}/${user?.codigoInter}`}/> : <Login/>}/>
          <Route exact path="/registro/:id" element={<RegistroUsuario/>}/>
          <Route exact path="/registro/usuario/:id" element={<CountUser/>}/>
          <Route exact path="/registro/comerciante/:id" element={< CountLoja/>}/>
          <Route exact path="/produtos/:categoria" element={<ListaDeProdutos/>}/>
          <Route exact path="/produto/:id/:cod" element={<Produto/>}/>
          <Route exact path="/estabelecimento/:id" element={<Estabelecimento/>}/>
          <Route exact path="/carrinho/:id" element={<Carrinho/>}/>
          <Route exact path="/sobre" element={<Sobre/>}/>
          <Route exact path="/fazendas" element={<Fazenda/>}/>
          <Route exact path="/servicos" element={<Servicos/>}/>
          <Route exact path="/recuperar/senha" element={<RecuperaEmail/>}/>
          <Route exact path="/recuperar/senha/mudar/:email" element={<RecuperaEmailFim/>}/>
          <Route exact path="/perfilUser/:i/:cod" element={ user ? <PerfilUser/> : <Navigate to ={`/login`}/> }/>
          <Route exact path="/historico/:id" element={<Historico/>}/>
          <Route exact path="/historico_pedidos/:id" element={<HistoricoPedidos/>}/>
          <Route exact path="/confirmar/:id" element={confirmarEmail === true|| result === null? <Navigate to ={'/login'}/> : <Confirmar/>}/>
          <Route exact path="/pacotes" element={<Pacotes/>} />
       
        </Routes>
    </Router>
  )
}

export default App;
