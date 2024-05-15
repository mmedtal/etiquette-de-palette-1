import { useEffect, useRef, useState } from "react"
import useLineDrawing from "../../../hooks/useLineDrawing"
import { useDispatch, useSelector } from "react-redux"
import usePropertiesFromStore from "../../../hooks/usePropertiesFromStore";
import useBoxAndLineConverterToZebraCode from "../../../hooks/useBoxAndLineConverterToZebraCode";

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

    
    //const [position, setPosition] = useState({ x: props.left, y: props.top });
    //this above is being refactored to those two beneath
    const [positionXFromRedux,leftPosition,setLeftPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionX",props.whichChildIam,
    props.left);
    const [positionYFromRedux,topPosition,setTopPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionY",props.whichChildIam,
    props.top);

    const [rotationFromReduxStore,rotation,setRotation] = 
    usePropertiesFromStore("leftAsideControllersReducer","rotation",props.whichChildIam,
    props.angle);
    


    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const parentRect = props.paletteWorkZoneRef.current.getBoundingClientRect();
      const newX = e.clientX - parentRect.left - dragOffset.x;
      const newY = e.clientY - parentRect.top - dragOffset.y;

      setLeftPosition(newX)
      setTopPosition(newY)
      //setPosition({ x: newX, y: newY });
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
    e.preventDefault();
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  
  useEffect(()=>{
    //console.log("props.transform : ",props.transform)

    //console.log("props.lineDrawingHeight : ",props.lineDrawingHeight)
    //console.log("whichchildiam",props.whichChildIam)
  },[])
  

    ///*this is also causing a bug text
    
    function handleFocus(){
      dispatch({type:"AFFECTER_TEXT_INPUT_CLIQUE",payload:props.whichChildIam})
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})

    }//*/
    
     //causing a bug, text jumping
    useEffect(()=>{
      dispatch({type:"AFFECTER_TEXT_INPUT_CLIQUE",payload:props.whichChildIam})

      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
        
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})

      dispatch({type:"MODIFIER_ROTATION",payload:rotation})

      },[leftPosition,topPosition,rotation]) 
      //*/


    
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

      
      function detectPressedKey(e){
       
        
        if(e.key=="ArrowLeft"){
            e.preventDefault();
            setLeftPosition(prevPosition=>prevPosition-1)
        }
        if(e.key=="ArrowRight"){
          e.preventDefault();
          setLeftPosition(prevPosition=>prevPosition+1)
        }
        if(e.key=="ArrowUp"){
          e.preventDefault();
          setTopPosition(prevPosition=>prevPosition-1)
        }
        if(e.key=="ArrowDown"){
          e.preventDefault();
          setTopPosition(prevPosition=>prevPosition+1)
        }
        
    }
    function handleClick(){
      lineRef.current.focus()
      //lineRef.current.style.backgroundColor="green"
      
      // si vertical alr fait:
      //if(props.absDeltaY>props.absDeltaX){
        //console.log("entered")
        
      //}
    }
    const [submitZebraCode,setSubmitZebraCode]=useState(true)

    const [lineBorder,setLineBorder]=useState("")
    function handleMouseEnter(){
      setSubmitZebraCode(false)
      //setWidth(prev => prev == "1" ? prev+5: prev);
      //setHeight(prev => prev == "1" ? prev+5: prev);
      setLineBorder("2px tomato solid")
    }
    function handleMouseLeave(){
      setSubmitZebraCode(true)
      //setWidth(prev => prev == "6" ? 1: prev);
      //setHeight(prev => prev == "6" ? 1: prev);
      setLineBorder("")
    }

    const [fieldOrigin,keyCommand,lineDensity] =
    useBoxAndLineConverterToZebraCode(props.whichChildIam,leftPosition,topPosition,width,height,rotation,submitZebraCode);

    useEffect(()=>{
      //lineRef.current.focus()
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
    dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})
    } 
,[])
    return(
        <div    
              ref={lineRef}
                style={{

                        //width:`${props.lineLength}px`,
                        // color:"",
                        border:lineBorder,
                        borderRadius:"50px",
                        width:width+"px",
                        position:"absolute",
                        transform:`rotate(${rotation})`,
                        //transform:whichTextInputIsClickedFromReduxStore==props.whichChildIam?`rotate(${rotationFromReduxStore})` :
                        //`rotate(${rotation})`,
                        left: leftPosition + 'px',
                        top: topPosition + 'px',
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
                        onFocus={handleFocus}
                        //onBlur={handleLineBlur}
                        tabIndex={0}
                        onKeyDown={detectPressedKey}
                        onClick={handleClick}
                        >


        </div>
    )
}