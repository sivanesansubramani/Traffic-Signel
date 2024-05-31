
function startTrafficSignal () {
    var green=document.getElementById("green");
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");

    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=0.2;
        red.style.opacity=0.2;
        yellow.style.opacity=2;
    },5000);

    setTimeout(function () {
        green.style.opacity=0.2;
        red.style.opacity=2;
        yellow.style.opacity=0.2;
    },7000);

    setTimeout(function () {
        green.style.opacity=2;
        red.style.opacity=0.2;
        yellow.style.opacity=0.2;
    },12000);
}

var timer=setInterval(function () {
    startTrafficSignal();
},12000);

startTrafficSignal();
