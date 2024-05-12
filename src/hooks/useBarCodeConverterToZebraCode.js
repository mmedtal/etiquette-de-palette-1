import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useBarcodeConverterToZebraCode(textElementId,xPosition,yPosition,fontSize,data,editMode){
    
    
    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    const [fieldData,setFieldData]    =useState("^FD")


    useEffect(()=>{
        setFieldOrigin("^FO"+xPosition+","+yPosition)
    },[xPosition,yPosition])

    useEffect(()=>{
        setFieldData("^FD"+data+"^FS")
    },[data])


    function handleDispatch(){
        if(data.length==0){
            dispatch({type:"REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION",payload:{textElementId:textElementId}})
            return
        }

        if(data==" " || data=="" || data==undefined){
            return
        }else{
            dispatch({type:"GENERATED_ZEBRA_CODE_FROM_BARCODE",payload:{textElementId:textElementId,zebraCode:fieldOrigin+fieldData}})   
        }
    }

}