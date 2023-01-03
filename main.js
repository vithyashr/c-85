canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

Gc_W=75
Gc_H=100


bg_img = "parkingLot.jpg";
Gc_img = "car2.png";

Gc_X=5
Gc_Y=225

function add() {
	bg_img_t = new Image()
    bg_img_t.onload = uploadBackground
    bg_img_t.src =bg_img

    Gc_img_t = new Image()
   Gc_img_t.onload = uploadgreencar
    Gc_img_t.src =Gc_img
}

function uploadBackground() {
	ctx.drawImage(bg_img_t, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	
	ctx.drawImage(Gc_img_t, Gc_X, Gc_Y, Gc_W, Gc_H)
}
	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	console.log("up")
    if(Gc_Y >= 0){
        console.log(Gc_Y)
        Gc_Y=Gc_Y - 10
        uploadBackground()
        uploadgreencar()
    }
}

function down()
{
	console.log("down")
    if(Gc_Y <= 500){
        console.log(Gc_Y)
        Gc_Y=Gc_Y + 10
        uploadBackground()
        uploadgreencar()
    }

}

function left()
{
	console.log("left")
    if(Gc_X >= 0){
        console.log(Gc_X)
        Gc_X=Gc_X - 10
        uploadBackground()
        uploadgreencar()
    }
}

function right()
{
	console.log("right")
    if(Gc_X <= 700){
        console.log(Gc_X)
        Gc_X=Gc_X + 10
        uploadBackground()
        uploadgreencar()
    }
}
