import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useTextConverterToZebraCode(textElementIndex,xPosition,yPosition,data){

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
        //dispatch({type:"text",payload:{}})
    },[data,xPosition,yPosition])



    return [fieldOrigin,fieldData]
}