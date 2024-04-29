import { TextField } from "@mui/material";
import { useState } from "react"
import { useSelector } from "react-redux"
import InsertedInput from "../../helpers/InsertedInput";

export default function PaletteWorkZone(props){

    function handleMouseMove(e){

        //console.log("e.clientX : ",e.clientX-218)
        //console.log("e.clientY : ",e.clientY-111)
        //console.log("document.getElementById('div').getBoundingClientRect() :",document.getElementById("div").getBoundingClientRect())
    }

    //const [cursorAppearance,setCursorAppearance] = useState("auto")

    // function toggleCursorAppearance(){
    //     setCursorAppearance("text")
    // }

    const cursorAppearance = useSelector(state=>state.headerClickReducer.cursorAppearance)


    const [elements,setElements] = useState([]);

    function handleClick(e){
        //console.log(e.clientY)
        //setElements({x:240,y:300});
        //console.log(document.getElementById('div').getBoundingClientRect())
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setElements([...elements,{x,y}]);
        //setElements((el)=>[...el,{x:e.clientX-document.getElementById('div').getBoundingClientRect().left,y:e.clientY-document.getElementById('div').getBoundingClientRect().top}]);
    }

    return(
        <div onMouseMove={handleMouseMove} id="div" onClick={handleClick}
             style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`,
             cursor:cursorAppearance}} className="">
{/* <button onClick={toggleCursorAppearance}> toggle cursor</button> */}


            {elements.map((element)=>{
                //return<input autoFocus={true} style={{position: "absolute",left:element.x,top:element.y,border:"1px white transparent",outline:"none",}}maxLength={calculateMaxLength || 1}/>
                return<InsertedInput elementX={element.x} elementY={element.y}/>
            })}
        </div>
    )
}