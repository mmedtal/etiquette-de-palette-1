import { text } from "@fortawesome/fontawesome-svg-core"
import { TextField } from "@mui/material"

let myState={
    whichHeaderButtonIsCliqued:null,
    whatToInsertOnScreen:null,
    cursorAppearance:"auto"
}


export function headerClickReducer(state=myState,action){
    
    switch(action.type){
        case "SELECTIONNER":
            //console.log("i enter   csdfqsdfj")
            return {...state,whichHeaderButtonIsCliqued:"selectionner",whatToInsertOnScreen:null,cursorAppearance:"auto"}
        
        case "INSERER_TEXTE":
            return {...state, whichHeaderButtonIsCliqued:"inserer_texte",cursorAppearance:"text",
                    whatToInsertOnScreen:<TextField variant="standard"/>}
        
        case "DESSINER_FORME":
            return {...state,whichHeaderButtonIsCliqued:"dessiner_forme",cursorAppearance:"crosshair"}
        
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