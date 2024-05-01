import { useEffect, useRef, useState } from "react"
import CharacterWidthCalculator from "./CharacterWidthCalculator";
import { useDispatch } from "react-redux";

export default function InsertedInput(props){



    const [editMode,setEditMode]=useState(true)

    const [inputValue,setInputValue] = useState("")
    

    //this span element is used just to caclculate the width of a single the character
    //so that we can adjust input width dynamically.
    //const [spanElement,setSpanElement]=useState()


    const fontSize = '26px';
    const lineHeight = `${parseInt(fontSize) * 1.2}px`;
    const [characterwidth,setCharacterWidth] = useState("")
    const myInputRef =useRef(null);
    const offScreenSpanElement = useRef(null)
    
    function getCharachterWidthFromCharacterWidthCalculator(charachterWidthFromCharacterWidthCalculator){
        setCharacterWidth(charachterWidthFromCharacterWidthCalculator)
        //console.log("charachterWidthFromCharacterWidthCalculator : ",charachterWidthFromCharacterWidthCalculator)
        //return charachterWidthFromCharacterWidthCalculator;
    }
    
    const [insertedCharacter,setInsertedCharacter] = useState("")
    /*the difference here between insertedCharacter and pressedCharacter, is that the 'space' button
     for example can be pressed but not inserted */
    const [pressedCharacter, setPressedCharacter] = useState("")
    function detectPressedKey(e){
        console.log("e.key qddffa:", e.key)
        if(e.key==" "){
            //console.log("space key pressed")
            setPressedCharacter("space key");
        }
        //console.log("e.key : ",e.key)
    }

    const [inputWidth,setInputWidth] = useState(parseInt(fontSize.substring(0, 2)))

    const [cursorPosition,setCursorPosition] = useState(0)

    function handleCurosrPosition(e){
        //console.log("e.target.selectionStart :",e.target.selectionStart)
        setCursorPosition(e.target.selectionStart)
    }
    function handleChange(e){

        //if the first inserted character is space then don't type anyting
        //console.log(" maybe this is what causing inputWidth = NaN : parseInt( :',fontSize.substring(0, 2)) :",fontSize.substring(0, 2))
        if(e.target.value.charAt(0)===" "){
            //console.log("the first inserted character is space ")

            
            console.log("inputwidth qsdqsdsq:",inputWidth)
            return
        }
        //console.log("inputwidth :",inputWidth)
        //const input = myInputRef.current;
        //console.log("e.nativeEvent.inputType = ",e.nativeEvent.inputType)

        //console.log("inserted character or e.nativeEvent.inputType :",e.nativeEvent.inputType)


        //console.log(" inserted input value :",e.target.value)
        //console.log("character width :",characterwidth)
        
        //console.log("selectionStart :",e.target.selectionStart)
        //console.log("selectionEnd :",e.target.selectionEnd)

        setInsertedCharacter(e.nativeEvent.inputType)
        if(e.nativeEvent.inputType==="deleteContentBackward"){
            setInputValue(prevInputValue=>{
                const selectionStart = e.target.selectionStart;
                const selectionEnd = e.target.selectionEnd;
                /*
                if (selectionStart === selectionEnd && selectionStart > 0) {
                    return prevInputValue.slice(0, selectionStart - 1) + prevInputValue.slice(selectionEnd);
                  } else {
                    return prevInputValue;
                  }
                  */

                if(selectionStart==selectionEnd){
                 if(prevInputValue.length>0){
                     return prevInputValue.slice(0,selectionStart)+prevInputValue.slice(selectionStart+1,inputValue.length)
                 }else{
                     return prevInputValue
                 }
                }

                //la façon de supprimer une séléction marche pas encore
                /*
                if(selectionEnd>selectionStart || selectionEnd<selectionStart){
                    return prevInputValue.slice(0,selectionStart)+prevInputValue.slice(selectionStart,inputValue.length)
                }
                */
            })
            return;
        }
        /*
        const span  = offScreenSpanElement.current;
        span.style.fontSize = fontSize;
        const characterWidth = span.offsetWidth;
        setCharacterWidth(characterWidth);
        */
        setInputValue(e.target.value)
        //console.log("inputValue ",inputValue)
        //console.log("myInputRef : ",myInputRef.current.value.offsetWidth)
        //console.log("span.style.fontSize : ",offScreenSpanElement.current.offsetWidth)
    }


    //const character = inputValue[0] || 'x';

    // input width was first here originally
    //const [inputWidth,setInputWidth] = useState(parseInt(fontSize.substring(0, 2)))
    useEffect(()=>{
        //console.log("inputWidth : ", inputWidth)
        //console.log("characterwidth : ",characterwidth)
        //console.log("inputValue : ",inputValue)

        //handle width while deleting 
        
        //console.log("characterwidth : ",characterwidth)
        //console.log("inputValue.charAt(0) :",inputValue.charAt(0))
        
        /*
        if(inputValue.charAt(0)===""){
            console.log("inserted first space sdsd")
            return
        }*/
        
        if(pressedCharacter=="space key" ){
            setInputWidth(parseInt(inputWidth)+parseInt(characterwidth))
        }
        if(insertedCharacter=="deleteContentBackward"){
            setInputWidth(parseInt(inputWidth)-parseInt(characterwidth))
            return
        }
        if(characterwidth==undefined || characterwidth==""){
            return
        }
        setInputWidth(parseInt(inputWidth)+parseInt(characterwidth))
        //setCharacterWidth(getCharachterWidthFromCharacterWidthCalculator())
        //getCharachterWidthFromCharacterWidthCalculator(1)
        // console.log("inputValue.length",inputValue.length)
        // setInputWidth(characterwidth * inputValue.length)

        // const width = inputValue.split('').reduce((total, char) => {
        //     // Assuming character width is already calculated and stored in state
        //     return total + (characterwidth[char] || 0); // Use characterWidth object to get width of each character
        // }, 0);
        // setInputValue(width)

        /*
        if (typeof inputValue === 'string') {
            // Calculate the total width based on the width of each character
            const width = inputValue.split('').reduce((total, char) => {
                // Assuming character width is already calculated and stored in state
                return total + (characterwidth[char] || 0); // Use characterWidth object to get width of each character
            }, 0);
            setInputWidth(width);
        } else {
            setInputWidth(0); // Reset totalWidth if inputValue is not a string
        }*/
        /*
        if(inputValue.length==0){
            setInputWidth(0)
        }else{
            let width=0;
            for(let i =0;i<inputValue.length;i++){
                console.log("characterwidth :",characterwidth)
                const char = inputValue[i];
                width += characterwidth[char] || 0;
            }
            setInputWidth(width)
        }
        */
       //console.log("cc")
    },[inputValue])

    // function handleInputOnBlur(){
    //     myInputRef.current.style.width = `${myInputRef.current.scrollWidth}px`;
    //     console.log("myInputRef.current.scrollWidth : ",myInputRef.current.scrollWidth)
    // }
    const toggleToDefaultCursor = useDispatch()
    
    function outOfEditMode(){
        setEditMode(false)
        toggleToDefaultCursor({type:"SELECTIONNER"})
    }



    useEffect(() => {
        if (editMode) {
        //console.log("i entered")

            myInputRef.current.focus();
            // Set cursor position to the end of input text
            myInputRef.current.setSelectionRange(inputValue.length, inputValue.length);
        }
        //console.log("chngd edit mode")
    }, [editMode]);
    return(
        <>

            {editMode&&<input 
                onKeyDown={detectPressedKey}
                onClick={handleCurosrPosition}
                value={inputValue}
            // onBlur={handleInputOnBlur} 
                onBlur={outOfEditMode}
                ref={myInputRef}
                onChange={handleChange}
                autoFocus={true} 
                // width:`${Math.max(20, inputValue.length * parseInt(fontSize) - inputValue.length * parseInt(fontSize)/2.5)}px`
                // `${(character.length || 1) * inputValue.length}px`
                // ${characterwidth * inputValue.length}px`
                style={{width: `${inputWidth}px`,position: "absolute",backgroundColor:"transparent",
                        left:props.elementX,top:props.elementY,border:"1px solid black",outline:"none",
                        fontSize}}
                maxLength={inputValue.length >=1 ?inputValue.length+1:1}/>}
            {editMode&&<CharacterWidthCalculator fontSize={fontSize} character={inputValue[inputValue.length-1]} 
                    getCharachterWidthFromCharacterWidthCalculator={getCharachterWidthFromCharacterWidthCalculator}/>}
        {/* // <span ref={offScreenSpanElement} style={{ position: 'absolute', left: -9999, visibility: 'hidden', zIndex: -1 }}>

        // </span> */}

        {!editMode&&<div onClick={()=>setEditMode(true)}  
                        style={{position: "absolute",whiteSpace:"pre-wrap",
                        left:props.elementX,top:props.elementY,border:"transparent",outline:"none",
                        fontSize,cursor:"text"}}>
            {inputValue}
        </div>}
        </>
    )
    
}