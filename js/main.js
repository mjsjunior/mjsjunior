var index = Math.floor((Math.random() * 4));
var videos = ["video1.mp4","video2.mp4","video3.mp4","video4.mp4"]
console.log('Rodando: '+videos[index]);
document.querySelector("video > source").src = videos[index];
document.querySelector("video").load();

if(window.location.hash) {
  var hash = window.location.hash;
  if(hash === '#obrigado'){
  	setTimeout(function(){
  		document.querySelector('#success-form').style.transform='scale(1)';
  		window.location.href.substr(0, window.location.href.indexOf('#'))
  	},500)
  }
}

window.onscroll = function (e) {  
	var about = document.querySelector("#about");
	var scroll = window.pageYOffset;
	//verifica se about esta na tela
	if(about.offsetTop - scroll - 400 < 0 ){
		if(about.className.indexOf('fadeInUp') == -1){
			about.className += ' fadeInUp';
			setTimeout(function(){
				about.style.opacity =1;
				var el = skills = document.querySelector(".skills");
				if(elementInViewport(el)){
					var skills = document.querySelectorAll(".skill .bar span");
					for(i=0;i<skills.length;i++){
						var size = skills[i].getAttribute("data-total");
						skills[i].style.width = size;
					}
				}
			},900)
		}
	}
}

function abrirModal(modal){
	console.log('clicado modal: '+modal);
	document.querySelector('#'+modal).style.display="block";
	setTimeout(function(){
		document.querySelector('#'+modal).style.opacity=1;
		document.querySelector('#'+modal).style.transform="scale(1)";
	},100)
}

function closeModal(){
	var modal = document.querySelectorAll('div[id^="modal"');
	for(i in modal){
		modal[i].style.transform="scale(0)";
		setTimeout(function(){
			modal[i].style.display="none";
		},500);
	}
}


var moreSkill = document.querySelector('#more-skill');

moreSkill.addEventListener('click',function(e){
	console.log('Clicado!');
	var arr = document.querySelectorAll('.hide');
	for(i=0;i<arr.length;i++){
		arr[i].style.display = 'block';
	}
	moreSkill.style.display = 'none';
})


//Diz se elemento está visivel
function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (top >= window.pageYOffset &&
    left >= window.pageXOffset
  );
}
