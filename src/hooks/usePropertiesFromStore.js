import { useState } from "react";
import { useSelector } from "react-redux";


export default function usePropertiesFromStore(reducer,propertyFromReduxStore,whichChildIam,actionToDispatchOnMount){
    
    const [property,setProperty] = useState()
    
    const whichTextInputIsClickedFromReduxStore = useSelector(state=>state[reducer].whichTextInputIsClicked)
    const {propertyFromReduxStore} = useSelector(state=>state[reducer][propertyFromReduxStore]) 

    useEffect(()=>{
        if(whichChildIam==whichTextInputIsClickedFromReduxStore){
            setProperty(propertyFromReduxStore)
        }
    },[propertyFromReduxStore])



    /* on verra pours après si ça marche comme ça, càd custom hooks
    useEffect(()=>{
        
    },[])
    */
    return [property]
}