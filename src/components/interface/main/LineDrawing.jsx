import { useEffect, useRef, useState } from "react"
import useLineDrawing from "../../../hooks/useLineDrawing"
import { useDispatch, useSelector } from "react-redux"
import usePropertiesFromStore from "../../../hooks/usePropertiesFromStore";

export default function LineDrawing(props){

    const dispatch = useDispatch()

    const lineRef=useRef(null)


    const [width,setWidth]=useState(props.width)
    const [height,setHeight] = useState(props.height)

    /*
    const [positionXFromRedux,leftPosition,setLeftPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionX",props.whichChildIam,props.left);
    const [positionYFromRedux,topPosition,setTopPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionY",props.whichChildIam,props.top);
    const [rotationFromReduxStore,rotation,setRotation] = 
    usePropertiesFromStore("leftAsideControllersReducer","rotation",props.whichChildIam,0);
    */

    const [color,setColor]=useState("black")      
    const [isDragging, setIsDragging] = useState(false);

    
    const [position, setPosition] = useState({ x: props.left, y: props.top });
    const [positionXFromRedux,leftPosition,setLeftPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionX",props.whichChildIam,
    {x:props.left,y:props.top});
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
    //console.log("props.transform : ",props.transform)

    //console.log("props.lineDrawingHeight : ",props.lineDrawingHeight)
  },[])
  

    /*this is also causing a bug text
    function handleFocus(){
      // setWidth(prev => prev == "1" ? prev+5: prev);
      //console.log("i'm focused")
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:position.x})
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:position.y})
        dispatch({type:"MODIFIER_ROTATION",payload:props.angle})
    }*/
    
    /* causing a bug, text jumping
    useEffect(()=>{
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:position.x})
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:position.y})

        dispatch({type:"MODIFIER_ROTATION",payload:props.angle})

      },[position.x,position.y]) 
      */


    
      /*
    const whichTextInputIsClickedFromReduxStore = useSelector(state=>state.leftAsideControllersReducer.whichTextInputIsClicked)
      function handleLineBlur(){
        if(whichTextInputIsClickedFromReduxStore==props.whichChildIam){
            lineRef.current.focus();
            //dispatch({type:"MODIFIER_TAILLE_POLICE",payload:fontSize})
            dispatch({
              type:"MODIFIER_POSITION_X",
              payload:position.x})
            dispatch({
              type:"MODIFIER_POSITION_Y",
              payload:position.y})
            dispatch({type:"MODIFIER_ROTATION",payload:props.angle})
        }
      }*/

      /*
      function detectPressedKey(e){
        let cursorPos = e.target.selectionStart
        
        if(cursorPos==0 && e.key=="ArrowLeft"){
            setPosition.x(prevPosition=>prevPosition-1)
        }
        if(e.key=="ArrowRight"){
          setPosition.x(prevPosition=>prevPosition+1)
        }
        if(e.key=="ArrowUp"){
          setPosition.y(prevPosition=>prevPosition-1)
        }
        if(e.key=="ArrowDown"){
          setPosition.y(prevPosition=>prevPosition+1)
        }
        
    }*/
    function handleClick(){
      lineRef.current.focus()
      //lineRef.current.style.backgroundColor="green"
      
      // si vertical alr fait:
      //if(props.absDeltaY>props.absDeltaX){
        //console.log("entered")
        
      //}
    }

    function handleMouseEnter(){
      setWidth(prev => prev == "1" ? prev+5: prev);
      setHeight(prev => prev == "1" ? prev+5: prev);

    }
    function handleMouseLeave(){
      setWidth(prev => prev == "6" ? 1: prev);
      setHeight(prev => prev == "6" ? 1: prev);

    }
    return(
        <div    
              ref={lineRef}
                style={{

                        //width:`${props.lineLength}px`,

                        borderRadius:"50px",
                        width:width+"px",
                        position:"absolute",
                        transform:`rotate(${props.angle})`,
                        left: position.x + 'px',
                        top: position.y + 'px',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        height:height+"px"
                        ,backgroundColor:color,
                        /*
                        ':focus':{
                          backgroundColor:"red"
                        }*/
                      }}
                        onMouseDown={handleMouseDown}
                        
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        //onFocus={handleFocus}
                        //onBlur={handleLineBlur}
                        tabIndex={0}
                        //onKeyDown={detectPressedKey}
                        onClick={handleClick}
                        >


        </div>
    )
}