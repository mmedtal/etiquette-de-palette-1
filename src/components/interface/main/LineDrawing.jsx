import { useEffect, useRef, useState } from "react"
import useLineDrawing from "../../../hooks/useLineDrawing"
import { useDispatch, useSelector } from "react-redux"
import usePropertiesFromStore from "../../../hooks/usePropertiesFromStore";
import useBoxAndLineConverterToZebraCode from "../../../hooks/useBoxAndLineConverterToZebraCode";

export default function LineDrawing(props){

    const dispatch = useDispatch()

    const lineRef=useRef(null)


    //const [width,setWidth]=useState(props.width)
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


    //to get where is the cursor on pos on the parent
    const [cursorXPositionOnParent,setCursorXPositionOnParent]=useState(0)
    const [cursorYPositionOnParent,setCursorYPositionOnParent]=useState(0)

    const [mouseDownXPositionOnParent,setMouseDownXPositionOnParent]=useState(0)
    const [mouseDownYPositionOnParent,setMouseDownYPositionOnParent]=useState(0)


    
    //const [position, setPosition] = useState({ x: props.left, y: props.top });
    //this above is being refactored to those two beneath
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

    /*
    const [epaisseurFromReduxStore,epaisseur,setEpaisseur] = 
    usePropertiesFromStore("leftAsideControllersReducer","epaisseur",props.whichChildIam,
    props.angle);
    */


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


      //setCursorXPositionOnParent(e.clientX-parentRect)
      
      //setCursorYPositionOnParent(e.clientY-parentRect.top)

      //console.log("cursor pos from child, e.clientY-parentRect.top is : ",e.clientY-parentRect.top)

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
    //props.disableLineDrawingOnLineDrawingClick();
    e.preventDefault();
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setDragOffset({ x: offsetX, y: offsetY });


    const parentRect = props.paletteWorkZoneRef.current.getBoundingClientRect();


    setMouseDownXPositionOnParent(e.clientX-parentRect.left)
    setMouseDownYPositionOnParent(e.clientY-parentRect.top)
  };

  
  useEffect(()=>{
    //console.log("props.transform : ",props.transform)

    //console.log("props.lineDrawingHeight : ",props.lineDrawingHeight)
    //console.log("whichchildiam",props.whichChildIam)
  },[])
  

    ///*this is also causing a bug text
    
    function handleFocus(){
      //setLineBorder("2px tomato solid")
      dispatch({type:"ACTIVE_HEADER_ICON",payload:"Formes"})
      dispatch({type:"AFFECTER_TEXT_INPUT_CLIQUE",payload:props.whichChildIam})
      dispatch({
        type:"MODIFIER_POSITION_X",
        payload:leftPosition})
      dispatch({
        type:"MODIFIER_POSITION_Y",
        payload:topPosition})
        dispatch({type:"MODIFIER_ROTATION",payload:rotation})

      dispatch({
        type:"MODIFIER_LONGUEUR",
        payload:longeur
      })

      dispatch({
        type:"MODIFIER_EPAISSEUR",
        payload:epaisseur
      })

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

      dispatch({type:"MODIFIER_LARGEUR",payload:largeur})

      dispatch({type:"MODIFIER_LONGUEUR",payload:longeur})
      
      dispatch({type:"MODIFIER_EPAISSEUR",payload:epaisseur})

      if(largeur<=0 || longeur<=0){
        //console.log("what ?! i disapeared?!")
        props.liftInputValueToParent(props.whichChildIam,"")
      }      
      },[leftPosition,topPosition,rotation,largeur,epaisseur,longeur]) 
      //*/

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
      //props.disableLineDrawingOnLineDrawingClick();
      lineRef.current.focus()
      dispatch({type:"ACTIVE_HEADER_ICON",payload:"Formes"})
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
    useBoxAndLineConverterToZebraCode(props.whichChildIam,leftPosition,topPosition,largeur,height,rotation,submitZebraCode,epaisseur);

    useEffect(()=>{
      //lineRef.current.focus()
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

    /*
    function handleLineBlur(){
      console.log("inblured")
        if(largeur<=0 || longeur<=0){
          console.log("what ?! i disapeared?!")
        }      
    }*/

    return(
      <>
        <div    
              ref={lineRef}
                style={{

                        //width:`${props.lineLength}px`,
                        // color:"",
                        border:lineBorder,
                        //borderRadius:"50px",
                        width:largeur+"px",
                        position:"absolute",
                        transform:`rotate(${rotation})`,
                        //transform:whichTextInputIsClickedFromReduxStore==props.whichChildIam?`rotate(${rotationFromReduxStore})` :
                        //`rotate(${rotation})`,
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
                        //onBlur={handleLineBlur}
                        tabIndex={0}
                        onKeyDown={detectPressedKey}
                        onClick={handleClick}>


        </div>
      </>
    )
}