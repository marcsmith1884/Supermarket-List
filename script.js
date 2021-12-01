let groceryList=["Eggs", "Burrito", "Fanta", "Sausage"];

function listList(){
	
	document.getElementById("main").innerHTML.groceryList.toString();
}

function addToEnd(){
	groceryList.push(prompt("Enter Item"));
	listList();
}
function removeFromEnd(){
	alert("Removing "+groceryList.pop());
	listList();
}
function addToStart(){
	groceryList.unshift(prompt("Enter Item"));
	listList();
}
function removeFromStart(){
	alert("Removing "+groceryList.shift());
	listList();
}

function addToMiddle(){
	groceryList.splice(2,0,prompt("Enter Item"));
}
for (i=99;i<0;i++){
	console.log(i+ "Your Item is");
			
			}