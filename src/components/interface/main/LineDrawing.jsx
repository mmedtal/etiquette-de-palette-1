import { useEffect, useRef, useState } from "react"
import useLineDrawing from "../../../hooks/useLineDrawing"
import { useDispatch } from "react-redux"

export default function LineDrawing(props){

    const dispatch = useDispatch()
    const [color,setColor]=useState("black")
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: props.left, y: props.top });
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const parentRect = props.paletteWorkZoneRef.current.getBoundingClientRect();
      const newX = e.clientX - parentRect.left - dragOffset.x;
      const newY = e.clientY - parentRect.top - dragOffset.y;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, props.paletteWorkZoneRef]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  
  useEffect(()=>{
    console.log("props.transform : ",props.transform)

    //console.log("props.lineDrawingHeight : ",props.lineDrawingHeight)
  },[])
  
    return(
        <div    
                style={{
                        //width:`${props.lineLength}px`,
                        width:props.width+"px",
                        position:"absolute",
                        transform:`rotate(${props.angle})`,
                        left: position.x + 'px',
                        top: position.y + 'px',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        height:props.height+"px"
                
                        ,backgroundColor:color}}
                        onMouseDown={handleMouseDown}>

        </div>
    )
}