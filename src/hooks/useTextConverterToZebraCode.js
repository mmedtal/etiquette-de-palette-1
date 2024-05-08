import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useTextConverterToZebraCode(textElementId,xPosition,yPosition,fontSize,data,editMode){
   
    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    const [fieldData,setFieldData]    =useState("^FD")

    //adding font size 07.05.24 10:30
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
            //console.log("it's empty")
            //console.log("data length zéro : ",data)
            dispatch({type:"REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION",payload:{textElementId:textElementId}})
            return
        }

        if(data==" " || data=="" || data==undefined){
            return
        }else{
            //console.log("data : ",data)
            dispatch({type:"GENERATED_ZEBRA_CODE_FROM_TEXT",payload:{textElementId:textElementId,zebraCode:zebraFontSize+fieldOrigin+fieldData}})   
        }
    }

    /*old dispatch
    useEffect(()=>{
        handleDispatch()
    },[fieldOrigin,fieldData,zebraFontSize])
    */
   
    // new code dispatch on edit mode 
    useEffect(()=>{
        if(editMode===false){
            handleDispatch()
        }
    },[editMode])


    return [fieldOrigin,fieldData,zebraFontSize]
}