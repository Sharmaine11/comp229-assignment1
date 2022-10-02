/*File name: Comp229-f2022-assign1
Student Name: Sharmaine Sanchez
Student ID: 301206792
Date: October 2, 2022
/* custom css goes here */

//IIFI  -- Immediately Invoked Function Expression
(function(){

    function start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", start);

})();

(function aboutmelink() {
    document.getElementById("myButton").onclick = function () {
        location.href = "http://localhost:3000/about";
    };
})();