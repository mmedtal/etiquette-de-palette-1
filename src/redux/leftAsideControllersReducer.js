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

/*
function valuesInPixelsConverter(screenResolutionInPpi,payload){
    const convertedValue = (screenResolutionInPpi/25.4)*payload;
    return convertedValue;
}
*/

export function leftAsideControllersReducer(state=myControllersState,action){
        switch(action.type){
            case "MODIFIER_HAUTEUR":
                //console.log("state = ",state,"action = ",action)
                // console.log("modify htr")
                return {...state,hauteur:parseInt(action.payload)}
                
                //const a = getValuesInPixels(...state.screenResolutionInPpi)
                
            

            case "MODIFIER_LARGEUR":

                //console.log("modify lrgr")
                return {...state,largeur:parseInt(action.payload)}

            case "MODIFIER_LONGUEUR":
                return {...state,longeur:parseInt(action.payload)}

            case "MODIFIER_POSITION_X":
                //console.log("modifier pos x has been clicked ")
                //console.log("action : ",action)
                //return {...state,positionX:parseInt(state.positionX)+parseInt(action.payload)}
                return {...state,positionX:parseInt(action.payload)}
            
            case "MODIFIER_POSITION_Y":
                //return {...state,positionY:parseInt(state.positionY)+parseInt(action.payload)}
                return {...state,positionY:parseInt(action.payload)}
                    
            case "MODIFIER_EPAISSEUR":
                return {...state,epaisseur:parseInt(action.payload)}
                        
            case "MODIFIER_ROTATION":
                //console.log("rotation reached frm rdx str : ",action.payload)
                return {...state,rotation:parseInt(action.payload)}

            case "AFFECTER_PALETTE_HAUTEUR":
                //if(parseInt(action.payload)<=0) return
                //return {...state,paletteHauteur:parseInt(action.payload)}
                //return {...state,paletteHauteur:parseInt(state.paletteHauteur)+parseInt(action.payload)}
                //const paletteHauteurInPixels = valuesInPixelsConverter(state.screenResolutionInPpi,action.payload)
                //console.log("plt htr frm rdx : ",action.payload)
                return {...state,paletteHauteur:parseFloat(action.payload)}
                
            case "AFFECTER_PALETTE_LARGEUR":
                //console.log("paletteLargeur = ",state.paletteLargeur)
                //if(parseInt(action.payload)<=0) return
                //console.log("largr payload : ",action.payload)
                //const paletteLargeurInPixels = valuesInPixelsConverter(state.screenResolutionInPpi,action.payload)
                //return {...state,paletteLargeur:parseInt(paletteLargeurInPixels)}
                //return {...state,paletteLargeur:(state.screenResolutionInPpi)*parseFloat(action.payload)/25.4}
                //return {...state,paletteLargeur:parseInt(state.paletteLargeur)+parseInt(action.payload)}
                return {...state,paletteLargeur:parseFloat(action.payload)}


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
                return {...state, tailleDePolice:parseFloat(action.payload)}

            case "MODIFIER_MISE_EN_GRAS":
                return {...state, niveauDeGras:parseInt(action.payload)}
            
            case "MODIFIER_RESOLUTION_ECRAN_PPI":
                //console.log("resolution ecran touched")
                return {...state, screenResolutionInPpi:parseInt(action.payload)}
                
            case "SET_ZEBRA_FONT":
                //console.log("choosed zebra font : ",action.payload)
                return {...state, choosedZebraFont:action.payload}

            default:
                return state
        }
}