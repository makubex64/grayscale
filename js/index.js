$(document). ready(()=>{

var GrayscaleSmall = document.querySelector('#GrayscaleSmall')
var text2 = GrayscaleSmall.innerHTML;

GrayscaleSmall.innerHTML = "";

var speed = 25;
var i = 0;

function typeWriter(){
	if (i < text2.length){
		GrayscaleSmall.innerHTML += text2.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter();

// fadein
$(".containerFadeIn").hide().delay("slow").fadeIn(600);
$(".js-scroll-trigger").hide().delay("slow").fadeIn(600)



	

// button toggle
	$("#buttonToggle").click(()=>{
		$(".textMountain").toggle(300)
	})
	$(".textMountain ").hide()

})