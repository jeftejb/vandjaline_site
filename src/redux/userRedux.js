import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:"user", 
    initialState:{
        currentUser:null, 
        users:[],
        isFetching:false,
        error:false, 

        
    }, 
    reducers:{
       loginStart:(state)=>{
           state.isFetching = true;
           state.error = false
       },
       loginSucess:(state, action)=>{
        state.isFetching = false;
        state.currentUser = action.payload
       },
       loginFailer:(state)=>{
        state.isFetching = false;
        state.error = true
       },

       logaut:(state)=>{
           state.currentUser = null;
       },
       
      
    }, 
})

export const {
    loginStart, 
    loginSucess, 
    loginFailer,
  
    logaut

} = userSlice.actions; 
export default userSlice.reducer;