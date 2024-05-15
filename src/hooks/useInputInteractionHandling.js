/*export default function useInputInteractionHandling(dispatch,setInputFocused,leftPosition,topPosition){
    //09.05.24 00:08
    function handleFocus(){
        
        setInputFocused(true)
        dispatch({
            type:"MODIFIER_POSITION_X",
            payload:leftPosition})
        dispatch({
            type:"MODIFIER_POSITION_Y",
            payload:topPosition})


        dispatch({type:"AFFECTER_TEXT_INPUT_CLIQUE",payload:props.whichChildIam})
        dispatch({type:"MODIFIER_TAILLE_POLICE",payload:fontSize})
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})
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



    function handleInputBlur(){
        setEditMode(false)
        setInputFocused(false)
    if(whichTextInputIsClickedFromReduxStore==props.whichChildIam){
        setInputFocused(true)
        myInputRef.current.focus();
        dispatch({type:"MODIFIER_TAILLE_POLICE",payload:fontSize})
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})
    }else{
        
    }
    toggleToDefaultCursor({type:"SELECTIONNER"})
    
    }


    function handleChange(e){
        const textElement = e.target.getBoundingClientRect();
        setTextElementXPosition(textElement.left)
        setTextElementYPosition(textElement.top)
        if(e.target.value.charAt(0)===" "){
            return
        }
        setInsertedCharacter(e.nativeEvent.inputType)
        if(e.nativeEvent.inputType==="deleteContentBackward"){
            setInputValue(prevInputValue=>{
                const selectionStart = e.target.selectionStart;
                const selectionEnd = e.target.selectionEnd;
                if(selectionStart==selectionEnd){
                 if(prevInputValue.length>0){
                        //getZebraDataFunction(prevInputValue.slice(0,selectionStart)+prevInputValue.slice(selectionStart+1,inputValue.length))
                     return prevInputValue.slice(0,selectionStart)+prevInputValue.slice(selectionStart+1,inputValue.length)
                 }else{
                        //getZebraDataFunction(prevInputValue)
                     return prevInputValue
                 }
                }
            })
            return;
        }
        //getZebraDataFunction(e.target.value)
        setInputValue(e.target.value)
    }

    return {handleChange,handleInputBlur,handleClick,detectPressedKey,handleFocus}
}*/