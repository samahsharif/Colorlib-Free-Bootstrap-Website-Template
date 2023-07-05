              // header//
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
          } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
          }
        });
      }
      


              // hero-section#3 carousel//


function toggleCss(btn){
    document.querySelector(".carousel button.active").classList.remove("active")
    btn.classList.add("active")
}

// hero-sec#7 slider/
var slider = document.getElementById('slider');
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var arrowbar = document.getElementById('arrowbar');
var arrowbar1 = document.getElementById('arrowbar1');



dot1.onclick = function(){
    // slider.style.transform = 'translateX(0)'
    previous_slide()
}
dot2.onclick = function(){
    // slider.style.transform = 'translateX(-50%)'
    next_slide()
}
function previous_slide(){
    slider.style.transform = 'translateX(0)'
}
function next_slide(){
    slider.style.transform = 'translateX(-50%)'    
}




    // counter home sec #about
function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

 let currentTime = Date.now();

 const step = (currentTime ) => {

 if (!startTime) {
    startTime = currentTime ;
 }
 const progress = Math.min((currentTime - startTime)/ duration, 1);

 obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

 if (progress < 1) {
    window.requestAnimationFrame(step);
 } else {
       window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
 };
    window.requestAnimationFrame(step);
 }

 window.addEventListener('scroll', function() {
	var element = document.querySelector('section#about.hero-sec');
	var position = element.getBoundingClientRect();
    
    var counter = document.querySelector('#member-count')
    var counter_2 =document.querySelector('#count')
    
    var current_value = counter.innerHTML
	if(position.top < window.innerHeight && position.bottom >= 0 && current_value == '0') {
        animate(counter, 0, 59, 4000)
        animate(counter_2, 0, 14, 4000)
	}
    
});



