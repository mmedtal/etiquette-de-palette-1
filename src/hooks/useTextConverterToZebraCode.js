import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useTextConverterToZebraCode(textElementId,xPosition,yPosition,fontSize,data){
   
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
        if(data==" " || data=="" || data==undefined){
            return
        }else{
          
            dispatch({type:"GENERATED_ZEBRA_CODE_FROM_TEXT",payload:{textElementId:textElementId,zebraCode:zebraFontSize+fieldOrigin+fieldData}})   
        }
    }

    useEffect(()=>{
        handleDispatch()
    },[fieldOrigin,fieldData,zebraFontSize])



    return [fieldOrigin,fieldData,zebraFontSize]
}