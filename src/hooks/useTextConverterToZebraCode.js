import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useTextConverterToZebraCode(elementId,xPosition,yPosition,fontSize,data,editMode){
   
    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    const [fieldData,setFieldData]    =useState("^FD")

    //adding font size 07.05.24 10:30
    const [zebraFontSize,setZebraFontSize] =useState("^CF0,")

    useEffect(()=>{
       

        //ceci est fait pour type de font A, l3bar li chdina li par défaut howa 9.86px pour 6dpmm
        console.log("font size : ",fontSize)
        setZebraFontSize("^CFA,"+parseInt(fontSize-9+9))
        //setZebraFontSize("^CFA")

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
            dispatch({type:"REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION",payload:{elementId:elementId}})
            return
        }

        if(data==" " || data=="" || data==undefined){
            return
        }else{
            //console.log("data : ",data)
            dispatch({type:"GENERATED_ZEBRA_CODE",payload:{elementId:elementId,zebraCode:zebraFontSize+fieldOrigin+fieldData}})   
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
    },[editMode,fontSize])


    return [fieldOrigin,fieldData,zebraFontSize]
}