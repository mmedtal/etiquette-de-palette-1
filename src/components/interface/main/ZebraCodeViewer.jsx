import { Fade } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ZebraCodeViewer(props){

    const generatedZebraCode = useSelector(state=>state.generatedZebraCodeReducer.generatedZebraCodeInstructions)

    return(
    <Fade direction="up" in={props.selectedTab === 1} timeout={500}
            style={{wordBreak:"break-word",position: 'relative',
            boxShadow:"1px 1px 3px 1px grey",
            height:`${props.height}`,
            width:`${props.width}`,overflow:"scroll"}}>
        <div>


            <div style={{fontSize:"140%",paddingBottom:"5px"}}>^XA</div>
            {generatedZebraCode.map((element,index)=>{
                return<div style={{fontSize:"140%",paddingBottom:"5px"}} 
                key={index}>{element.zebraCode}</div>
            })}
            <div style={{fontSize:"140%",paddingBottom:"5px"}}>^XZ</div>


        </div>



    </Fade>
    )

}