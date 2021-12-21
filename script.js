//exercise 1//
 
// function changecolor(){
//document. body.gettlementsByClassName ("appear")[0].classList.replace("appear", "show");
//}


//setTimeout(changecolor, 2000);

//exercise 2//

//Let section = document.getElementById("appear")
//let timeId = setInterval (1000) ;
//console. Log(timeId),1;
//let timeIdTwo = setInterval(addDiv, 3000) ;
//console.log(timeIdTwo); //2

//exercise XP//
 //exercise 1

 let element = document.getElementById("animate")
 console.log(element)

element.addEventListener("dragstart", startToDrag);
element.addEventListener("dragend", startToDrag);

function startToDrag (e) {
	console.log('e.target : ', e.target)
	console.log("starting");
	e.target.classList.toggle("draggedItemAfter");
	console.log('e.dataTransfer : ', e.dataTransfer)

	e.dataTransfer.setData("text/plain", e.target.id);
}

function endToDrag (e) {
console.log("ending");
e.target.style.backgroundColor = 'lightgreen';
}
//done//

//exercise 2//
let element = document.getElementById("animate")
element.setAttribute('draggable', "true");

element.addEventListener("dragstart", function (event) {
	event.target.style = "animate"
	console.log("drag event.clientX", " event.clientY");
});

element.addEventListener("dragend", function(event))
{
  event.target.style = "container";
  let _x = event.clientX;
  let _y = event.clientY;
  console.log(event);
  event.target.style.left = _x + "px";
  event.target.style.top = _y + "px";
  event.target.style.position = "absolute";
  console.log("dragend" + "X: " + event.clientX + " Y: " + event.clientY);

});



















