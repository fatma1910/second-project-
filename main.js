let section = document.querySelector(".o-skills");
let spans = document.querySelectorAll(".progress span");
let latest = document.querySelector(".latest");
let latestSpans = document.querySelectorAll(".latest .unit span")[0];
let started = false; 


window.onscroll = function () {
    if (window.scrollY >= (section.offsetTop-300)) {
        spans.forEach((span)=>{
            span.style.width = span.dataset.width;
        })
    }
    if (window.scrollY >= latest.offsetTop-300) {
        if (!started){
            latestSpans.forEach((num) => startCount(num));
        }

        started=true;
    }

}

function startCount(el) {
    let goal = el.dataset.goal ; 
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(count);
        };
    },2000/goal)
}