import { useEffect, useRef, useState } from "react"
import useLineDrawing from "../../../hooks/useLineDrawing"
import { useDispatch, useSelector } from "react-redux"
import usePropertiesFromStore from "../../../hooks/usePropertiesFromStore";
import useBoxAndLineConverterToZebraCode from "../../../hooks/useBoxAndLineConverterToZebraCode";

export default function LineDrawing(props){

    const dispatch = useDispatch()

    const lineRef=useRef(null)


    const [height,setHeight] = useState(props.height)



    const [color,setColor]=useState("black")      
    const [isDragging, setIsDragging] = useState(false);

    
    const [positionXFromRedux,leftPosition,setLeftPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionX",props.whichChildIam,
    props.left);
    const [positionYFromRedux,topPosition,setTopPosition] = 
    usePropertiesFromStore("leftAsideControllersReducer","positionY",props.whichChildIam,
    props.top);

    const [largeurFromReduxStore,largeur,setLargeur] = 
    usePropertiesFromStore("leftAsideControllersReducer","largeur",props.whichChildIam,
    props.width);


    const [longeurFromReduxStore,longeur,setLongeur] = 
    usePropertiesFromStore("leftAsideControllersReducer","longeur",props.whichChildIam,
    props.height);

    const [rotationFromReduxStore,rotation,setRotation] = 
    usePropertiesFromStore("leftAsideControllersReducer","rotation",props.whichChildIam,
    props.angle);

    const [epaisseurFromReduxStore,epaisseur,setEpaisseur] = 
    usePropertiesFromStore("leftAsideControllersReducer","epaisseur",props.whichChildIam,
    1);

    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const parentRect = props.paletteWorkZoneRef.current.getBoundingClientRect();
      const newX = e.clientX - parentRect.left - dragOffset.x;
      const newY = e.clientY - parentRect.top - dragOffset.y;

      setLeftPosition(newX)
      setTopPosition(newY)
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


    function handleFocus(){
      dispatch({type:"ACTIVE_HEADER_ICON",payload:"Formes"})
      dispatch({type:"AFFECTER_TEXT_INPUT_CLIQUE",payload:props.whichChildIam})
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})

    }
    
    useEffect(()=>{
      dispatch({type:"AFFECTER_TEXT_INPUT_CLIQUE",payload:props.whichChildIam})

      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
        
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})

      dispatch({type:"MODIFIER_ROTATION",payload:rotation})

      dispatch({type:"MODIFIER_LARGEUR",payload:largeur})

      dispatch({type:"MODIFIER_LONGUEUR",payload:longeur})
      
      dispatch({type:"MODIFIER_EPAISSEUR",payload:epaisseur})

      },[leftPosition,topPosition,rotation,largeur,epaisseur,longeur]) 
      

      useEffect(()=>{
        if(props.angle==90){
          setLargeur(epaisseur)
        }
        if(props.angle==0){
          setLongeur(epaisseur)
          setHeight(epaisseur)
        }

      },[epaisseur])
      
      
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
      dispatch({type:"ACTIVE_HEADER_ICON",payload:"Formes"})
      
        
    }
    const [submitZebraCode,setSubmitZebraCode]=useState(true)

    const [lineBorder,setLineBorder]=useState("")
    function handleMouseEnter(){
      setSubmitZebraCode(false)
      setLineBorder("2px tomato solid")
    }
    function handleMouseLeave(){
      setSubmitZebraCode(true)
      setLineBorder("")
    }

    const [fieldOrigin,keyCommand,lineDensity] =
    useBoxAndLineConverterToZebraCode(props.whichChildIam,leftPosition,topPosition,largeur,height,rotation,submitZebraCode,epaisseur);

    useEffect(()=>{
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
    dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})
        
        dispatch({type:"MODIFIER_LARGEUR",
        payload:largeur})

        dispatch({type:"MODIFIER_LONGUEUR",
        payload:longeur})

        dispatch({type:"MODIFIER_EPAISSEUR",
        payload:epaisseur})

        
    } 
,[])

    return(
        <div    
              ref={lineRef}
                style={{

                        border:lineBorder,
                        width:largeur+"px",
                        position:"absolute",
                        transform:`rotate(${rotation})`,
                        left: leftPosition + 'px',
                        top: topPosition + 'px',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        height:longeur+"px"
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
                        tabIndex={0}
                        onKeyDown={detectPressedKey}
                        onClick={handleClick}
                        >


        </div>
    )
}