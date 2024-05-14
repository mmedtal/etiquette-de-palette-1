import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useBarcodeConverterToZebraCode(elementId,xPosition,yPosition,
    fontSize,data,editMode){
    
    
    const dispatch = useDispatch();
    const [fieldOrigin,setFieldOrigin]=useState("^FO")
    //^B3 orientation, checkDigit, height, line, lineAbove
    //??'N' is for orientation, there is N,R,I and B
    // 'N' => no rotate, 'R' => rotate 90deg, 'B'=> rotate 270 deg, 'I' => rotate 180 deg
    //Mayeb zebra printers can't handle orientations between those above
    //here default is set to code 39 => B3
    const [keyCommand,setKeyCommand]    =useState("^B3")
    
    //this orientation is either 0deg,90deg,180deg,270deg, any other value should be 
    //converted to the close one, for instance if it's 80 then it should resolve to 90
    //orientation field takes N,R,I or B.
    const [orientation,setOrientation]=useState("N")
    
    //don't know yet the purpose of this field, so i will set it to default or 'N' for 'no'
    const [checkDigit,setCheckDigit]=useState("N")

    //this must be font size it's preliminary
    const [barcodeHeight,setBarcodeHeight]=useState(fontSize)

    //line wehter or not to include the human readable code
    const [includeHumanReadableCode,setIncludeHumanReadableCode]=useState("Y")

    //whether to include human readable code above
    const [includeHumanReadableCodeAbove,setIncludeHumanReadableCodeAbove]=useState("N")


    const [fieldData,setFieldData]    =useState("^FD")


    useEffect(()=>{
        setFieldOrigin("^FO"+xPosition+","+yPosition)
    },[xPosition,yPosition])

    /*
    useEffect(()=>{
        setFieldData("^FD"+data+"^FS")
    },[data])
    */

    function handleDispatch(){
        if(data.length==0){
            dispatch({type:"REMOVE_INSTRUCTION_UPON_ELEMENT_DELETION",payload:{elementId:elementId}})
            return
        }

        if(data==" " || data=="" || data==undefined){
            return
        }else{
            dispatch({type:"GENERATED_ZEBRA_CODE",
            payload:{elementId:elementId,
                zebraCode:fieldOrigin+keyCommand
                        +orientation+","+checkDigit+","
                        +barcodeHeight+","+includeHumanReadableCode+","
                        +includeHumanReadableCodeAbove+fieldData+data+"^FS"
                }})   
        }
    }

    useEffect(()=>{
        if(editMode===false){
            handleDispatch()
        }
    },[editMode])


    
    return [fieldOrigin,fieldData,fontSize]
}