/*JS kod för dropdown menyn*/
const dropdownbutton = document.getElementById("dropdownbutton");
const dropdown = document.getElementById("dropdown");

dropdownbutton.addEventListener('click', e => {
    dropdown.classList.toggle("active");
})
/*JS kod för dark mode*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }