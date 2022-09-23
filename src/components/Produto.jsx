
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {addUsuario} from  "./../redux/apiCalls"
import {actPontos} from "./../redux/apiCalls"
import { mobile } from '../responsive';


const Text = styled.h6 `
color:black;
font-weight:border;
font-size:13px ;
size:200px ;

`

const TextLoja = styled.h5 `
color:black;
font-weight:border;
font-size:17px ;
size:200px ;
`

const Preco = styled.h6`
color:black ;
font-weight:bolder;
font-size:12px ;
size:200px ;
`
const Extra = styled.div`
display:flex;
position: relative;
top:0 ;
margin-top:130px ;
height: 10%;
justify-content:center ;
flex-direction: column ;

`

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.3);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
display:flex ;
align-items:center ;
margin-top:5px;
margin-bottom:10px;
min-width: 210px;
height: 225px;
margin:10px;
border-radius:25px;
flex-direction:column;
justify-content: center;
background-color: #f5fbfd;
position: relative;
${mobile({  minWidth: "150px"})}
&:hover ${Info}{
opacity: 1;
}
`



const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: white;
position: absolute;


`

const Image = styled.img`
top:0;
margin-top:30px ;
width: 110px;
height: 110px;
z-index: 2;
border-radius:30% ;
position: absolute;
`


const Icon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
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
    alert("Por favor faça o login para poder recomendar este produto")
}
    }
   
    return (
        <Container>
           
            <Circle/>
            <Image src = {`${item?.imagem}`}/>
            <Extra>
            <TextLoja>{item?.loja}</TextLoja>
                <Text>{item?.titulo} {item?.novo === "Novo" ? <span style={{color:"#FA7F08"}}> Novo </span>:""} </Text>
                <Preco>{dinheiro.format(Number(item?.preco))} </Preco>
                <Text>Recomendações :{item.rec ? item?.rec : 0} </Text>
                </Extra>
            <Info>
                <Icon> <ShoppingCartOutlined/> </Icon> 
                <Icon> <Link to ={`/produto/${item?._id}/${""}}`}> <SearchOutlined/> </Link> </Icon> 
                <Icon> <FavoriteBorderOutlined onClick={handleClickRecomendar}/> </Icon>
            </Info>
            
            
        </Container>
    )
}

export default Produto
