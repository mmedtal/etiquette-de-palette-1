let myControllersState={
    hauteur     :0,
    largeur     :0,
    longeur     :0,
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
    tailleDePolice:0,
    niveauDeGras:300
}


export function leftAsideControllersReducer(state=myControllersState,action){
        switch(action.type){
            case "MODIFIER_HAUTEUR":

                return {...state,hauteur:parseInt(action.payload)}
            
            case "MODIFIER_LARGEUR":

                return {...state,largeur:parseInt(action.payload)}

            case "MODIFIER_LONGUEUR":
                return {...state,longeur:parseInt(action.payload)}

            case "MODIFIER_POSITION_X":
                return {...state,positionX:parseInt(action.payload)}
            
            case "MODIFIER_POSITION_Y":
                return {...state,positionY:parseInt(action.payload)}
                    
            case "MODIFIER_EPAISSEUR":
                return {...state,epaisseur:parseInt(action.payload)}
                        
            case "MODIFIER_ROTATION":
                return {...state,rotation:parseInt(action.payload)}

            case "AFFECTER_PALETTE_HAUTEUR":
                return {...state,paletteHauteur:parseInt(action.payload)}
            
                
            case "AFFECTER_PALETTE_LARGEUR":
                return {...state,paletteLargeur:parseInt(action.payload)}

            case "AFFECTER_PALETTE_RESOLUTION":
                return {...state,resolutionInDpi:parseInt(action.payload)}


            case "AFFECTER_TEXT_INPUT_CLIQUE":
                return {...state,whichTextInputIsClicked:action.payload}

            case "SET_LEFT_ASIDE_CLICKED":
                return {...state,isLeftAsideClicked:action.payload}

            case "MODIFIER_TAILLE_POLICE":
                return {...state, tailleDePolice:action.payload}

            case "MODIFIER_MISE_EN_GRAS":
                return {...state, niveauDeGras:parseInt(action.payload)}

            default:
                return state
        }
}