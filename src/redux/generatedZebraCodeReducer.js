
let myState={
    generatedZebraCodeInstructions:[]
}



export function generatedZebraCodeReducer(state=myState,action){
    switch (action.type) {
        case "GENERATED_ZEBRA_CODE_FROM_TEXT":
            const elementId = state.generatedZebraCodeInstructions.findIndex(el=>el.textElementId==action.payload.textElementId)   
            const notFound=-1;
            //console.log("element id ssdqsqd",elementId);
            //if the object is found then update it
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
                        //{textElementId:0,zebraCode:"^XA"},
                        ...state.generatedZebraCodeInstructions,newObject,
                        //{textElementId:20,zebraCode:"^XL"},
                       
                    ]

                    return {
                        ...state,generatedZebraCodeInstructions:updatedCode
                    }
            }

        case "REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION" :
            const elementIdDel = state.generatedZebraCodeInstructions.findIndex(el=>el.textElementId==action.payload.textElementId)   
            const notFoundDel=-1;
            if (elementIdDel !== notFoundDel) {
                const updatedCode = state.generatedZebraCodeInstructions.filter(
                  (element, index) => index !== elementIdDel
                );
              
                return {
                  ...state,
                  generatedZebraCodeInstructions: updatedCode
                };
              }

        default:
            return state;
    }
    
}