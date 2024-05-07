import { useEffect, useRef, useState } from "react";

export default function CharacterWidthCalculator({fontSize,inputValue,character,getCharachterWidthFromCharacterWidthCalculator,
                                                    setNewInputWidthWhenFontSizeChanges}){


    const [characterFromParent,setCharacterFromParent] = useState("")
    const spanRef = useRef(null);

    const singleValueArray=[];
    useEffect(() => {
        if(character===undefined){
            character ="!"
            return
        }
        setCharacterFromParent(character)
        const span = spanRef.current;
        span.style.fontSize = fontSize;
        span.innerText=character;
        
        if(character===" "){
            span.innerText="!"
        }
        getCharachterWidthFromCharacterWidthCalculator(span.offsetWidth);


     
        
    }, [character]);


    useEffect(()=>{
        let newWidthWhenFontSizeChanges=0;
        for(let i=0;i<inputValue.length;i++){
            if(character===undefined){
                character ="!"
                return
            }
            setCharacterFromParent(inputValue[i])
            const span = spanRef.current;
            span.style.fontSize = fontSize;
            span.innerText=inputValue[i];
            if(inputValue[i]===" "){
                span.innerText="!"
            }
            newWidthWhenFontSizeChanges=newWidthWhenFontSizeChanges+span.offsetWidth;
        }
        setNewInputWidthWhenFontSizeChanges(newWidthWhenFontSizeChanges)

    },[fontSize])

    return (
        <span ref={spanRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}>
            {characterFromParent}
        </span>
    );
}