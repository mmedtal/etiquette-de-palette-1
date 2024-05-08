import { useState } from "react";

export default function useLineDrawing(){
    //inclined lines aren't taken in charge in the zebra programming language

    const [isDrawing,setIsDrawing]=useState(false)
    const [startPos,setStartPos] = useState({x:0,y:0})


    function handleMouseDown(e){
        setIsDrawing(true)
        const x = e.clientX;
        const y = e.clientY;
        setStartPos({ x, y });
    }

    function handleMouseDown(){
        setIsDrawing(false)
    }

    function handleMouseMove(e){
        if (!isDrawing) return;
        
        const x = e.clientX;
        const y = e.clientY;


        const deltaX = x - startPos.x;
        //inclinision ou angle
        const deltaY = y - startPos.y

        const length = Math.abs(deltaX)
        const inclinison = Math.abs(deltaY)
        
        
    }

}