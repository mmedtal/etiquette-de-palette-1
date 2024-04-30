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

//        console.log("the element : ",character," size (which is span.offsetWidth ) is  :",span.offsetWidth);

        // if(character[character.length - 1]==0){
        //     return
        // }
        // console.log("chara from parent ",character[character.length - 1])
        // setCharacterFromParent(character[character.length - 1])
        // const span = tempRef.current;
        // span.style.fontSize = fontSize;
        // span.innerText = characterFromParent;
        // console.log("span.innerText :",span.innerText)
     
        // getCharachterWidthFromCharacterWidthCalculator(span.offsetWidth);
        // console.log("character width frm ueffcr: ",span.offsetWidth)
        
    }, [fontSize, character]);

    return (
        <span ref={spanRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}>
            {characterFromParent}
        </span>
    );
}