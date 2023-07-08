function myMouseDown(e)
{
    color=document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;


    radius=document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}



















function myMouseMove(e)
{
    positionMouseX = e.clientX - Canvas.offstLeft;
    positionMouseY = e.clientY - Canvas.offstLeft;

    if (mouseEvent =="mouseDown"){
        console.log("current position of x and y coordinates =");
        console.log("x =" + positionMouseX +"y =" + positionMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctxlineWidth= widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 ,2 * MathPI);
        ctx.stroke();
    }
    
}