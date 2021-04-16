// IIFE -> immediately envoke function expression
(function()
 {
    function start() {
        console.log(` %c App started .....`, "font-size: 25px; color:red;")

        document.getElementById("paragraphTwo") .innerText = "I know everything";

        document.getElementById("paragraphThree") .innerHTML = "I am <br/> the man";
    }
    window.addEventListener("load",start);
})();
