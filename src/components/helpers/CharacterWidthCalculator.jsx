import { useEffect, useRef, useState } from "react";

export default function CharacterWidthCalculator({ fontSize, character,getCharachterWidthFromCharacterWidthCalculator }){


    const [characterFromParent,setCharacterFromParent] = useState("")
    const spanRef = useRef(null);

    const singleValueArray=[];
    useEffect(() => {
        //console.log("character ",character)
        //console.log("font size from parent :",fontSize)
        if(character===undefined){
            character ="!"
            return
        }
        setCharacterFromParent(character)
        const span = spanRef.current;
        span.style.fontSize = fontSize;
        span.innerText=character;
        //console.log("offsetWidthWhen fontSize changes :",span.offsetWidth)
        
        //console.log("the fontSize is qsdqsd: ",fontSize)
        //when the space key is pressed, then replace it with the 'l' character
        if(character===" "){
            //console.log("space key pressed ddd")
            span.innerText="!"
        }
        //console.log("the character width is : ",span.offsetWidth)
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
        
    }, [character]);

    return (
        <span ref={spanRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}>
            {characterFromParent}
        </span>
    );
}