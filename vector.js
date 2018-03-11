var clearButton=document.getElementById("clear");
var slate=document.getElementById("screen");

var timerId;
var circles=[];

var clear=function(){
    clearInterval(timerId);
    while(slate.hasChildNodes()){
	slate.removeChild(slate.childNodes[0]);
    }
}

var createCircle=function(e){
    clearInterval(timerId);
    timerId=setInterval(animateCircle,10);
    var x=e.offsetX;
    var y=e.offsetY;
    var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    slate.appendChild(c);
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",10);
    c.setAttribute("fill", "lightsteelblue");
    c.setAttribute("xStep",2);
    c.setAttribute("yStep",1);
    circles.push(c);
}

var animateCircle=function(e){
    var i=0;
    while(i<circles.length){
	var c=circles[i];
	var xMove=parseInt(c.getAttribute("xStep"));
	var yMove=parseInt(c.getAttribute("yStep"));
	var x=parseInt(c.getAttribute("cx"));
	var y=parseInt(c.getAttribute("cy"));
	if(x>=490||x<=10){
	    xMove*=-1;
	}
	if(y<=10||y>=490){
	    yMove*=-1;
	}
	x+=xMove;
	y+=yMove;
	c.setAttribute("xStep",xMove);
	c.setAttribute("yStep",yMove);
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	i+=1;
    };
}


clearButton.addEventListener("click",clear);
slate.addEventListener("click", createCircle);
