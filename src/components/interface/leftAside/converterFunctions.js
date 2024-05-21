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


export {milimitersToPixelsConverter,pixelsToMilimitersConverter}