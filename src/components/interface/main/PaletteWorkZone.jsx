import { Fade, Slide, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import InsertedInput from "../../helpers/InsertedInput";
import InsertedBarcode from "../../helpers/InsertedBarcode";
import LineDrawing from "./LineDrawing";
import useLineDrawing from "../../../hooks/useLineDrawing";

export default function PaletteWorkZone(props){

    const paletteWorkZoneRef = useRef(null);

    const [paletteXPosition , setPaletteXPosition ] = useState(0)
    const [paletteYPosition , setPaletteYPosition ] = useState(0)



    const {handleMouseDownLineDrawing,handleMouseUpLineDrawing,handleMouseMoveLineDrawing,lineLength,startPos}=
    useLineDrawing();


    const [cursorXPosition,setCursorXPosition]=useState(0)
    const [cursorYPosition,setCursorYPosition]=useState(0)
    function handleMouseMove(e){
        
        handleMouseMoveLineDrawing(e)

        const rect = e.target.getBoundingClientRect();
        const left = rect.left;
        const top  = rect.top;
        setPaletteXPosition(left)
        setPaletteYPosition(top)

    

        const parentRect = paletteWorkZoneRef.current.getBoundingClientRect();

        //setCursorXPosition(e.clientX -e.target.getBoundingClientRect().left)
        setCursorYPosition(e.clientY -e.target.getBoundingClientRect().top)

        //console.log("cursor X Pos : ",e.clientX -e.target.getBoundingClientRect().left)
        //console.log("cursor X Pos : ",e.clientX -parentRect.left)
        setCursorXPosition(e.clientX -parentRect.left)

        //console.log("Cursor X pos : ", e.clientX -parentRect.left)
        //setLineLength(e.target.getBoundingClientRect().left)
        //console.log("palette left pos :",left)
        //console.log("palette top pos :", top)
    }

    const cursorAppearance = useSelector(state=>state.headerClickReducer.cursorAppearance)

    const whichHeaderButtonIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)

    const toggleToDefaultCursor = useDispatch()

    const [elements,setElements] = useState([]);
    const [elementValue,setElementValue] = useState("");

    const [xPositon,setXPosition]=useState(null)
    const [yPositon,setYPosition]=useState(null)
    function liftInputValueToParent(childId,inputValue){
        
            /*if(inputValue=="" && inputValue==undefined){
                console.log("inputValue : ",inp)
                setElements(elements => elements.filter((_, index) => index !== childId));
                return
            }else{*/
                setElements(elements =>{
                    const updatedElements = [...elements];
                   
                   
                    updatedElements[childId].value=inputValue;
                    return elements
                })
            //}
            
        
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
        //handleMouseDownLineDrawing();
        //const nonEmptyValueElements = elements.filter(element => element.value.trim() !== "");
        //setElements(nonEmptyValueElements);
        
        /* where i was ce qu je veux vraiment c'est que upon deletion then don't show that element in zebra code
        try{
            if(whichHeaderButtonIsCliqued=="selectionner"){
                //const filteredElements = elements.filter(element => element.value.trim() !== '');
                const filteredElements = elements.filter(element => {
                    if (element !=undefined && element.value !=undefined) {
                      return element.value.trim() !== '';
                    } else {
                      return false; // Filter out undefined or null elements
                    }})
                setElements(filteredElements);
            }
        }catch(e){
            console.log("i'm generating the error")
        }
        */
        

        if(whichHeaderButtonIsCliqued=="inserer_texte"){
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            //console.log("rect.left :",rect.left)
            //console.log("rect.top :",rect.top)

            //console.log(" x : " ,x)
            //console.log(" y : " ,y)
            setXPosition(x);
            setYPosition(y);
            setElements([...elements,
                
                {elementId:childCount,element:<InsertedInput key={childCount} whichChildIam={childCount} 
                    elementX={x} elementY={y}
                    paletteHeight={props.height}
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
            //console.log("cccccccccccccccwhat")
            /*

            
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const deltaX = x - startPos.x;
            const deltaY = y - startPos.y;

            const mouseClickXPosition = e.clientX - e.target.getBoundingClientRect().left;*/

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

            setElements([...elements,
                
                {elementId:childCount,element:<LineDrawing 
                    //cursorXPosition={cursorXPosition}
                    // cursorYPosition={cursorYPosition}
                    lineLength={lineLength} key={childCount} handleMouseMove={handleMouseMove} 

                    left={mouseDownXPosition<mouseUpXPosition?mouseDownXPosition:mouseUpXPosition}
                    top={mouseDownYPosition<mouseUpYPosition?mouseDownYPosition:mouseUpYPosition}

                    height={absDeltaX>absDeltaY?1:absDeltaY} 
                    width={absDeltaX>absDeltaY?absDeltaX:1}
                    //here is either to draw a vertical or horizontal line
                    angle={absDeltaX > absDeltaY?"0":"90"}
                
                    absDeltaX={absDeltaX}  absDeltaY={absDeltaY}

                    paletteWorkZoneRef={paletteWorkZoneRef}
                    whichChildIam={childCount} 
                    />,value:"",correspondantZebraCode:""}
            ]);
            setChildCount(prev=>prev+1)
            dispatch({type:"SELECTIONNER"})
        }
    }

    
    useEffect(()=>{
        console.log("PaletteWorkZoneElements :",elements)
        //08.05.24 18:23 code to remove elements that have an empty value

        //const nonEmptyValueElements = elements.filter(element=>element.value.trim()!=="")
        //if(whichHeaderButtonIsCliqued=="selectionner")
       //setElements(elems =>elems.filter(element=>element.value.trim()!==""))
    },[childCount])
    
    

    useEffect(()=>{
        //console.log("Element value :",elementValue)
        //setElements([...elements,{x,y,inputValue}]);
        //liftInputValueToParent(childCount,elementValue)
        
    },[elementValue])
    //const [paletteHeight,setPaletteHeight]= useState(props.height)


    //l'ajout de insertedText c'est pour supprimer les éléments qui n'ont pas de textes

    function onMouseDown(e){
        //console.log(" MouseDownXPosition : ",e.clientX -e.target.getBoundingClientRect().left)

        setMouseDownYPosition(e.clientY - e.target.getBoundingClientRect().top)
        setMouseDownXPosition(e.clientX - e.target.getBoundingClientRect().left)
        handleMouseDownLineDrawing(e)
    }
    function onMouseUp(e){

        //console.log(" MouseUpXPosition : ",e.clientX -e.target.getBoundingClientRect().left)
        
        setMouseUpYPosition(e.clientY - e.target.getBoundingClientRect().top)
        setMouseUpXPosition(e.clientX - e.target.getBoundingClientRect().left)
        handleMouseUpLineDrawing(e)
    }

    /*
    useEffect(()=>{
        setLineStartXPosition(mouseUpXPosition)
    },[mouseUpXPosition])
    */

    
    return(
        <Fade direction="up" in={props.selectedTab === 0} timeout={500}
            style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`}}
            >
            <div onMouseMove={handleMouseMove} id="" onClick={handleClick}
                style={{cursor:cursorAppearance}} 
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                ref={paletteWorkZoneRef}
                >
                

                {elements.map((element,index)=>{
                    return  element.element
                })}

                {/* <LineDrawing 
                    cursorXPosition={cursorXPosition}
                    cursorYPosition={cursorYPosition}
                    lineLength={100} key={childCount} handleMouseMove={handleMouseMove} 
                left={200}top={mouseDownYPosition}/> */}
                {/* <DraggableDiv/> */}
            </div>
        </Fade>
    )
}