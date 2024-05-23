
/*this function is just to for the user, i mean it reflects stuff from the user perspetive,
the user don't know about how the printer sees things (which is in dots), they don't have to, and 
they don't care.
But when the user would mesure the a milimiters they just added or deleted with a ruler on the screen
PC, they won't get exactly or all the time one milimiter, because it differs from PC to PC, because each
PC might have different PPI (pixels per inch).

would it be usefull to convert from milimiters to dots? maybe no, because we already have that,
but are the milimiters the user change, are there real ones or not? if they are real ones then no need
to transfer from milimiters to dots.

it think what important is to convert from pixels to dots, and that's what we should send to the zebra
font translator (the custom hook)

*/
function milimitersToPixelsConverter(screenResolutionInPpiFromReduxStore,valueInPixelsFromReduxStore){
    const  convertedValue = (screenResolutionInPpiFromReduxStore/25.4)*valueInPixelsFromReduxStore;
    return convertedValue;
}

function pixelsToMilimitersConverter(screenResolutionInPpiFromReduxStore,valueInPixelsFromReduxStore){
    const pixelsPerMilimiter = screenResolutionInPpiFromReduxStore/25.4;
    //which mean that one milimiter has the value pixelsPerMilimiter
    const valueInMilimiters =  valueInPixelsFromReduxStore/ pixelsPerMilimiter; 
    return valueInMilimiters.toFixed(2);
}

/*
function pixelsToMilimitersFontConverter(screenResolutionInPpi,printerDpi,fontBaseHeightInDots,newFontHeightInDots){
    
    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;

    const screenPixelsInOneMilimter = screenResolutionInPpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH; 
    //const valueInMilimiters = 
}
*/

//fontBaseHeightInDots; i would work with it if css had also control over font width


/*the idea here is to get exactly as far as possible the representation of the end result label to the user
  with no offsets as far as possible */
/* and that's the global idea here */
function equivalentsPixelsToOneRealLifeMilimiter(screenResolutionInPpi){
    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;
    const pixelsPerMilimiter = screenResolutionInPpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH;
    return pixelsPerMilimiter;
}

function equivalentDotsToOneRealLifeMilimiter(printheadInDpi){
    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;
    const dotsPerMilimiter = printheadInDpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH;
    return dotsPerMilimiter;
}

//this what CSS property fontSize of text is going to be equal to:
/*and also this, because i want to work with pixels in font size, working directly with mm 
can lead to unconsistencies in different screens.
one milimiter in real life is different (or can be diff?) to one milimiter in screen*/
//this is how many pixels a character should take in the screen label, or what to give fontSize
//function milimitersToPixelsFontSizeConverter(screenResolutionInPpi,printerDpi,heightInDots){
/*based on it's size in dots this is how it should be represented in pixels to reflect
  to it's equivalent in real life. taken in account screenResolutionInPpi and printerDpi
*/
function equivalentFontSizeInPixels(screenResolutionInPpi,printerDpi,heightInDots){

    const pixelsPerMelimiter = equivalentsPixelsToOneRealLifeMilimiter(screenResolutionInPpi);
    //5 px/mm
    //how many dots are in one milimiter in a printed paper, it's controlled by the printer DPI
    //printhead in dpmm
    const dpmm   = equivalentDotsToOneRealLifeMilimiter(printerDpi)

    //one character size, because CSS property fontSize value is the size of each character
    const characterSizeInMilimitersInPaper = heightInDots/dpmm; //this is how it would look irl label

    /*this is how it should look in screen so that it corresponds to real life result.
      the idea is that, it doesn't matter how big it looks as far as the other elements are big too,
      because it's relative to other elements in the label, and to the label as well.
      the idea is that the label that te limits of the label are the one irl, so if the character is big
      compared(relative) to the label then it will big in real life too.
    */

    //const characterSizeInPixelsInScreen=characterSizeInMilimitersInPaper*screenPixelsInOneMilimter;
    const characterSizeInPixels=characterSizeInMilimitersInPaper*pixelsPerMelimiter;
    //this value is the one to send to fontSize => 
    return characterSizeInPixels;
}
//walakin daba dak leftAside fontSize in mm wach howa irl wla kifach
//the leftAside mm input is in the same spirit as above
/*deprecated : function pixelsToMilimitersFontSizeConverter(){
    

}*/

