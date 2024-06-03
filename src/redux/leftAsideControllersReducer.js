let myControllersState={
    hauteur     :0,
    largeur     :0,
    longeur     :0,
    positionX   :0,
    positionY   :0,
    epaisseur   :0,
    rotation    :0,
    paletteHauteur:600,//en px
    paletteLargeur:700,//en px
    resolutionInDpi:150,
    leftAsideClicke:false,
    whichTextInputIsClicked:null,
    isLeftAsideClicked:false,
    tailleDePolice:0,
    niveauDeGras:300,
    screenResolutionInPpi:144,
    choosedZebraFont:"A"
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
               
                return {...state,paletteHauteur:parseFloat(action.payload)}
                
            case "AFFECTER_PALETTE_LARGEUR":
                return {...state,paletteLargeur:parseFloat(action.payload)}


            case "AFFECTER_PALETTE_RESOLUTION":
                return {...state,resolutionInDpi:parseInt(action.payload)}


            case "AFFECTER_TEXT_INPUT_CLIQUE":
                return {...state,whichTextInputIsClicked:action.payload}

            case "SET_LEFT_ASIDE_CLICKED":
                return {...state,isLeftAsideClicked:action.payload}

            case "MODIFIER_TAILLE_POLICE":
                return {...state, tailleDePolice:parseFloat(action.payload)}

            case "MODIFIER_MISE_EN_GRAS":
                return {...state, niveauDeGras:parseInt(action.payload)}
            
            case "MODIFIER_RESOLUTION_ECRAN_PPI":
                return {...state, screenResolutionInPpi:parseInt(action.payload)}
                
            case "SET_ZEBRA_FONT":
                //console.log("choosed zebra font : ",action.payload)
                return {...state, choosedZebraFont:action.payload}

            default:
                return state
        }
}