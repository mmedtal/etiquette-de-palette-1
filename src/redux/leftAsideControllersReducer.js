let myControllersState={
    hauteur     :0,
    largeur     :0,
    positionX   :0,
    positionY   :0,
    epaisseur   :0,
    rotation    :0,
    paletteHauteur:0,
    paletteLargeur:0,
    resolutionInDpi:0,
    leftAsideClicke:false,
    whichTextInputIsClicked:null,
    isLeftAsideClicked:false,
    tailleDePolice:0
}


export function leftAsideControllersReducer(state=myControllersState,action){
        switch(action.type){
            case "MODIFIER_HAUTEUR":
                //console.log("state = ",state,"action = ",action)
                // console.log("modify htr")
                return {...state,hauteur:parseInt(state.hauteur)+parseInt(action.payload)}
            
            case "MODIFIER_LARGEUR":
                // console.log("modify lrgr")
                return {...state,largeur:parseInt(state.largeur)+parseInt(action.payload)}

            case "MODIFIER_POSITION_X":
                //console.log("modifier pos x has been clicked ")
                //console.log("action : ",action)
                //return {...state,positionX:parseInt(state.positionX)+parseInt(action.payload)}
                return {...state,positionX:parseInt(action.payload)}
            
            case "MODIFIER_POSITION_Y":
                //return {...state,positionY:parseInt(state.positionY)+parseInt(action.payload)}
                return {...state,positionY:parseInt(action.payload)}
                    
            case "MODIFIER_EPAISSEUR":
                return {...state,epaisseur:parseInt(state.epaisseur)+parseInt(action.payload)}
                        
            case "MODIFIER_ROTATION":
                //console.log("rotation reached frm rdx str : ",action.payload)
                return {...state,rotation:parseInt(action.payload)}

            case "AFFECTER_PALETTE_HAUTEUR":
                //if(parseInt(action.payload)<=0) return
                return {...state,paletteHauteur:parseInt(action.payload)}
                //return {...state,paletteHauteur:parseInt(state.paletteHauteur)+parseInt(action.payload)}
            
                
            case "AFFECTER_PALETTE_LARGEUR":
                //console.log("paletteLargeur = ",state.paletteLargeur)
                //if(parseInt(action.payload)<=0) return
                return {...state,paletteLargeur:parseInt(action.payload)}
                //return {...state,paletteLargeur:parseInt(state.paletteLargeur)+parseInt(action.payload)}

            case "AFFECTER_PALETTE_RESOLUTION":
                return {...state,resolutionInDpi:parseInt(action.payload)}


            case "AFFECTER_TEXT_INPUT_CLIQUE":
                //console.log("redux the clicked child is : ",action.payload)
                return {...state,whichTextInputIsClicked:action.payload}

            case "SET_LEFT_ASIDE_CLICKED":
                //console.log("i'm reached  qsdqs")
                return {...state,isLeftAsideClicked:action.payload}

            case "MODIFIER_TAILLE_POLICE":
                //console.log("left aside reducer taille de police :",action.payload)
                return {...state, tailleDePolice:action.payload}

            default:
                return state
        }
}