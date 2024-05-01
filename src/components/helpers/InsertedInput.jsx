import { useEffect, useRef, useState } from "react"
import CharacterWidthCalculator from "./CharacterWidthCalculator";
import { useDispatch } from "react-redux";

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
    
    const [insertedCharacter,setInsertedCharacter] = useState("")
  
    const [pressedCharacter, setPressedCharacter] = useState("")

    

    const [inputWidth,setInputWidth] = useState(parseInt(fontSize.substring(0, 2)))

    const [cursorPosition,setCursorPosition] = useState(0)

    const dispatch = useDispatch();
    
    


    const [leftPosition,setLeftPosition] = useState(props.elementX)
    const [topPosition, setTopPosition ] = useState(props.elementY)

    const [textElementXPosition,setTextElementXPosition]=useState(0)
    const [textElementYPosition,setTextElementYPosition]=useState(0)

    function dispatchingTextElementPosition(){

        try{
        if((myInputRef.current==null)){
            return
        }
        dispatch({
            type:"MODIFIER_POSITION_X",
            payload:myInputRef.current.getBoundingClientRect().left-myInputRef.current.parentElement.getBoundingClientRect().left})
        dispatch({
            type:"MODIFIER_POSITION_Y",
            payload:myInputRef.current.getBoundingClientRect().top-myInputRef.current.parentElement.getBoundingClientRect().top})
        }catch(e){
        }
    
    
        }
    
    

    

    function detectPressedKey(e){
        let cursorPos = e.target.selectionStart
        
 
        if(e.key==" "){
            setPressedCharacter("space key");
        }
        if(cursorPos==0 && e.key=="ArrowLeft"){
            setLeftPosition(prevPosition=>prevPosition-1)
        }
        if(cursorPos==inputValue.length && e.key=="ArrowRight"){
            setLeftPosition(prevPosition=>prevPosition+1)
        }
        if(e.key=="ArrowUp"){
            setTopPosition(prevPosition=>prevPosition-1)
        }
        if(e.key=="ArrowDown"){
            setTopPosition(prevPosition=>prevPosition+1)
        }
        
    }

    
    function handleClick(e){
        setCursorPosition(e.target.selectionStart)
    }


    function handleChange(e){
        const textElement = e.target.getBoundingClientRect();
        setTextElementXPosition(textElement.left)
        setTextElementYPosition(textElement.top)

        if(e.target.value.charAt(0)===" "){

            
            console.log("inputwidth qsdqsdsq:",inputWidth)
            return
        }



        

        setInsertedCharacter(e.nativeEvent.inputType)
        if(e.nativeEvent.inputType==="deleteContentBackward"){
            setInputValue(prevInputValue=>{
                const selectionStart = e.target.selectionStart;
                const selectionEnd = e.target.selectionEnd;
              

                if(selectionStart==selectionEnd){
                 if(prevInputValue.length>0){
                     return prevInputValue.slice(0,selectionStart)+prevInputValue.slice(selectionStart+1,inputValue.length)
                 }else{
                     return prevInputValue
                 }
                }

               
            })
            return;
        }
        
        setInputValue(e.target.value)
    }

    useEffect(()=>{


        if (myInputRef.current) { 
        setZebraProgrLangXPosition(myInputRef.current.getBoundingClientRect().left-myInputRef.current.parentElement.getBoundingClientRect().left)
        setZebraProgrLangYPosition(myInputRef.current.getBoundingClientRect().top-myInputRef.current.parentElement.getBoundingClientRect().top)

        dispatchingTextElementPosition();
        }
    },[leftPosition,topPosition])

    

    useEffect(()=>{

        
      
        
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


    },[inputValue])

    const toggleToDefaultCursor = useDispatch()
    

    const [inputFocused,setInputFocused]=useState(false)

    function handleInputBlur(){

        setEditMode(false)
        setInputFocused(false)
        toggleToDefaultCursor({type:"SELECTIONNER"})
        
    }



    useEffect(() => {
        if (editMode) {

            myInputRef.current.focus();
            myInputRef.current.setSelectionRange(inputValue.length, inputValue.length);
        }
    }, [editMode]);

    const [zebraProgrLangXPosition,setZebraProgrLangXPosition]=useState(0)
    const [zebraProgrLangYPosition,setZebraProgrLangYPosition]=useState(0)
    
    
    useEffect(()=>{
         if (myInputRef.current) {
        setZebraProgrLangXPosition(myInputRef.current.getBoundingClientRect().left-myInputRef.current.parentElement.getBoundingClientRect().left)
        setZebraProgrLangYPosition(myInputRef.current.getBoundingClientRect().top-myInputRef.current.parentElement.getBoundingClientRect().top)
        dispatchingTextElementPosition();
        }  
    },[])
    

    function handleFocus(){
        setInputFocused(true)
    }


    useEffect(()=>{
        dispatchingTextElementPosition()
    },[inputFocused])

    
    return(
        <>

            {editMode&&<input 
                
                onFocus={handleFocus}
                onKeyDown={detectPressedKey}
                onClick={handleClick}
                value={inputValue}
                onBlur={handleInputBlur}
                ref={myInputRef}
                onChange={handleChange}
                autoFocus={true} 
                style={{width: `${inputWidth}px`,position: "absolute",backgroundColor:"transparent",
                        left:leftPosition,top:topPosition,border:"1px solid black",outline:"none",
                        fontSize}}
                maxLength={inputValue.length >=1 ?inputValue.length+1:1}/>}
            {editMode&&<CharacterWidthCalculator fontSize={fontSize} character={inputValue[inputValue.length-1]} 
                    getCharachterWidthFromCharacterWidthCalculator={getCharachterWidthFromCharacterWidthCalculator}/>}


        {!editMode&&<div onClick={()=>setEditMode(true)}  
                        style={{position: "absolute",whiteSpace:"pre-wrap",
                        left:leftPosition,top:topPosition,border:"transparent",outline:"none",
                        fontSize,cursor:"text"}}>
            {inputValue}
        </div>}
        </>
    )
    
}