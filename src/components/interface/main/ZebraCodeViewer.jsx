import { Fade } from "@mui/material";

export default function ZebraCodeViewer(props){


    return(
    <Fade direction="up" in={props.selectedTab === 1} timeout={500}
            style={{position: 'relative',boxShadow:"1px 1px 3px 1px grey",height:props.height==0?"450px":`${props.height}px`,width:props.width==0?"600px":`${props.width}px`}}>
        <div>


        </div>



    </Fade>
    )

}