
function f() {
    setTimeout(() => {

        
        const p = document.getElementById("text");
        
        const randomNumber = Math.random();
        
        console.log("timer", randomNumber);

        if (randomNumber > 0.5) {
            p.setAttribute("hidden", "true");
        } else {
            p.removeAttribute("hidden");
        }

        f();


    }, 1000);
}

f();