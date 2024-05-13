import { useEffect, useState } from "react";

export default function useLineDrawing(){
    //inclined lines aren't taken in charge in the zebra programming language

    const [isDrawing,setIsDrawing]=useState(false)
    const [startPos,setStartPos] = useState({x:0,y:0})

    const [lineLength,setLineLength] = useState(0)

    function handleMouseDownLineDrawing(e){
        setIsDrawing(true)
        //console.log("e.clientX :",e.clientX)
        //console.log("e : ",e);
        //return
        const x = e.clientX;
        const y = e.clientY;
        setStartPos({ x, y });
    }

    function handleMouseUpLineDrawing(){
        setIsDrawing(false)
    }


    function handleMouseMoveLineDrawing(e){
        //if (!isDrawing) return;
        
        const x = e.clientX;
        const y = e.clientY;
        //console.log("handemouse mOV useLinedrawing x ",x)

        //console.log("x : ",x)
        //console.log("startPos : ",startPos)
        const deltaX = x - startPos.x;
        //inclinision ou angle
        const deltaY = y - startPos.y

        const length = Math.abs(deltaX)
        const inclinison = Math.abs(deltaY)
        
        /*
        if (deltaX >= 0) {
            setStartPos(e.clientX);
          } else {
            setStartPos(x);
          }*/
        setLineLength(length)
    }

    /*
    useEffect(()=>{
        //console.log("startPos : ",startPos)
        //console.log("lineLength : ",lineLength)

    },[startPos])
    */
    return {handleMouseDownLineDrawing,handleMouseUpLineDrawing,handleMouseMoveLineDrawing,lineLength,startPos}
}