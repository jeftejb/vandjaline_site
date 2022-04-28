import axios from 'axios';

/*
if(localStorage.getItem("persist:root")!== null){
    var TOKEN =  current?.acessoToken
   }else{
       TOKEN =" "   
   };
   */
const TOKEN =  localStorage.getItem("persist:root")?.user?.currentUser?.acessoToken ;
const BASE_URL = "https://vandjaline-f.herokuapp.com/api/" // "http://localhost:8080/api/" ;
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});
