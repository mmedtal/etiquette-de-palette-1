import { useEffect, useRef, useState } from "react"
import CharacterWidthCalculator from "./CharacterWidthCalculator";
import { useDispatch, useSelector } from "react-redux";
import usePropertiesFromStore from "../../hooks/usePropertiesFromStore";
import useTextConverterToZebraCode from "../../hooks/useTextConverterToZebraCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import useBarcodeConverterToZebraCode from "../../hooks/useBarCodeConverterToZebraCode";

export default function InsertedBarcode(props){

    const [editMode,setEditMode]=useState(true)

    const [inputValue,setInputValue] = useState("")

    const [fontSizeFromReduxStore,fontSize,setFontSize] = 
    usePropertiesFromStore("leftAsideControllersReducer","tailleDePolice",props.whichChildIam,26);  

    
    const lineHeight = `${parseInt(fontSize) * 1.2}px`;
    const [characterwidth,setCharacterWidth] = useState("")
    const myInputRef =useRef(null);
    const offScreenSpanElement = useRef(null)
    
    function getCharachterWidthFromCharacterWidthCalculator(charachterWidthFromCharacterWidthCalculator){
        setCharacterWidth(charachterWidthFromCharacterWidthCalculator)
    }
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

     
    
    
    const [zebraFieldOrigin,zebraFieldData,zebraFontSize] =
    useBarcodeConverterToZebraCode(props.whichChildIam,leftPosition,topPosition,fontSize,inputValue,editMode);
    
    
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
            setInputWidth(parseInt(inputWidth)-parseInt(characterwidth))
            return
        }
        if(characterwidth==undefined || characterwidth==""){
            return
        }
        setInputWidth(parseInt(inputWidth)+parseInt(characterwidth))



        props.liftInputValueToParent(props.whichChildIam,inputValue)
        
        
    },[inputValue])

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

        //console.log("leftpos : ",leftPosition)
        //console.log("toppos : ",topPosition)

        
        //setCorrespondantZebraPositionCode("^FO"+leftPosition+","+topPosition)
        //console.log("i am the child : ",props.whichChildIam)
    },[])
    

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
        //dispatch({type:"INSERER_BARCODE"})
        dispatch({type:"ACTIVE_HEADER_ICON",payload:"Barcode"})
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
        


        if(inputValue.length==0){
            setRenderHelpers(false)
            //props.addToElementsOrNot(false)
            //props.liftInputValueToParent()
            props.liftInputValueToParent(props.whichChildIam,"")
        }else{
            setRenderHelpers(true)
            //props.addToElementsOrNot(true)
        }
        //dispatch({type:"INSERER_BARCODE"})
    }

    
    


    const isLeftAsideClicked = useSelector(state=>state.leftAsideControllersReducer.isLeftAsideClicked)
    
    function setNewInputWidthWhenFontSizeChanges(newInputWidth){
        // this condition because inputWidth comes from CharacterWidthCalculator and it's to 0 be default
        
        if(newInputWidth==0){
            setInputWidth(fontSize)
            return
        }

        // pour le cas de tout sélectionner et tous supprimer
        if(inputValue.length==0){
            setInputWidth(fontSize)
            return
        }
        setInputWidth(newInputWidth+fontSize/2)
    }

    useEffect(()=>{
        
    },[fontSize])



    
    

    const whichHeaderButtonIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)
    function handleDivClick(){
        
        //dispatchingTextElementPosition()
        //whichHeaderButtonIsCliqued=="inserer_barcode" fixed barcode jumping to left top of PaletteWorkZone.png
        if(whichHeaderButtonIsCliqued=="inserer_texte" || whichHeaderButtonIsCliqued=="inserer_barcode"){
            dispatch({type:"SELECTIONNER"})
            
            return
        }
        setEditMode(true);
    }


    const [divCursorAppearance,setDivCursorAppearance] = useState("text")
    function handleDivHover(){
        
        if(whichHeaderButtonIsCliqued=="inserer_texte"){
            setDivCursorAppearance("not-allowed")
        }else{
            setDivCursorAppearance("text")
        }
    }


    //to handle zebra code 
    useEffect(()=>{
        //props.liftCorrespondantZebraCodeToParent(props.whichChildIam,zebraFieldOrigin+zebraFieldData)
    },[inputValue,leftPosition,topPosition])

    const[renderHelpers,setRenderHelpers]=useState(true)

    // useEffect(()=>{
    //     if(inputValue.length==0){
    //         setRenderHelpers(false)
    //     }else{
    //         setRenderHelpers(true)
    //     }
    // },[inputValue])
    return(
        <>
            {/* {renderHelpers&&<FontAwesomeIcon icon={faBarcode} 
            style={{position: "absolute",left:leftPosition+inputWidth,top:topPosition-fontSize/3.5,color:"gray"}}/>} */}
            
            {/*<FontAwesomeIcon icon={faBarcode} style={{position: "absolute",left:leftPosition+inputWidth,top:topPosition-fontSize/3.5,color:"gray"}}/>
            */}
             {/* <IconButton style={{
                position: "absolute",left:leftPosition+inputWidth/4,
                top:topPosition-fontSize/1.2,color:"black"
                borderImageSource:"url(./public/barcode.png)"          
            }}
             > 
             </IconButton>
             */}
                {/* <FontAwesomeIcon icon={faBarcode}/> */}
             
             {/* <IconButton style={{position: "absolute",left:leftPosition+inputWidth/3,top:topPosition-fontSize/1.2,color:"black"}}>
                <FontAwesomeIcon icon={faBarcode}/>
             </IconButton> */}
             {/* <div style={{borderImageSource:"url(barcode.png)"  }}> */}
             {/* <img src={require("../public/barcode.png")}/> */}
             {/* </div> */}
             {/* <img src="/white.ico"/> */}
             
             
             {/* <img src={process.env.PUBLIC_URL + '/barcode.png'} />  */}
           
            {renderHelpers&&<span style={{width:inputWidth-fontSize/2,position: "absolute",left:leftPosition,top:topPosition-fontSize/2,color:"gray",textAlign:"right",
                transform:whichTextInputIsClickedFromReduxStore==props.whichChildIam?`rotate(${rotationFromReduxStore}deg)`
                :`rotate(${rotation}deg)`,
            }}>
            {/* <FontAwesomeIcon icon={faBarcode}/> */}
            barcode
            </span>}
           
            {editMode&&renderHelpers&&<input 
                
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
                        //borderTop:"1.5px solid gray",  
                        //borderRight:"1.5px solid gray",                      
                        border: "1px groove gray",
                        //borderWidth: "2px",
                        //borderImageSlice: "1",
                        //borderImageSource: "repeating-linear-gradient(to right, black, black 1px, white 1px, white 2px)",
                        outline:"none",
                        fontSize:whichTextInputIsClickedFromReduxStore==props.whichChildIam?fontSizeFromReduxStore+"px":fontSize+"px"
                        
                    
                    }}
                maxLength={inputValue.length >=1 ?inputValue.length+1:1}/>}
            {editMode&&<CharacterWidthCalculator fontSize={fontSize+"px"} character={inputValue[inputValue.length-1]} 
                    inputValue={inputValue}
                    getCharachterWidthFromCharacterWidthCalculator={getCharachterWidthFromCharacterWidthCalculator}
                    setNewInputWidthWhenFontSizeChanges={setNewInputWidthWhenFontSizeChanges}
                    />}

        {!editMode&&renderHelpers&&<div onClick={handleDivClick}  onMouseOver={handleDivHover}
                        style={{position: "absolute",whiteSpace:"pre-wrap",
                        border:whichTextInputIsClickedFromReduxStore==props.whichChildIam&&isLeftAsideClicked?"1.5px dashed grey":"",
                        left:leftPosition,top:topPosition,outline:"none",
                        transform:whichTextInputIsClickedFromReduxStore==props.whichChildIam?`rotate(${rotationFromReduxStore}deg)`
                        :`rotate(${rotation}deg)`,
                        fontSize:`${fontSize}px`,cursor:divCursorAppearance,

                        //borderTop:"1.5px solid gray",
                        //borderRight:"1.5px solid gray",
                        //borderTopLeftRadius:"10px black solid",
                        //border: "3px groove gray",
                        //borderWidth: "3px",
                        //borderImageSlice: "1",
                        //borderImageSource: "repeating-linear-gradient(to right, black, black 1px, white 1px, white 2px)",
                        
                        }}>
                                {/* <span style={{color:"gray",fontFamily:"serif",letterSpacing: '-2px',}}>||</span> */}
                                {inputValue}
                                {/* <span style={{color:"gray",fontFamily:"serif",letterSpacing: '-2px'}}>|||</span> */}
                            
            {/* {"||"+inputValue+"||"} */}
        </div>}
        
        {/* {renderHelpers&&<FontAwesomeIcon icon={faBarcode} 
            style={{position: "absolute",left:leftPosition+50,top:topPosition+fontSize*1.4,color:"gray"}}/>} */}
        {renderHelpers&&<span style={{position: "absolute",left:leftPosition,top:topPosition+fontSize*1.2,color:"gray",
            transform:whichTextInputIsClickedFromReduxStore==props.whichChildIam?`rotate(${rotationFromReduxStore}deg)`
            :`rotate(${rotation}deg)`,
        }}>barcode</span>}
        
        {/* <FontAwesomeIcon icon={faBarcode} style={{position: "absolute",left:leftPosition,top:topPosition+fontSize*1.2,color:"gray"}}/>
        <FontAwesomeIcon icon={faBarcode} style={{position: "absolute",left:leftPosition+inputWidth,top:topPosition+fontSize*1.2,color:"gray"}}/>
        */}
       
        </>
    )
    
}