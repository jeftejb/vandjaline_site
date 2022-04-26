import {css} from "styled-components"

export const mobile = (props) =>{
return css`
@media only screen and (max-width: 559px){
    ${props}
}

`
}


export const PcGrande = (props) =>{
    return css`
    @media only screen and (max-width: 1152px){
        ${props}
    }
    
    `
    }

    
export const tablet = (props) =>{
    return css`
    @media only screen and (max-width: 749px){
        ${props}
    }
    
    `
    }
    
    
 


