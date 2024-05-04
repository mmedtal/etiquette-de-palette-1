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
        //console.log("palette left pos :",left)
        //console.log("palette top pos :", top)
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
            //console.log("rect.left :",rect.left)
            //console.log("rect.top :",rect.top)
            setElements([...elements,{x,y}]);
        }
    }

    useEffect(()=>{
        //console.log("PaletteWorkZoneElements :",elements)
    },[elements])
    //const [paletteHeight,setPaletteHeight]= useState(props.height)
    return(
        <Fade direction="up" in={props.selectedTab === 0} timeout={500}
            style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`}}
            >
            <div onMouseMove={handleMouseMove} id="" onClick={handleClick}
                style={{cursor:cursorAppearance}} >


                {elements.map((element,index)=>{
                    return<InsertedInput key={index} whichChildIam={index} elementX={element.x} elementY={element.y} paletteHeight={props.height}
                            paletteXPosition={paletteXPosition} paletteYPosition={paletteYPosition}/>
                })}
            </div>
        </Fade>
    )
}