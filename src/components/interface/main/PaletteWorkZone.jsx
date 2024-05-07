import { Fade, Slide, TextField } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import InsertedInput from "../../helpers/InsertedInput";

export default function PaletteWorkZone(props){

    
    const [paletteXPosition , setPaletteXPosition ] = useState(0)
    const [paletteYPosition , setPaletteYPosition ] = useState(0)

    function handleMouseMove(e){
        const rect = e.target.getBoundingClientRect();
        const left = rect.left;
        const top  = rect.top;
        setPaletteXPosition(left)
        setPaletteYPosition(top)
      
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

    const [childCount,setChildCount]=useState(0)
    function handleClick(e){

        if(whichHeaderButtonIsCliqued=="inserer_texte"){
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            setXPosition(x);
            setYPosition(y);
            setElements([...elements,
                
                {elementId:childCount,element:<InsertedInput key={childCount} whichChildIam={childCount} elementX={x} elementY={y}
                    paletteHeight={props.height}
                    paletteXPosition={paletteXPosition} paletteYPosition={paletteYPosition}
                    liftInputValueToParent={liftInputValueToParent} 
                    liftCorrespondantZebraCodeToParent={liftCorrespondantZebraCodeToParent}
                    />,value:"",correspondantZebraCode:""}
            ]);

            
            setChildCount(prev=>prev+1)
            dispatch({type:"SELECTIONNER"})
        }
    }

    return(
        <Fade direction="up" in={props.selectedTab === 0} timeout={500}
            style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`}}
            >
            <div onMouseMove={handleMouseMove} id="" onClick={handleClick}
                style={{cursor:cursorAppearance}} >


                {elements.map((element,index)=>{
                    return  element.element
                })}
            </div>
        </Fade>
    )
}