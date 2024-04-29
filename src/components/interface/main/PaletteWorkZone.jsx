import { useState } from "react"
import { useSelector } from "react-redux"

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
    return(
        <div onMouseMove={handleMouseMove} id="div"
             style={{boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`,
             cursor:cursorAppearance}} className="">
{/* <button onClick={toggleCursorAppearance}> toggle cursor</button> */}
        </div>
    )
}