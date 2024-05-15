import { TextField } from "@mui/material"

let myState={
    whichHeaderButtonIsCliqued:null,
    whatToInsertOnScreen:null,
    cursorAppearance:"auto",
    activeHeaderIcon:"Text" //Text so that when the page is first load, it loads with TextControls leftAside
}


export function headerClickReducer(state=myState,action){
    
    switch(action.type){
        case "SELECTIONNER":
            //console.log("i enter   csdfqsdfj")
            return {...state,whichHeaderButtonIsCliqued:"selectionner",whatToInsertOnScreen:null,cursorAppearance:"auto"}
        
        case "INSERER_TEXTE":
            return {...state, whichHeaderButtonIsCliqued:"inserer_texte",
                        // activeHeaderIcon:"inserer_texte",
                        cursorAppearance:"text",
                        whatToInsertOnScreen:<TextField variant="standard"/>}
        
                    /*
        case "DESSINER_FORME":
            return {...state,whichHeaderButtonIsCliqued:"dessiner_forme",cursorAppearance:"crosshair"}
        */
        case "DESSINER_LIGNE_FORME":
            //console.log("ligne reached frm redux store")
            return {...state,whichHeaderButtonIsCliqued:"dessiner_ligne_forme",cursorAppearance:"crosshair"}
        
        case "DESSINER_RECTANGLE_FORME":
            //console.log("rectangle reached frm redux store")
            return {...state,whichHeaderButtonIsCliqued:"dessiner_rectangle_forme",cursorAppearance:"crosshair"}


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

        //13.05.24 11:55
        case "SELECT_LINE":
            return {...state,cursorAppearance:"move"}
        //13.05.24 11:55
        case "UNSELECT_LINE":
            return {...state,cursorAppearance:"auto"}



        case "MODE_PAR_DEFAUT":
            return {...state,whichHeaderButtonIsCliqued:null}    

        default: 
            return state
    }
}