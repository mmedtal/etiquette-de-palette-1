import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useTextConverterToZebraCode(textElementId,xPosition,yPosition,data){

    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    const [fieldData,setFieldData]    =useState("^FD")


    useEffect(()=>{
        setFieldOrigin("^FO"+xPosition+","+yPosition)
    },[xPosition,yPosition])

    useEffect(()=>{
        setFieldData("^FD"+data+"^FS")
    },[data])


    useEffect(()=>{
        dispatch({type:"GENERATED_ZEBRA_CODE_FROM_TEXT",payload:{textElementId:textElementId,zebraCode:fieldOrigin+fieldData}})
    },[fieldOrigin,fieldData])



    return [fieldOrigin,fieldData]
}