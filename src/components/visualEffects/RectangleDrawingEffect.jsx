export default function RectangleDrawingVisualEffect({mouseDownXPosition,cursorXPosition,
    mouseDownYPosition,cursorYPosition})
{


    return (
        <div
                    style={{
                        position: 'absolute',
                        left:Math.min(mouseDownXPosition,cursorXPosition),
                        top:Math.min(mouseDownYPosition,cursorYPosition),
                        height:Math.abs(mouseDownXPosition - cursorXPosition),
                        width:Math.abs(mouseDownXPosition - cursorXPosition),
                        transformOrigin:"0 0",
                        transform:`rotate(${ Math.abs(mouseDownXPosition - cursorXPosition)< 
                            Math.abs(mouseDownYPosition - cursorYPosition)?"0":"90"})`,
                        background: 'tomato', // Change color as needed
                        pointerEvents: 'none', // Prevent the line from interfering with mouse events
                    }}
                />
    )
}