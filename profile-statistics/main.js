const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
    counterEl.innerText = "0";
    incrementCouınter();
    function incrementCouınter() {
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil")
        const increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)

        if (currentNum < dataCeil) {
            counterEl.innerText = currentNum
            setTimeout(incrementCouınter, 50)
        } else {
            counterEl.innerText = dataCeil 
        }
    }
    
});