import "./widgetLg.css";
import {useState, useEffect} from "react"
import {userRequest} from "../../requesteMetodos"
import { useLocation } from "react-router-dom";


export default function WidgetLg() {
  const location = useLocation()
  const id = location?.pathname.split("/")[2]
  const [Orders, setOrders] = useState([])
   //const id_user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id

  useEffect(() => {
    const getUsers = async ()=> {
      try{
        const res = await userRequest.get(`/fatura/user/${id}`)
        setOrders(res.data)
      }catch{}
    }
   getUsers();
  }, [id])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };


  const eliminarPedido = (id)=>{

    const eliminar = async ()=>{
      try{
          const res = await userRequest.delete("fatura/"+id);
           console.log(res);
      }catch{}
    }

    eliminar()

  }


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Pedidos e Pagamentos</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Pedido</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Valor</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        </thead>
        {Orders.map((fatura, i)=>(
          <tbody key={i}>
        <tr className="widgetLgTr" key={fatura?._id}>
          <td className="widgetLgUser">
            <img
              src=""
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{fatura?.nomeUsuario}</span>
          </td>
          <td className="widgetLgDate">{fatura?.createdAt}</td>
          <td className="widgetLgAmount">{Number(fatura?.motante).toFixed(2)}kz</td>
          <td className="widgetLgStatus">
          {fatura?.estatosPedido ?
          <> {fatura?.estatosPedido !== "Negado" ? <> <Button  type={fatura?.estatos} /> <Button  type={`${fatura?.estatosPedido}`} />
           </>: <> <Button  type={fatura?.estatos} /> <Button  type={`${fatura?.estatosPedido}`} /> 
           <button type="button" onClick ={()=>eliminarPedido(fatura._id)}>Cancelar</button>
             </> }</> 
            : <><Button  type={fatura?.estatos} />  </>}
          </td>
        </tr>
        </tbody>
        ))}
      </table>
    </div>
  );
}
