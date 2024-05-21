import { useEffect, useRef, useState } from "react"
import CharacterWidthCalculator from "./CharacterWidthCalculator";
import { useDispatch, useSelector } from "react-redux";
import usePropertiesFromStore from "../../hooks/usePropertiesFromStore";
import useTextConverterToZebraCode from "../../hooks/useTextConverterToZebraCode";

export default function InsertedInput(props){

    const [editMode,setEditMode]=useState(true)

    const [inputValue,setInputValue] = useState("")

    /* commented 07.05.24 10:35
    const [fontSizeFromReduxStore,fontSize,setFontSize] = 
    usePropertiesFromStore("leftAsideControllersReducer","tailleDePolice",props.whichChildIam,26);
    */
    //adding font size control 07.05.24 10:33
    const [fontSizeFromReduxStore,fontSize,setFontSize] = //9.86
    usePropertiesFromStore("leftAsideControllersReducer","tailleDePolice",props.whichChildIam,5.6);//1.5mm default font size for font type A   

    
    const lineHeight = `${parseInt(fontSize)}px`;
    const [characterwidth,setCharacterWidth] = useState("")
    const myInputRef =useRef(null);
    const offScreenSpanElement = useRef(null)
    
    function getCharachterWidthFromCharacterWidthCalculator(charachterWidthFromCharacterWidthCalculator){
        //console.log("character width : ",charachterWidthFromCharacterWidthCalculator*0.2646)
        setCharacterWidth(charachterWidthFromCharacterWidthCalculator)
    }


    //zbra code

    //const [correspondantZebraPositionCode,setCorrespondantZebraPositionCode]=useState("^FO")
    //const [correspondantZebraData,setCorrespondantZebraData]=useState("^FD")

    /*
    function getZebraDataFunction(data){

        //need a test for ^ to not be entered, i need to not allow it
        setCorrespondantZebraData("^FD"+data)
    }
    */

    
    const [insertedCharacter,setInsertedCharacter] = useState("")
    const [pressedCharacter, setPressedCharacter] = useState("")


    const [inputWidth,setInputWidth] = useState(parseInt(fontSize))

    const [cursorPosition,setCursorPosition] = useState(0)

    const dispatch = useDispatch();
    
    
    const [positionXFromRedux,leftPosition,setLeftPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionX",props.whichChildIam,props.elementX);

    const [positionYFromRedux,topPosition,setTopPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionY",props.whichChildIam,props.elementY);

    const [rotationFromReduxStore,rotation,setRotation] = 
    usePropertiesFromStore("leftAsideControllersReducer","rotation",props.whichChildIam,0);

    const [niveauDeGrasFromReduxStore,niveauDeGras,setNiveauDeGras] = 
    usePropertiesFromStore("leftAsideControllersReducer","niveauDeGras",props.whichChildIam,300);
     

    const [zebraFieldOrigin,zebraFieldData,zebraFontSize] =
    useTextConverterToZebraCode(props.whichChildIam,leftPosition,topPosition,fontSize,inputValue,editMode);

    const [textElementXPosition,setTextElementXPosition]=useState(0)
    const [textElementYPosition,setTextElementYPosition]=useState(0)

    
    
    

    

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

    /*
    useEffect(()=>{
        console.log("correspondantZebraData : ",correspondantZebraData)
    },[correspondantZebraData])
    */

    useEffect(()=>{
        if (myInputRef.current) { 
        setZebraProgrLangXPosition(myInputRef.current.getBoundingClientRect().left-myInputRef.current.parentElement.getBoundingClientRect().left)
        setZebraProgrLangYPosition(myInputRef.current.getBoundingClientRect().top-myInputRef.current.parentElement.getBoundingClientRect().top)

        //dispatchingTextElementPosition();
        dispatch({
            type:"MODIFIER_POSITION_X",
            payload:leftPosition})
        dispatch({
            type:"MODIFIER_POSITION_Y",
            payload:topPosition})
        }
    },[leftPosition,topPosition])

    useEffect(()=>{
        
        if(pressedCharacter=="space key" ){
            setInputWidth(parseInt(inputWidth)+parseInt(characterwidth))
        }
        if(insertedCharacter=="deleteContentBackward"){
            //console.log("backspace :")
            setInputWidth(parseInt(inputWidth)-parseInt(characterwidth))
            return
        }
        if(characterwidth==undefined || characterwidth==""){
            return
        }
        setInputWidth(parseInt(inputWidth)+parseInt(characterwidth))



        props.liftInputValueToParent(props.whichChildIam,inputValue)
        // pour le cas de tout sélectionner et tous supprimer
        if(inputValue.length==0){
            setInputWidth(fontSize)
            return
        }
        //console.log("input valueeee : ",inputValue)
    },[inputValue])


    //08.05.24 18:58 this to call trigger the function liftInputValueToParent on delete
    useEffect(()=>{
        //console.log("input length : ",inputValue.length)
        //if(inputValue.length==0){
          //  return
        //}
        //props.liftInputValueToParent(props.whichChildIam,inputValue)
    },[inputValue.length])

    // this code may break the app 09.05.24 11:34
    /*
    useEffect(()=>{
        
        if(insertedCharacter=="deleteContentBackward"){
            console.log("empty value frm brkjs")
            setInputWidth(parseInt(inputWidth)-parseInt(characterwidth))
            if(inputValue==""){
                props.liftInputValueToParent(props.whichChildIam,"")
            }
            return
        }
    },[inputValue])
    */
   
    const toggleToDefaultCursor = useDispatch()
    
    const [inputFocused,setInputFocused]=useState(false)

    
    

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
        //dispatchingTextElementPosition();
        dispatch({
            type:"MODIFIER_POSITION_X",
            payload:leftPosition})
        dispatch({
            type:"MODIFIER_POSITION_Y",
            payload:topPosition})
        }  
        dispatch({type:"MODIFIER_TAILLE_POLICE",payload:fontSize})
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})
        
        dispatch({type:"MODIFIER_MISE_EN_GRAS",payload:niveauDeGras})

        //console.log("niveau de gras :",niveauDeGras)
        //setNiveauDeGras(niveauDeGrasFromReduxStore)
        //console.log("leftpos : ",leftPosition)
        //console.log("toppos : ",topPosition)

        
        //setCorrespondantZebraPositionCode("^FO"+leftPosition+","+topPosition)
        //console.log("i am the child : ",props.whichChildIam)
    },[])
    

    function handleFocus(){
        
        dispatch({type:"ACTIVE_HEADER_ICON",payload:"Text"})
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

        dispatch({type:"MODIFIER_MISE_EN_GRAS",payload:niveauDeGras})
        
    }


    useEffect(()=>{
        //dispatchingTextElementPosition()
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})
    },[inputFocused])

    const [divFocus,setDivFocus]=useState(false)


    const whichTextInputIsClickedFromReduxStore = useSelector(state=>state.leftAsideControllersReducer.whichTextInputIsClicked)
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

    
    


    const isLeftAsideClicked = useSelector(state=>state.leftAsideControllersReducer.isLeftAsideClicked)
    
    function setNewInputWidthWhenFontSizeChanges(newInputWidth){
        // this condition because inputWidth comes from CharacterWidthCalculator and it's to 0 be default
        
        if(newInputWidth==0){
            setInputWidth(fontSize)
            return
        }
        
        setInputWidth(newInputWidth+fontSize/2)
        //setInputWidth(newInputWidth+fontSize)

    }

    
    const whichHeaderButtonIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)
    function handleDivClick(){
        
        //dispatchingTextElementPosition()
        if(whichHeaderButtonIsCliqued=="inserer_texte"){
            dispatch({type:"SELECTIONNER"})
            
            return
        }
        setEditMode(true);
    }


    const [divCursorAppearance,setDivCursorAppearance] = useState("text")
    function handleDivHover(){
        
        if(whichHeaderButtonIsCliqued=="inserer_texte" || whichHeaderButtonIsCliqued=="inserer_barcode"){
            setDivCursorAppearance("not-allowed")
        }else{
            setDivCursorAppearance("text")
        }
    }


    //to handle zebra code 
    /*useEffect(()=>{
        //props.liftCorrespondantZebraCodeToParent(props.whichChildIam,zebraFieldOrigin+zebraFieldData)
    },[inputValue,leftPosition,topPosition])*/
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
                        left:leftPosition,top:topPosition,
                        border:"1px solid black",
                        outline:"none",
                        fontSize:whichTextInputIsClickedFromReduxStore==props.whichChildIam?fontSizeFromReduxStore+"px":fontSize+"px",
                        //fontWeight:niveauDeGras||100
                        //fontFamily:"Roboto"
                        fontFamily:"Fira-code",
                        //fontWeight:"600",
                        lineHeight:lineHeight
                    
                    }}
                maxLength={inputValue.length >=1 ?inputValue.length+1:1}/>}
            {editMode&&<CharacterWidthCalculator fontSize={fontSize+"px"} character={inputValue[inputValue.length-1]} 
                    inputValue={inputValue}
                    getCharachterWidthFromCharacterWidthCalculator={getCharachterWidthFromCharacterWidthCalculator}
                    setNewInputWidthWhenFontSizeChanges={setNewInputWidthWhenFontSizeChanges}
                    />}

        {!editMode&&<div onClick={handleDivClick}  onMouseOver={handleDivHover}
                        style={{position: "absolute",whiteSpace:"pre-wrap",
                        border:whichTextInputIsClickedFromReduxStore==props.whichChildIam&&isLeftAsideClicked?"1.5px dashed grey":"",
                        left:leftPosition,top:topPosition,outline:"none",
                        transform:whichTextInputIsClickedFromReduxStore==props.whichChildIam?`rotate(${rotationFromReduxStore}deg)`
                        :`rotate(${rotation}deg)`,
                        fontSize:`${fontSize}px`,cursor:divCursorAppearance,
                        //fontWeight:niveauDeGras||100
                        fontFamily:"Fira-code",
                        //fontWeight:"600",
                        lineHeight:lineHeight
                        
                        }}>
            {inputValue}
        </div>}
        </>
    )
    
}