
let myState={
    generatedZebraCodeInstructions:[]
}



export function generatedZebraCodeReducer(state=myState,action){
    switch (action.type) {
        case "GENERATED_ZEBRA_CODE_FROM_TEXT":
            const elementId = state.generatedZebraCodeInstructions.findIndex(el=>el.textElementId==action.payload.textElementId)   
            const notFound=-1;
            if(elementId!=notFound){
                const updatedObject = {
                    ...state.generatedZebraCodeInstructions[elementId],
                    zebraCode:action.payload.zebraCode
                }

                const updatedCode = [
                    ...state.generatedZebraCodeInstructions.slice(0,elementId),
                    updatedObject,
                    ...state.generatedZebraCodeInstructions.slice(elementId+1)
                ]

                return {
                    ...state,generatedZebraCodeInstructions:updatedCode
                }
            }else{
                    const newObject = {
                        textElementId:action.payload.textElementId,
                        zebraCode:action.payload.zebraCode
                    }
                    const updatedCode=[
                        ...state.generatedZebraCodeInstructions,newObject,
                       
                    ]

                    return {
                        ...state,generatedZebraCodeInstructions:updatedCode
                    }
            }


        default:
            return state;
    }
    
}