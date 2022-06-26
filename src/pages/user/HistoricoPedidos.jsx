


import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import { userRequest } from "./../../requesteMetodos";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DateObject from "react-date-object";
import "./user.css"

const HistoricoPedidos = ()=>{


const location  = useLocation();
const [dados, setDados] = useState([]);
const id_user = location.pathname.split("/")[2];


useEffect(()=>{

    const buscar_dados = async ()=>{
    const dados  = await userRequest.get("/fatura/his/"+id_user)
    setDados(dados.data)
    }

    buscar_dados();

}, [id_user]);

const data = (data)=>{

    const ndata =  new DateObject(data);
    return  ndata.format("DD/MM/YY hh:mm")
  }



    return(
 <div>
         <Navbar/>


         


<div className="conteudo">
<h4>Historico de pedidos</h4>
           <table className="tabela">

          <thead>
            <tr>
                <th>Produto</th>
                <th>Data</th>
                <th>Valo</th>
                <th>Stato</th>
            </tr>
          </thead>
          <tbody>
            { dados?.map((item,i)=>(
            <tr key={item._id}>
                <td><img className="im" alt="" src ={item?.produtos[0].imagem_produto}/>
                {item?.produtos[0].loja}
                </td>
                <td>{data(item?.createdAt)}</td>
                <td>{item?.produtos[0].preco}</td>
                <td>{item?.produtos[0].estatus}</td>
            </tr>
            ))
             }
          </tbody>

           </table>

           </div>
         

        <Rodape/>

        </div>
    );


}

export default HistoricoPedidos