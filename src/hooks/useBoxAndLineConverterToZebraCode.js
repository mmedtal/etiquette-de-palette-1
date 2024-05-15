import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export default function useBoxAndLineConverterToZebraCode
(elementId,xPosition,yPosition,width,height,angle,submitZebraCode,epaisseur){
   
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
        setLineDensity(epaisseur)
    },[epaisseur])

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
            //setLineDensity(width)
            width=0
            
        }
        if(angle==0){
            //setLineHeight(0)
            //setLineDensity(height)
            height=0
        }
        setKeyCommand("^GB"+width+","+height+","+lineDensity+"^FS")
    },[width,height])

    function handleDispatch(){
        //console.log("height : ",height)
        //console.log("width : ",width)

        /*there is a gotcha in here, even if it's a horizontal line the height is not 0 but 1
        see PletteWorkZone code : height={absDeltaX>absDeltaY?1:absDeltaY} and width={absDeltaX>absDeltaY?absDeltaX:1}
        in this condition i want to not insert a dot which is either height or width is 0
        */
        if(width==0 || height==0){
            return
        }else{
            dispatch({type:"GENERATED_ZEBRA_CODE",
            payload:{elementId:elementId,zebraCode:fieldOrigin+keyCommand}})  
        }
         
    }

    /*
    useEffect(()=>{
        handleDispatch()
    },[fieldOrigin,])
    */
   
    // new code dispatch on edit mode 
    
    useEffect(()=>{
        //if(submitZebraCode===true){
            if(width==0 && height==0){
                return
            }else{
                handleDispatch()
            }
       
    },[keyCommand,fieldOrigin])
    //*/

    return [fieldOrigin,keyCommand,lineDensity]
}