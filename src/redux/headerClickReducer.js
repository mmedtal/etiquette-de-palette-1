import { TextField } from "@mui/material"

let myState={
    whichHeaderButtonIsCliqued:null,
    whatToInsertOnScreen:null,
    cursorAppearance:"auto",
    activeHeaderIcon:null
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
            //console.log("action.whichHeaderIconIsActive : ",action.payload)
            //,activeHeaderIcon:action.payload.whichHeaderIconIsActive
            return {...state, whichHeaderButtonIsCliqued:"inserer_barcode",cursorAppearance:"text",}
                    //activeHeaderIcon:action.payload.whichHeaderIconIsActive}
        
        case "MODIFIER_DIMENSIONS_PALETTE":
            //console.log("modify dimensions ")
            return {...state, whichHeaderButtonIsCliqued:"modifier_dimensions_palette"}

        //
        case "ACTIVE_HEADER_ICON":
            //console.log('case "ACTIVE_HEADER_ICON" ',action.payload)
            return {...state,activeHeaderIcon:action.payload}


        case "MODE_PAR_DEFAUT":
            return {...state,whichHeaderButtonIsCliqued:null}    

        default: 
            return state
    }
}