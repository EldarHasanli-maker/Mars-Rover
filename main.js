canvas=document.getElementById ("myCanvas");
ctx=canvas.getContext("2d");
Mars_images_array=["Mars1.jfif","Mars2.jpg","Mars3.jpg","Mars4.jpg"];
random_number=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=Mars_images_array[random_number];
rover_image="rover.png";
function add(){
    background_img=new Image();
    background_img.onload=upload_background;
    background_img.src=background_image;
    rover_img=new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;
}
function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log (keyPressed);
    if (keyPressed=="38"){
        up();
        console.log ("up");
        
    }
    if (keyPressed=="40"){
        down();
        console.log ("down");
    }
    if (keyPressed=="37"){
        left();
        console.log ("left");

    }
    if (keyPressed=="39"){
        right();
        console.log ("right");
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log ("When Up arrow is pressed X="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }

    
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log ("When Down arrow is pressed X="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }

    
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log ("When Left arrow is pressed X="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }

    
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log ("When Right arrow is pressed X="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }

    
}
