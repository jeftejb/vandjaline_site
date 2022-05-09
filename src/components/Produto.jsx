
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {addUsuario} from  "./../redux/apiCalls"
import {actPontos} from "./../redux/apiCalls"


const Text = styled.h5 ` color:black;`

const Preco = styled.h5`
color:black ;
`
const Extra = styled.div`
top:0 ;
margin-top:200px ;
height: 10%;

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
flex:1;
margin-top:5px;
margin-bottom:10px;
min-width: 280px;
height: 300px;
display: flex;
text-align:center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
opacity: 1;
}
`



const Circle = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: white;
position: absolute;
margin-top:30px;

`

const Image = styled.img`
height: 50%;
z-index: 2;
border-radius:50% ;
margin-top: 30px;
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
                <Text>Nome :{item?.titulo} </Text>
                <Preco>Preç: {Number(item?.preco).toFixed(2)}Kz </Preco>
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
