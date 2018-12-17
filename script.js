function goback(){
window.history.back()	
}
function goforward(){
window.history.forward()	
}
function goto(){
var whatpage=document.getElementById('where').value
window.history.go(whatpage)
}
var x=100,y=150;
function pos(dx,dy) {
    if (!document.getElementById) return;
    x += 30*dx;
    y += 30*dy;
    obj = document.getElementById("square");
    obj.style.top=y + "px";
    obj.style.left=x + "px";
}
function hide() {
    if (!document.getElementById) return;
    obj = document.getElementById("square");
    obj.style.display="none";
}
function show() {
    if (!document.getElementById) return;
    obj = document.getElementById("square");
    obj.style.display="block";
}
function header() {
	document.getElementById('larrythelobster').innerHTML = document.getElementById('oldmanjenkins').value
}

function malacharmin(){
document.getElementById('beeb').style.height = '200px'
}

function ultrasoftuels(){
document.getElementById('beeb').style.height = '30px'
}
function bigtext(){
	
document.getElementById('larrythelobster').style.fontSize = '100px'
	
}
function smalltext(){
	
document.getElementById('larrythelobster').style.fontSize = '20px'	
	
}