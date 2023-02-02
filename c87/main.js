canvas=document.getElementById("myCanvas")


ctx=canvas.getContext("2d")


color = "blue"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 ,0 , 2, startangle , endangle);
ctx.stroke();

color = "black"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc( 350,210,startangle , endangle);
ctx.stroke();

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(450,210,startangle , endangle)
ctx.stroke();

color = "orange"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5
ctx.arc(350,210,startangle , endangle);                                                    

color = "green"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400,250,startangle , endangle);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){                             
    mouse_x = e.clientX - canvas.offsetLeft;[0] =x
    mouse_y = e.clientY - canvas.offsetTop; [0] =y

        
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    
     circle(mouse_x , mouse_y);
 
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}





	
