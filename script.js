let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hours = document.querySelector(".hour");
let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");

let hour = 0;
let min = 0;
let sec = 0;

let interval;

start.addEventListener("click", function() {

    start.classList.add("active");
    stop.classList.remove("active");

    interval = setInterval(function(){
        if (sec < 59) {
            sec += 1;
            secs.innerHTML = sec < 10 ? "0" + sec : sec;
        }else{
            sec = 0;
            secs.innerHTML = sec < 10 ? "0" + sec : sec;

            if (min < 59) {
                min += 1;
                min.innerHTML = min < 10 ? "0" + min + ":" : min + ":";
            }else{
                hours += 1;
                hours.innerHTML = hour < 10 ? "0" + hour + ":" : hour + ":";
            }
        }
    }, 1000);

    start.style.pointerEvents = "none";
    stop.style.pointerEvents = "auto";
});

stop.addEventListener("click", function() {
    
    stop.classList.add("active");
    start.classList.remove("active");
    clearInterval(interval);

    start.style.pointerEvents = "auto";
    stop.style.pointerEvents = "none";

})

reset.addEventListener("click", function() {
    
    reset.classList.add("active");
    stop.classList.remove("active");
    start.classList.remove("active");
    location.reload();
    
})