let myControllersState={
    hauteur     :0,
    largeur     :0,
    positionX   :0,
    positionY   :0,
    epaisseur   :0,
    rotation    :0,
    paletteHauteur:0,
    paletteLargeur:0
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
                return {...state,positionX:parseInt(state.positionX)+parseInt(action.payload)}
            
            case "MODIFIER_POSITION_Y":
                return {...state,positionY:parseInt(state.positionY)+parseInt(action.payload)}
                    
            case "MODIFIER_EPAISSEUR":
                return {...state,epaisseur:parseInt(state.epaisseur)+parseInt(action.payload)}
                        
            case "MODIFIER_ROTATION":
                return {...state,rotation:parseInt(state.rotation)+parseInt(action.payload)}

            case "AFFECTER_PALETTE_HAUTEUR":
                //if(parseInt(action.payload)<=0) return
                return {...state,paletteHauteur:parseInt(action.payload)}
                //return {...state,paletteHauteur:parseInt(state.paletteHauteur)+parseInt(action.payload)}
            
                
            case "AFFECTER_PALETTE_LARGEUR":
                //console.log("paletteLargeur = ",state.paletteLargeur)
                //if(parseInt(action.payload)<=0) return
                return {...state,paletteLargeur:parseInt(action.payload)}
                //return {...state,paletteLargeur:parseInt(state.paletteLargeur)+parseInt(action.payload)}

            default:
                return state
        }
}