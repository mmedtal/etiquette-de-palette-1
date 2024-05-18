export default function LineDrawingVisualEffect({mouseDownXPosition,cursorXPosition,
    mouseDownYPosition,cursorYPosition})
{


    return (
        <div
                    style={{
                        position: 'absolute',
                        left:mouseDownXPosition<cursorXPosition?mouseDownXPosition:cursorXPosition,
                        //left:cursorXPosition,
                        top:mouseDownYPosition<cursorYPosition?mouseDownYPosition:cursorYPosition,
                        //top:cursorYPosition,
                        //top:mouseDownYPosition,
                        /*width: Math.sqrt(Math.pow(cursorXPosition - mouseDownXPosition, 2) + 
                        Math.pow(cursorYPosition - mouseDownYPosition, 2)),
                        */
                        /*
                        width:Math.abs(mouseDownXPosition - mouseUpXPosition)>Math.abs(mouseDownXPosition - mouseUpXPosition)?
                        Math.abs(mouseDownXPosition - mouseUpXPosition):1,
                        */

                       // height: 2, // Adjust this for line thickness
                       
            //absDeltaX = Math.abs(mouseDownXPosition - cursorXPosition)
            //absDeltaY = Math.abs(mouseDownYPosition - cursorYPosition)
                        //transformOrigin: '0 0',
                        height:Math.abs(mouseDownXPosition - cursorXPosition)>
                        Math.abs(mouseDownYPosition - cursorYPosition)?2:Math.abs(mouseDownYPosition - cursorYPosition),
                        width:Math.abs(mouseDownXPosition - cursorXPosition)>
                        Math.abs(mouseDownYPosition - cursorYPosition)?Math.abs(mouseDownXPosition - cursorXPosition):2,

                        transformOrigin:"0 0",
                        transform:`rotate(${ Math.abs(mouseDownXPosition - cursorXPosition)< 
                            Math.abs(mouseDownYPosition - cursorYPosition)?"0":"90"})`,
                        background: 'tomato', // Change color as needed
                        pointerEvents: 'none', // Prevent the line from interfering with mouse events
                    }}
                />
    )
}