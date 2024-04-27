let myControllersState={
    hauteur     :0,
    largeur     :0,
    positionX   :0,
    positionY   :0,
    epaisseur   :0,
    rotation    :0
}


export function leftAsideControllersReducer(state=myControllersState,action){
        switch(action.type){
            case "MODIFIER_HAUTEUR":
                console.log("state = ",state,"action = ",action)
                return {...state,hauteur:parseInt(state.hauteur)+parseInt(action.payload)}
            
            case "MODIFIER_LARGEUR":
                return {...state,largeur:parseInt(state.largeur)+parseInt(action.payload)}

            case "MODIFIER_POSITION_X":
                return {...state,positionX:parseInt(state.positionX)+parseInt(action.payload)}
            
            case "MODIFIER_POSITION_Y":
                return {...state,positionY:parseInt(state.positionY)+parseInt(action.payload)}
                    
            case "MODIFIER_EPAISSEUR":
                return {...state,epaisseur:parseInt(state.epaisseur)+parseInt(action.payload)}
                        
            case "MODIFIER_ROTATION":
                return {...state,rotation:parseInt(state.rotation)+parseInt(action.payload)}

            default:
                return state
        }
}