import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function usePropertiesFromStore(reducer,propertyFromReduxStore,whichChildIam,defaultValue){
    
    const [property,setProperty] = useState(defaultValue)
    
    const whichTextInputIsClickedFromReduxStore = useSelector(state=>state[reducer].whichTextInputIsClicked)
    const selectedProperty = useSelector(state=>state[reducer][propertyFromReduxStore]) 

    useEffect(()=>{
        if(whichChildIam==whichTextInputIsClickedFromReduxStore){
            setProperty(selectedProperty)
        }
    },[selectedProperty])

    return [selectedProperty,property,setProperty]
}