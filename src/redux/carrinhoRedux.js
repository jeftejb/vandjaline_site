import {createSlice} from "@reduxjs/toolkit"
import Swal from "sweetalert2";


const carrinhoSlice = createSlice({
    name:"carrinho", 
    initialState:{
        produtos:[],
        quantidade:0, 
        total:0,
        isFetching:false,
        error:false, 
    }, 
    reducers:{
        addProduto:(state,action)=>{
            if(Array.isArray(state.produtos)){
            const verifica = state.produtos.findIndex((item)=>item._id === action.payload?._id )
            if(verifica !== -1) {
                Swal.fire({
                    title: 'Alerte',
                    text: 'Este produto já existe no carrinho',
                    icon: 'info',
                    confirmButtonText: 'Entendi'
                  })
        }else{
            state.produtos.push(action.payload);
            state.quantidade += 1; 
            state.total += action.payload.preco * action.payload.quantidade; 
            Swal.fire({
                title: 'Tudo certo',
                text: 'O produto foi adicionado com sucesso na sua lista de compras!',
                icon: 'success',
                confirmButtonText: 'Entendi'
              })
        }
    }else{
        Swal.fire({
            title: 'Error',
            text: 'Houve algum erro ao adicionar o produto, por favor tente nova mente',
            icon: 'error',
            confirmButtonText: 'Entendi'
          })
    }
      
        }, 
        deleteProduto:(state, action)=>{
            
            state.isFetching = false;
            
            state.produtos.splice(
                state.produtos.findIndex((item)=>item?._id === action.payload?.id ),1
            );
        
            state.quantidade = state.quantidade <= 0 ? state.quantidade = 0 : state.quantidade -=1 ;

            state.total -= (action.payload.preco * action.payload.quantidade) ; 
         
            
        },
       
        novoFaturaStart:(state)=>{
            state.isFetching = true
            state.error = false
            },
            novoFaturaSucess:(state, action)=>{
            state.isFetching = false
            state.produtos = action.payload.produtos
            },
            novoFaturaFailer:(state)=>{
            state.isFetching = false
            state.error = true
            }, 
    }, 

    
})

export const {
    addProduto, 
    novoFaturaStart, 
    novoFaturaSucess,
    novoFaturaFailer,
    deleteProduto,
    zerar,

} = carrinhoSlice.actions; 
export default carrinhoSlice.reducer;