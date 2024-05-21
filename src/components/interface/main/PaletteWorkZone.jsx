import { Fade, Slide, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import InsertedInput from "../../helpers/InsertedInput";
import InsertedBarcode from "../../helpers/InsertedBarcode";
import LineDrawing from "./LineDrawing";
import useLineDrawing from "../../../hooks/useLineDrawing";
import LineDrawingVisualEffect from "../../visualEffects/LineDrawingVisualEffect";
import RectangleDrawingVisualEffect from "../../visualEffects/RectangleDrawingEffect";

export default function PaletteWorkZone(props){

    const paletteWorkZoneRef = useRef(null);

    const [paletteXPosition , setPaletteXPosition ] = useState(0)
    const [paletteYPosition , setPaletteYPosition ] = useState(0)

    const [isDragging, setIsDragging] = useState(false);


    //because of a bug, the line is showing when i just click
    const [showLineDrawingVisualEffect,setShowLineDrawingVisualEffect] = useState(false)
    const {handleMouseDownLineDrawing,handleMouseUpLineDrawing,handleMouseMoveLineDrawing,lineLength,startPos}=
    useLineDrawing();


    const [cursorXPosition,setCursorXPosition]=useState(0)
    const [cursorYPosition,setCursorYPosition]=useState(0)
    function handleMouseMove(e){
        if(whichHeaderButtonIsCliqued=="dessiner_ligne_forme"){
            if (!isDragging) return;
        }

        handleMouseMoveLineDrawing(e)

        const rect = e.target.getBoundingClientRect();
        const left = rect.left;
        const top  = rect.top;
        setPaletteXPosition(left)
        setPaletteYPosition(top)


    

        const parentRect = paletteWorkZoneRef.current.getBoundingClientRect();

        setCursorYPosition(e.clientY -e.target.getBoundingClientRect().top)
        setCursorXPosition(e.clientX -parentRect.left)



        if(Math.abs(cursorXPosition - mouseDownXPosition)||Math.abs(cursorYPosition - mouseDownYPosition)){
            setShowLineDrawingVisualEffect(true)
        }
    }

    const cursorAppearance = useSelector(state=>state.headerClickReducer.cursorAppearance)

    const whichHeaderButtonIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)

    const toggleToDefaultCursor = useDispatch()

    const [elements,setElements] = useState([]);
    const [elementValue,setElementValue] = useState("");

    const [xPositon,setXPosition]=useState(null)
    const [yPositon,setYPosition]=useState(null)
    function liftInputValueToParent(childId,inputValue){
        
        
                setElements(elements =>{
                    const updatedElements = [...elements];
                   
                   
                    updatedElements[childId].value=inputValue;
                    return elements
                })
            
        
    }

    function liftCorrespondantZebraCodeToParent(childId,zebraCodeFromChild){

        setElements(elements =>{
            const updatedElements = [...elements];
            updatedElements[childId].correspondantZebraCode=zebraCodeFromChild;
            return elements
        })

    }
    const dispatch = useDispatch();



    const [addBarCodeToElementsOrNot,setAddBarCodeToElementsOrNot]=useState(true)
    function addToElementsOrNot(toAddOrNot){
        setAddBarCodeToElementsOrNot(toAddOrNot)
    }
    const [childCount,setChildCount]=useState(0)


    const [lineStartXPosition,setLineStartXPosition]=useState(0)

    const [mouseUpXPosition,setMouseUpXPosition]=useState(0)
    const [mouseUpYPosition,setMouseUpYPosition]=useState(0)



    const [mouseDownXPosition,setMouseDownXPosition]=useState(0)
    const [mouseDownYPosition,setMouseDownYPosition]=useState(0)


    const [lineDrawingWidth,setLineDrawingWidth] = useState(0)
    const [lineDrawingHeight,setLineDrawingHeight] = useState(0)
    function handleClick(e){

        

        if(whichHeaderButtonIsCliqued=="inserer_texte"){
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            setXPosition(x);
            setYPosition(y);
            setElements([...elements,
                
                {elementId:childCount,element:<InsertedInput key={childCount} whichChildIam={childCount} 
                    elementX={x} elementY={y}
                    paletteHeight={props.height+"mm"}
                    paletteXPosition={paletteXPosition} paletteYPosition={paletteYPosition}
                    liftInputValueToParent={liftInputValueToParent} 
                    liftCorrespondantZebraCodeToParent={liftCorrespondantZebraCodeToParent}
                    />,value:"",correspondantZebraCode:""}
            ]);

           

            setChildCount(prev=>prev+1)
            dispatch({type:"SELECTIONNER"})
        }

        if(whichHeaderButtonIsCliqued=="inserer_barcode"){
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            

            setElements([...elements,
                
                {elementId:childCount,element:<InsertedBarcode key={childCount} whichChildIam={childCount} 
                    elementX={x} elementY={y}
                    paletteHeight={props.height}
                    paletteXPosition={paletteXPosition} paletteYPosition={paletteYPosition}
                    addToElementsOrNot={addToElementsOrNot}
                    liftInputValueToParent={liftInputValueToParent} 
                    liftCorrespondantZebraCodeToParent={liftCorrespondantZebraCodeToParent}
                    />,value:"",correspondantZebraCode:""}
            ]);
            setChildCount(prev=>prev+1)
            dispatch({type:"SELECTIONNER"})
        }

        if(whichHeaderButtonIsCliqued=="dessiner_ligne_forme"){
           

            const deltaX = mouseDownXPosition - mouseUpXPosition;
            const deltaY = mouseDownYPosition - mouseUpYPosition;
            const absDeltaX = Math.abs(deltaX);
            const absDeltaY = Math.abs(deltaY);

            if (absDeltaX > absDeltaY) {
               
                setLineDrawingWidth(absDeltaX);
                setLineDrawingHeight(1)
              } else {
                setLineDrawingWidth(1)
                setLineDrawingHeight(absDeltaY)
              }

            // it it's a dot then don't inset it 
            if(absDeltaX==0 && absDeltaY==0){
                return
            }  
            setElements([...elements,
                
                {elementId:childCount,element:<LineDrawing 
                    lineLength={lineLength} 
                    key={childCount} handleMouseMove={handleMouseMove} 
                    left={Math.min(mouseDownXPosition,mouseUpXPosition)}
                    top={Math.min(mouseDownYPosition,mouseUpYPosition)}
                    height={absDeltaX>absDeltaY?1:absDeltaY} 
                    width={absDeltaX>absDeltaY?absDeltaX:1}
                    angle={absDeltaX > absDeltaY?"0":"90"}
                    absDeltaX={absDeltaX}  absDeltaY={absDeltaY}
                    paletteWorkZoneRef={paletteWorkZoneRef}
                    whichChildIam={childCount} 
                    cursorXPositionOnParent={cursorXPosition}
                    parentMouseDownPosition={{x:mouseDownXPosition,y:mouseDownYPosition}}
                    />,value:"",correspondantZebraCode:""}
            ]);
            setChildCount(prev=>prev+1)
            dispatch({type:"SELECTIONNER"})
        }
    }


    function disableLineDrawingOnLineDrawingClick(){
        setIsDragging(false)
    }


    function onMouseDown(e){


        if(whichHeaderButtonIsCliqued=="dessiner_ligne_forme"){
                setIsDragging(true);
        }
        
        setMouseDownYPosition(e.clientY - e.target.getBoundingClientRect().top)
        setMouseDownXPosition(e.clientX - e.target.getBoundingClientRect().left)
        handleMouseDownLineDrawing(e)


        setShowLineDrawingVisualEffect(false)
    }
    function onMouseUp(e){

        setIsDragging(false);
        
        setMouseUpYPosition(e.clientY - e.target.getBoundingClientRect().top)
        setMouseUpXPosition(e.clientX - e.target.getBoundingClientRect().left)
        handleMouseUpLineDrawing(e)
        
        
        setShowLineDrawingVisualEffect(false)
    }


    return(
        <Fade direction="up" in={props.selectedTab === 0} timeout={500}
            style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",
            height:`${props.height}`,
            width:`${props.width}`}}
            >
            <div onMouseMove={handleMouseMove} id="" onClick={handleClick}
                style={{cursor:cursorAppearance}} 
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                ref={paletteWorkZoneRef}>
                

                {elements.map((element,index)=>{
                    return  element.element
                })}



               
                
                {isDragging&& showLineDrawingVisualEffect&&
                <LineDrawingVisualEffect 
                    mouseDownXPosition={mouseDownXPosition}
                    cursorXPosition={cursorXPosition} 
                    mouseDownYPosition={mouseDownYPosition} 
                    cursorYPosition={cursorYPosition}/>}




            </div>
        </Fade>
    )
}