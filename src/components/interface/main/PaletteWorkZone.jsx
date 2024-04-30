import { TextField } from "@mui/material";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import InsertedInput from "../../helpers/InsertedInput";

export default function PaletteWorkZone(props){

    function handleMouseMove(e){
    }

    const cursorAppearance = useSelector(state=>state.headerClickReducer.cursorAppearance)

    const whichHeaderButtonIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)

    const toggleToDefaultCursor = useDispatch()

    const [elements,setElements] = useState([]);

    function handleClick(e){

        if(whichHeaderButtonIsCliqued=="inserer_texte"){
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setElements([...elements,{x,y}]);
        }
    }

    return(
        <div onMouseMove={handleMouseMove} id="div" onClick={handleClick}
             style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`,
             cursor:cursorAppearance}} className="">


            {elements.map((element)=>{
                return<InsertedInput elementX={element.x} elementY={element.y}/>
            })}
        </div>
    )
}