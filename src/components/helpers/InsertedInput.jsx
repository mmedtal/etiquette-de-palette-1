import { useEffect, useRef, useState } from "react"
import CharacterWidthCalculator from "./CharacterWidthCalculator";

export default function InsertedInput(props){



    const [editMode,setEditMode]=useState(true)

    const [inputValue,setInputValue] = useState("")
    



    const fontSize = '26px';
    const lineHeight = `${parseInt(fontSize) * 1.2}px`;
    const [characterwidth,setCharacterWidth] = useState("")
    const myInputRef =useRef(null);
    const offScreenSpanElement = useRef(null)
    
    function getCharachterWidthFromCharacterWidthCalculator(charachterWidthFromCharacterWidthCalculator){
        setCharacterWidth(charachterWidthFromCharacterWidthCalculator)
    }
    
    function handleChange(e){
        
       
        setInputValue(e.target.value)
    }



    const [inputWidth,setInputWidth] = useState(parseInt(fontSize.substring(0, 2)))
    useEffect(()=>{
        if(characterwidth==undefined || characterwidth==""){
            return
        }
        setInputWidth(parseInt(inputWidth)+parseInt(characterwidth))


    },[inputValue])

    function outOfEditMode(){
        setEditMode(false)
    }



    useEffect(() => {
        if (editMode) {
        console.log("i entered")

            myInputRef.current.focus();
            myInputRef.current.setSelectionRange(inputValue.length, inputValue.length);
        }
        console.log("chngd edit mode")
    }, [editMode]);
    return(
        <>

            {editMode&&<input
                onBlur={outOfEditMode}
                ref={myInputRef}
                onChange={handleChange}
                autoFocus={true} 
                style={{width: `${inputWidth}px`,position: "absolute",
                        left:props.elementX,top:props.elementY,border:"1px solid black",outline:"none",
                        fontSize}}
                maxLength={inputValue.length >=1 ?inputValue.length+1:1}/>}
            {editMode&&<CharacterWidthCalculator fontSize={fontSize} character={inputValue[inputValue.length-1]} 
                    getCharachterWidthFromCharacterWidthCalculator={getCharachterWidthFromCharacterWidthCalculator}/>}


        {!editMode&&<div onClick={()=>setEditMode(true)}  
                        style={{position: "absolute",
                        left:props.elementX,top:props.elementY,border:"transparent",outline:"none",
                        fontSize,cursor:"text"}}>
            {inputValue}
        </div>}
        </>
    )
    
}