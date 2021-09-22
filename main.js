var LastPositionOfX, LastPositionOfY;
Color= "darkgreen";
WidthOfLine= "3";
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var Width= screen.width;
var NewWidth= screen.width-70;
var NewHeight= screen.height-300;
if(Width<992){
    document.getElementById("myCanvas").width=NewWidth;
    document.getElementById("myCanvas").height=NewHeight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log(my_touchstart);
    Color= document.getElementById("Color").value;
    WidthOfLine= document.getElementById("WidthOfLine").value;
    LastPositionOfX= e.touches[0].clientX - canvas.offsetLeft;
    LastPositionOfY= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log(my_touchmove);
    var CurrentPositionOfTouchX= e.touches[0].clientX - canvas.offsetLeft;
    var CurrentPositionOfTouchY= e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle= Color;
    ctx.lineWidth= WidthOfLine;
    console.log("Last and current positions of x and y coordinates = ");
    console.log("Last position of x is "+LastPositionOfX+" last position of y is "+LastPositionOfY);
    console.log("Current position of x is "+CurrentPositionOfTouchX+" current position of y is "+CurrentPositionOfTouchY);
    ctx.moveTo(LastPositionOfX, LastPositionOfY);
    ctx.lineTo(CurrentPositionOfTouchX, CurrentPositionOfTouchY);
    ctx.stroke();
    LastPositionOfX= CurrentPositionOfTouchX;
    LastPositionOfY= CurrentPositionOfTouchY;
}
function cleararea(){
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
}