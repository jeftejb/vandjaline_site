import axios from 'axios';
const TOKEN = ()=>{ 
    return localStorage.getItem("persist:root")?.user?.currentUser?.acessoToken ?
    
    JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.acessoToken 
        : {}
    }
/*
if(localStorage.getItem("persist:root")!== null){
    var TOKEN =  current?.acessoToken
   }else{
       TOKEN =" "   
   };
   */
  console.log(TOKEN())
const BASE_URL = "https://vandjaline-f.herokuapp.com/api/";
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN()!== undefined? TOKEN(): {}}`}
});
