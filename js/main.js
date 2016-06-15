'use restrict'
let skills = document.querySelectorAll(".skill .bar span");
for(i in  skills){
	let size = skills[i].getAttribute("data-total");
	skills[i].style.width = size;
}