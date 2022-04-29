import "./widgetSm.css";
import { DeleteOutline, Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requesteMetodos";

export default function WidgetSm() {
  const [pro, setUsers] = useState([])

  const codigoInter = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.codigoInter
  const id = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser?._id

  useEffect(() => {
    const getUsers = async ()=> {
      try{
        const res = await userRequest.get("publicitar/"+id)
        setUsers(res.data)
      }catch{}
    }
   getUsers();
  }, [id])

  const handelClickDelite = (id)=>{
    const delitePro = async ()=> {
      try{
        await userRequest.delete("/publicitar/"+ id);
        alert("Produto deletado com sucesso") 
      }catch{}
    }
   delitePro();
  }

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Produtos Afilhados</span>
      <ul className="widgetSmList">
        {pro?.map((pro)=>(
        <li  key={pro?._id}>
          <div className="widgetSmListItem">
          <img
            src={pro?.imagem_pro}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{pro?.titulo}</span>
            <span className="widgetSmUsername">{pro?.loja}</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{pro?.preco}</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">ProV:{0}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          <form>
          <button  onClick={()=> handelClickDelite(pro?._id)} className="widgetSmButton">
            <DeleteOutline className="widgetSmIcon" />
          </button>
          </form>
          </div>
          Link : {process.env.REACT_APP_SITE_LINK}{pro?.url_pro}/{codigoInter}
         
        </li>
      
        ))}
       
      </ul>
    </div>
  );
}
