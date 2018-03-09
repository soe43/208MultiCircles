var board = document.getElementById("board");
var clearButt = document.getElementById("clear");
var stopButt = document.getElementById("stop");

var ns = "http://www.w3.org/2000/svg";
var timerID;

var animateCircle = function(e){
    var centerX = e.offsetX;
    var centerY = e.offsetY;
    var angle = Math.PI / 8;
    stop();
    
    var dx = Math.cos(angle) * 4;
    var dy = Math.sin(angle) * 4;

    var circle = function(){
	var circle = document.createElementNS(ns, "circle");
	circle.setAttribute("cx",centerX);
	circle.setAttribute("cy",centerY);
	circle.setAttribute("radius", 40);
	circle.setAttribute("fill", "aqua");
	circle.setAttribute("stroke", "black");
	board.appendChild(circle);
    }

    circle();
    
    var moveCircles = function(){
	while(board.hasChildNodes()){
	    nodes = board.childNodes;
	    for (node in nodes){
		if(node.getAttribute("cx") <= 40 || node.getAttribute("cx") >= 460){
		    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
		    dx *= -1;
		}
		if(node.getAttribute("cy") <= 40 || node.getAttribute("cy") >= 460){
		    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
		    dy *= -1;
		}

		newCx = node.getAttribute("cx") + dx;
		newCy = node.getAttribute("cy") + dy;
		
		node.setAttribute("cx", newCx);
		node.setAttribute("cy", newCy);
	    }
	}
	timerID = setInterval(moveCircles, 16.67);
    }
}


var clear = function(){
    while(board.hasChildNodes()){
	board.removeChild(board.childNodes[0]);
    }
}

var stop = function(){
    clearInterval(timerID);
}

board.addEventListener("click", animateCircle); 
clearButt.addEventListener("click", clear);
stopButt.addEventListener("click", stop);
