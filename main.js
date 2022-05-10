var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function take_snapshot()
{
    save("Mom's Mother's Day Memories")
}

 function new_image()
{
            
	fabric.image.fromURL("Mom's Mother's day Photo.png", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
        top:0,
        left:0
    })
    canvas.add(block_image_object); 
    })
	
}

function playSound(){
    x.play();

}