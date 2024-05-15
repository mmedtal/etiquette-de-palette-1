import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useTextConverterToZebraCode(elementId,xPosition,yPosition,fontSize,data,editMode){
   
    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    const [fieldData,setFieldData]    =useState("^FD")

    
    const [zebraFontSize,setZebraFontSize] =useState("^CF0,")

    useEffect(()=>{
       
        setZebraFontSize("^CFA,"+parseInt(fontSize+14))
    },[fontSize])

    useEffect(()=>{
        setFieldOrigin("^FO"+xPosition+","+yPosition)
    },[xPosition,yPosition])

    useEffect(()=>{
        setFieldData("^FD"+data+"^FS")
    },[data])

    function handleDispatch(){
        if(data.length==0){
            dispatch({type:"REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION",payload:{elementId:elementId}})
            return
        }

        if(data==" " || data=="" || data==undefined){
            return
        }else{
            dispatch({type:"GENERATED_ZEBRA_CODE",payload:{elementId:elementId,zebraCode:zebraFontSize+fieldOrigin+fieldData}})   
        }
    }

    useEffect(()=>{
        if(editMode===false){
            handleDispatch()
        }
    },[editMode])


    return [fieldOrigin,fieldData,zebraFontSize]
}