import { useEffect, useRef, useState } from "react"
import useLineDrawing from "../../../hooks/useLineDrawing"
import { useDispatch } from "react-redux"

export default function LineDrawing(props){

    //const lef={props.left}
    const dispatch = useDispatch()
    const [color,setColor]=useState("black")

/*
    const lineDrawingRef=useRef(null)
    const [startXPosition,setStartXPosition] =useState(props.left)
    const [startYPosition,setStartYPosition] =useState(props.top); 

    const [color,setColor]=useState("black")

    const [isDragging,setIsDragging] = useState(false)

    function handleMouseEnter(){
        setColor("red")
        dispatch({type:"SELECT_LINE"})
    }

    function handleMouseLeave(){
        setColor("black")
        dispatch({type:"UNSELECT_LINE"})
    }

    function handleFocus(){
        //setColor("red")
    }

    function handleClick(){
        //setColor("red")
        //if()
        //console.log("props.cursorXPosition : ",props.cursorXPosition)
        
        //setStartXPosition(props.cursorXPosition)
        //setStartXPosition(100)
    }
    const [dx,setDx]=useState(0)
   const [dy,setDy]=useState(0)
   
   function handleMouseDown(e){
        //console.log("i'm mouse downed")
        //console.log("i'm mouse downed, props.cursorXPosition : ",props.cursorXPosition)
        setIsDragging(true)
        //setStartXPosition(props.cursorXPosition)
        //setStartXPosition(props.paletteWorkZoneRef.current.getBoundingClientRect().left)
        //setDx(e.clientX -props.paletteWorkZoneRef.current.getBoundingClientRect().left);
        //setDy(e.clientY -props.paletteWorkZoneRef.current.getBoundingClientRect().top)
        //lineDrawingRef.style.transform = `translate(${dx}px, ${dy}px)`
   }

   function handleMouseUp(){
        console.log("i'm mouse uped")
        setIsDragging(false)
        //setStartXPosition(props.cursorXPosition)
   }
   function handleMouseMove(e){
    if(isDragging){
        setStartXPosition(e.clientX - props.paletteWorkZoneRef.current.getBoundingClientRect().left)
        setStartYPosition(e.clientY - props.paletteWorkZoneRef.current.getBoundingClientRect().top)
    }
  }
*/
    /*
    useEffect(()=>{

    },[])
    */
   

   /*
   useEffect(()=>{
    console.log("cursor HHHHHHH : ",props.cursorXPosition)
  
   },[props.paletteWorkZoneRef.current.getBoundingClientRect().left])
   */
  /*
  useEffect(()=>{
    console.log("cccccccccccccccc")
  },[props.handleMouseLineMove()])
   */
  

  //gt cd 
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
    return(
        <div    
               // ref={lineDrawingRef}
                style={{width:`${props.lineLength}px`,
                //transform:`translate(${dx}px, ${dy}px)`,
                        position:"absolute",
                        //left:`${startXPosition}px`,top:`${startYPosition}px`,
                        left: position.x + 'px',
                        top: position.y + 'px',
                cursor: isDragging ? 'grabbing' : 'grab',
                height:"1px",backgroundColor:color}}
                onMouseDown={handleMouseDown}
                // onMouseUp={handleMouseUp}
                // onMouseMove={handleMouseMove}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                //onFocus={handleFocus}
                // onClick={handleClick}
                //onDrag={()=>console.log("cc")}
                >

        </div>
    )
}