/*meaning when i change the left aside font size input in mm, how much pixels that should reflects 
on, the leftaside font size input is mm in real life, but the consequences of change in screen are in 
pixels, so it's mean that if you mesure the resultante of 1mm change in screen pixels in milimiters
you might not find exactly one real life milimiter. 
but when the user changes it, he is changing the real life output.
if he add 1mm then input will have 1mm added.
*/
function milimtersToPixelsConverter(screenResolutionInPpi,changeInMilimiters){
    const pixelsPerMelimiter = equivalentsPixelsToOneRealLifeMilimiter(screenResolutionInPpi);
    const pixels = pixelsPerMelimiter * changeInMilimiters;
    return pixels;
}


/*meaning that when i will change the font size in milimiters what would be the resultante in dots,
the result will be feed up to equivalentFontSizeInPixels, as it's third argument.
je pense que ça n'a pas de relation avec le résultat de l'écran, hmm
*/
function milimitersToDotsConverter(printheadDpi){
    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;
    const dpmm = printheadDpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH;

}

//this what CSS property fontSize of text is going to be equal to:
function milimitersToPixelsFontConverterV_0(screenResolutionInPpi,printerDpi,heightInDots){
    
    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;
    
    //for a given ppi how many pixels per mm
    //complicated name const screenPixelsInOneMilimter = screenResolutionInPpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH;//pxpmm
    const screenPixelsInOneMilimter = screenResolutionInPpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH;//pxpmm
    //5 px/mm
    //how many dots are in one milimiter in a printed paper, is controller by the printer DPI
    const paperDotsInOneMilimiter   = printerDpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH; //dpmm
    //6 dot/mm
    const oneFontCharacterWillNeedThisMilimitersInPaper = heightInDots/paperDotsInOneMilimiter;
    //1/6 mm
    const paperFontCharacterInMilimitersWillNeedThisPixelsInScreen  = 
    oneFontCharacterWillNeedThisMilimitersInPaper*screenPixelsInOneMilimter;
    
    //paperFontCharacterInMilimitersWillNeedThisPixelsInScreen;this value is the one to send to fontSize => 
    
    return paperFontCharacterInMilimitersWillNeedThisPixelsInScreen;
}

//this function help in how the size is displayed in milimiter (to the user), size in store is in pixels

function pixelsToMilimitersFontConverter_V_0(fontSizeInPixels,screenResolutionInPpi){
    // i have a value in pixels in the store

    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;

    //how many pixels are in one milimiter
    const screenPixelsInOneMilimter = screenResolutionInPpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH; 

    const fontSizeInMilimeters = fontSizeInPixels/screenPixelsInOneMilimter;

    return fontSizeInMilimeters;

}



//because the user will increment or decrement the font in milimiters
//this would return the equivalent of one single milimiter in dots
//but dots in paper
function militersToDotsConverter(printerDpi,changeInMilimiters){

    const NUMBER_OF_MILIMITERS_IN_ONE_INCH = 25.4;
    
    const paperDotsInOneMilimiter   = printerDpi/NUMBER_OF_MILIMITERS_IN_ONE_INCH; 

    const numberOfDots = changeInMilimiters * paperDotsInOneMilimiter;

    return numberOfDots;

}
/*  when i will increase the size by 1mm in left aside, the fontSize should increase of 5.69px
    irl it's like adding 6 dots

*/
export {milimitersToPixelsConverter,pixelsToMilimitersConverter,
    militersToDotsConverter}