
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Text = styled.h5 ` color:black;`

const Preco = styled.h5`
color:black ;
`
const Extra = styled.div`
top:0 ;
margin-top:0px ;
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
margin:5px;
min-width: 350px;
height: 270px;
display: flex;
text-align:left;
justify-content: center;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
opacity: 1;
}
`



const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
margin-top:30px;

`

const Image = styled.img`
height: 70%;
z-index: 2;
border-radius:50% ;
margin-top: 40px;
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
   
    return (
        <Container>
            <Extra>
                <Text>Nome :{item?.titulo} </Text>
                <Preco>Preç: {Number(item?.preco).toFixed(2)}Kz </Preco>
                </Extra>
            <Circle/>
            <Image src = {`${item?.imagem}`}/>
            <Info>
                <Icon> <ShoppingCartOutlined/> </Icon>
            
                <Icon> <Link to ={`/produto/${item?._id}/${""}}`}> <SearchOutlined/> </Link> </Icon>
           
                <Icon> <FavoriteBorderOutlined/> </Icon>
               
                
            </Info>
            
        </Container>
    )
}

export default Produto
