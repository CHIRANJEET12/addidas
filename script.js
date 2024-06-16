document.addEventListener("DOMContentLoaded", function() {
    let counter = 0;
    const loader = document.getElementById("loader");
    const counterElement = document.getElementById("counter");
    const content = document.querySelector(".content");
//This sets up a function to run repeatedly at a specified time interval (every 20 milliseconds).
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

const cursor = document.querySelector(".cursor")
const cursor1 = document.querySelector(".cursor-outline")

window.addEventListener("mousemove", function (e) {
    const posx = e.clientX;
    const posy = e.clientY;

    cursor.style.left = `${posx}px`
    cursor.style.top = `${posy}px`


    // cursor1.style.left=`${posx}px`
    // cursor1.style.top=`${posy}px`

    cursor1.animate({
        left: `${posx}px`,
        top: `${posy}px`,
    }, { duration: 500, fill: "forwards" })
})

const cards = document.querySelector(".cards");
//The threshold indicates the percentage of the target's visibility required to trigger the observer callback.
// Here, it means the callback will be triggered when 10% of the element is visible in the viewport.
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(cards);
