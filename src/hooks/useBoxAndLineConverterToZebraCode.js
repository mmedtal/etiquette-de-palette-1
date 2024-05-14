import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useBoxAndLineConverterToZebraCode
(elementId,xPosition,yPosition,width,height,angle,submitZebraCode){
   
    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    const [keyCommand,setKeyCommand]    =useState("^GB")
    //const [lineHeight,setLineHeight]=useState(false)
    //const [lineWidth,setLineWidth]=useState(false)
    const [lineDensity,setLineDensity] =useState("1")
    /*
    useEffect(()=>{
       
        setZebraFontSize("^CFA,"+parseInt(fontSize+14))
    },[fontSize])
    */
    useEffect(()=>{
        setFieldOrigin("^FO"+xPosition+","+yPosition)
    },[xPosition,yPosition])
    /*
    useEffect(()=>{
        setFieldData("^FD"+data+"^FS")
    },[data])
    */
    useEffect(()=>{
        if(angle==90){
            //setLineWidth(0)
            width=0
        }
        if(angle==0){
            //setLineHeight(0)
            height=0
        }
        setKeyCommand("^GB"+width+","+height+","+lineDensity+"^FS")
    },[width,height])

    function handleDispatch(){
        dispatch({type:"GENERATED_ZEBRA_CODE",
        payload:{elementId:elementId,zebraCode:fieldOrigin+keyCommand}})   
    }

    /*
    useEffect(()=>{
        handleDispatch()
    },[fieldOrigin,])
    */
   
    // new code dispatch on edit mode 
    
    useEffect(()=>{
        //if(submitZebraCode===true){
            handleDispatch()
        //}
    },[keyCommand,fieldOrigin])
    //*/

    return [fieldOrigin,keyCommand,lineDensity]
}