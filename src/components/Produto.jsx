
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {addUsuario} from  "./../redux/apiCalls"
import {actPontos} from "./../redux/apiCalls"
import { mobile } from '../responsive';
import Swal from 'sweetalert2'


const Text = styled.h6 `
display:flex ;
color:"#042940";
font-weight:bold;
font-size:15px ;
size:200px ;
font-family: 'Titan One', cursive;
/*
font-family: 'Corinthia', cursive;
font-family: 'Exo', sans-serif;
font-family: 'Six Caps', sans-serif;

*/

${mobile({  fontSize:"10px" })}
`

const TextLoja = styled.h5`

top:0px;
margin-top:0px;
color:"#042940";
font-weight:border;
font-size:16px ;
size:20px;
font-family: 'Titan One', cursive;
${mobile({  fontSize:"12px" })}
`

const Preco = styled.h6`
color:"#042940";
font-weight:bolder;
font-size:12px ;
size:20px ;
font-family: 'Titan One', cursive;
margin-left:10px ;
${mobile({  fontSize:"10px" })}
`


const Info = styled.div`
width: 100%;
height:70px ;
padding:20px ;
position:absolute ;
margin-top: 254px;

display: flex;
border-radius:5%;
justify-content: center;
text-align:center ;
background-color:rgb(255, 165, 0,0.7);

${mobile({  width: "295px", height:"49px" , marginTop:"130px" })}
`

const Extra = styled.div`
display:flex;
position: absolute;
  top: 5px;
  left: 5px;
padding:20px ;
width: 200px;
height:70px ;
border-radius:5% ;
background-color:rgb(255, 165, 0,0.7);
flex-direction: column ;
${mobile({  width: "120px", height:"80px" })}
`


const Container = styled.div`
text-transform: uppercase;
display:flex ;

margin-top:5px;
margin-bottom:10px;
min-width: 300px;
height: 325px;
margin:10px;
border:2px solid #ccc ;
border-radius:5px;
flex-direction:column;
position:relative ;
background-color: #f5fbfd;
position: relative;
cursor: pointer;
${mobile({  width: "80px", height:"180px" })}
/*&:hover ${Info}{
opacity: 1;
}*/
`


const ContainerLogo = styled.div`
width:100% ;
margin-top:290px ;
text-align:center ;
position: absolute; ;
${mobile({ marginTop:"135px"  })}
`




const Image = styled.img`
top:0;

width: 300px;
height: 325px;
background:cover;
border-radius:5px ;
${mobile({  width: "295px", height:" 180px" })}

`


const Icon= styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
margin: 0px  5px 0px 5px;
transition: all 0.5s ease;
&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`
const dinheiro = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'AKZ' })

const Produto = ({item}) => {
    const id_user = JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser?._id;
    const user = JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root")).user)?.currentUser
    const _id = item._id;
 




    const handleClickRecomendar = (e) =>{
        e.preventDefault()
     
if(user){
const pontos = item?.rec ;
const pontosAct = Number(pontos) + 1
const rec = {rec : pontosAct}
const ids = item?.userRec


if(ids.indexOf(id_user) === -1){
    const idList =  item?.userRec
    idList.push({id_usuario:id_user})

    const actualizarPontos = async ()=>{
        actPontos(_id, rec)
    }
    const adicionarIdUsuario = async () =>{
        addUsuario(_id, idList)
    }
    
    actualizarPontos();
    adicionarIdUsuario();

}else{
    alert("Esteproduto ja foi recomedado")
}


}else{
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}
    }
   
    return (
        
        <Container>
             <Link to ={`/produto/${item?._id}/${""}}`}> <Image src = {`${item?.imagem}`}/> </Link>

             
            <Extra>
                <Text>
                    {item?.titulo} {item?.novo === "Novo" ?  <Text style={{color:"#00A6A6", marginLeft:"10px", marginTop:"2px"}}>Novo</Text>:""} 
                </Text>  
                <Preco>{dinheiro.format(Number(item?.preco))} </Preco>
               
            </Extra>
               
            <Info>
                <Icon> <ShoppingCartOutlined/> </Icon> 
                <Icon> <Link to ={`/produto/${item?._id}/${""}}`}> <SearchOutlined/> </Link> </Icon> 
                <Icon> <FavoriteBorderOutlined onClick={handleClickRecomendar}/>{item.rec ? item?.rec : 0} </Icon>
              
            </Info>
            
            <ContainerLogo>
                <TextLoja>{item?.loja}</TextLoja> 
                </ContainerLogo>
        </Container>
       
    )
}

export default Produto
