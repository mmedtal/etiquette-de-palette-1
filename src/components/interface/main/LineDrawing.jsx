import useLineDrawing from "../../../hooks/useLineDrawing"

export default function LineDrawing(props){

    const {handleMouseDown,handleMouseUp,handleMouseMove,lineLength}=useLineDrawing();




    return(
        <div    
                style={{width:lineLength,height:"2px",backgroundColor:"red"}}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>

        </div>
    )
}