document.addEventListener("DOMContentLoaded", function() {
    let counter = 0;
    const loader = document.getElementById("loader");
    const counterElement = document.getElementById("counter");
    const content = document.querySelector(".content");

    const interval = setInterval(function() {
        counter++;
        counterElement.innerText = counter ;

        if (counter === 100) {
            clearInterval(interval);
            loader.style.transition = "opacity 0.5s ease-out";
            loader.style.opacity = 0;
            counterElement.innerText = counter +  "welcome";
            setTimeout(function() {
                loader.style.display = "none";
                content.style.display = "block";
            }, 500);
        }
    }, 20); 
});
