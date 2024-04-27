import { TextField } from "@mui/material"

let myState={
    whichHeaderButtonIsCliqued:null,
    whatToInsertOnScreen:null
}


export function headerClickReducer(state=myState,action){
    
    switch(action.type){
        case "SELECTIONNER":
            return {...state,whichHeaderButtonIsCliqued:"selectionner",whatToInsertOnScreen:null}
        
        case "INSERER_TEXTE":
            return {...state, whichHeaderButtonIsCliqued:"inserer_texte",
                    whatToInsertOnScreen:<TextField variant="standard"/>}
        
        case "DESSINER_FORME":
            return {...state,whichHeaderButtonIsCliqued:"dessiner_forme"}
        
        case "INSERER_BARCODE":
            return {...state, whichHeaderButtonIsCliqued:"inserer_barcode"}
        
        case "MODIFIER_DIMENSIONS_PALETTE":
            //console.log("modify dimensions ")
            return {...state, whichHeaderButtonIsCliqued:"modifier_dimensions_palette"}
        
        case "MODE_PAR_DEFAUT":
            return {...state,whichHeaderButtonIsCliqued:null}    

        default: 
            return state
    }
}