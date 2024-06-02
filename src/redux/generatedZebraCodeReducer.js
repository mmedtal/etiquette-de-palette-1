
let myState={
    generatedZebraCodeInstructions:[]
}

function generateZebraCode(state,action){
    
}


function removeZebraCode(state,action){
    
}

export function generatedZebraCodeReducer(state=myState,action){
    switch (action.type) {
        case "GENERATED_ZEBRA_CODE":
            //return generateZebraCode(myState,action);
            //console.log("elementId : ",action.payload.elementId)
            const elementId = state.generatedZebraCodeInstructions.findIndex(el=>el.elementId==action.payload.elementId)   
            const notFound=-1;
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
                        elementId:action.payload.elementId,
                        zebraCode:action.payload.zebraCode
                    }
                    const updatedCode=[
                        //{elementId:0,zebraCode:"^XA"},
                        ...state.generatedZebraCodeInstructions,newObject,
                        //{elementId:20,zebraCode:"^XL"},
                       
                    ]

                    return {
                        ...state,generatedZebraCodeInstructions:updatedCode
                    }
            }

        

        case "REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION" :
            const elementIdDel = state.generatedZebraCodeInstructions.findIndex(el=>el.elementId==action.payload.elementId)   
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
        
        case "GENERATED_ZEBRA_CODE_FROM_BARCODE":
            return {...state}

        default:
            return state;
    }
    
}