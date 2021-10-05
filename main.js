var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="";
var colour="red";
var last_x, last_y, current_x, current_y;

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x =" + current_position_of_mouse_x+"y =" + current_position_of_mouse_y);



        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
 last_x=current_x;
 last_y=current_y;   
}