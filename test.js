var image = new Image();
image.src = "box.png";
var eventType, keyCode
var playerX=100, playerY=100;
var mouseX, mouseY;
var isDrag;





image.addEventListener('load', render);

window.addEventListener('keydown', onKeyDown);

window.addEventListener('keyup', onKeyUp);

window.addEventListener('mousedown', onMouseDown)
window.addEventListener('mouseup', onMouseUp)
window.addEventListener('mousemove', onMouseMove)


function render() {
  var canvas = document.getElementById('gameCanvas')
  var context = canvas.getContext('2d')

  canvas.width = 500;
  canvas.height = 500;

  context.drawImage(image, playerX, playerY);


  context.fillStyle = '#0000FF'
  context.font = '12px Arial'
  context.textBaseLine = 'top'
  context.fillText('KeyCode is : ' + keyCode, 10, 10)
  context.fillText('Event Type is : '+ eventType, 10, 25)



}

function onKeyDown(e) {
  keyCode = e.keyCode
  eventType = e.type


  if(e.keyCode == 37)
  {
    playerX -= 10
  }
  else if(e.keyCode == 38)
  {
    playerY -= 10
  }
  else if(e.keyCode == 39)
  {
    playerX += 10
  }
  else if(e.keyCode == 40)
  {
    playerY += 10
  }
  render();
}
function onKeyUp(e) {
  keyCode = e.keyCode
  eventType = e.type
  render();
}

function onMouseDown(e)
{
    eventType = e.type
    isDrag = true;
    render();
}
function onMouseUp(e)
{
    eventType = e.type
    isDrag = false;
    render();
}
function onMouseMove(e)
{
    eventType = e.type
    mouseX =e.clientX
    mouseY =e.clientY
    if(isDrag)
    {
      playerX = mouseX;
      playerY = mouseY;



    }
    render();
}
  //context.fillRect(0, 0, 40, 40)

  //context.moveTo(10, 10)
  //context.lineTo(100, 30)
  //context.stroke();

//  context.beginPath()
  //arc(centerX, conterY, radius, 시작각도, 끝각도)
  //context.arc(50, 50, 50, 0, Math.PI * 2)
//  context.stroke();


//primittive type 원시 자료형
//arr = 1//number - char int long float double
//arr = true//boolean - bool
//arr = null//(void*)0
//arr = undefined

//first class object
//arr = "a"//string length charAt(0)
//arr = []//array length [0]
//arr = {
//  "type":"A"
//  "a":1,
//  "b":2
//}
//접근방법
//arr.type
//arr["type"]
//arr = function() {}//function

//for(var i in arr)
//console.log(arr)
