import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
/*
if(localStorage.getItem("persist:root")!== null){
    var TOKEN =  current?.acessoToken
   }else{
       TOKEN =" "   
   };
   */

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.acessoToken ;
const URL = process.env.REACT_APP_API_URL;

export const publicRequest = axios.create({
    baseURL:URL,
    
});
export const userRequest = axios.create({
    baseURL:URL,
    headers:{token:`Bearer ${TOKEN}`}
});
