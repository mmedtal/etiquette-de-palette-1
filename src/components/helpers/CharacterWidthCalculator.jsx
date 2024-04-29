import { useEffect, useRef, useState } from "react";

export default function CharacterWidthCalculator({ fontSize, character,getCharachterWidthFromCharacterWidthCalculator }){


    const [characterFromParent,setCharacterFromParent] = useState("")
    const spanRef = useRef(null);

    const singleValueArray=[];
    useEffect(() => {
        if(character===undefined){
            return
        }
        setCharacterFromParent(character)
        const span = spanRef.current;
        span.style.fontSize = fontSize;
        span.innerText=character;
        getCharachterWidthFromCharacterWidthCalculator(span.offsetWidth);


     
        
    }, [fontSize, character]);

    return (
        <span ref={spanRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}>
            {characterFromParent}
        </span>
    );
}