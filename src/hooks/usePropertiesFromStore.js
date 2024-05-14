import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//dans cette hook on a useState, useSelector et useEffect
export default function usePropertiesFromStore(reducer,propertyFromReduxStore,whichChildIam,
                                                defaultValue){
    
    const [property,setProperty] = useState(defaultValue)
    
    const whichTextInputIsClickedFromReduxStore = useSelector(state=>state[reducer].whichTextInputIsClicked)
    const selectedProperty = useSelector(state=>state[reducer][propertyFromReduxStore]) 

    useEffect(()=>{
        if(whichChildIam==whichTextInputIsClickedFromReduxStore){
            //console.log("whichTextInputIsClickedFromReduxStore :",whichTextInputIsClickedFromReduxStore)
            setProperty(selectedProperty)
        }
    },[selectedProperty])



    /* on verra pours après si ça marche comme ça, càd custom hooks on mount
    useEffect(()=>{
        
    },[])
    */
    return [selectedProperty,property,setProperty]
}









