let aplicaciones = document.getElementById('aplicaciones');
let sitiosWeb = document.getElementById('sitiosWeb');
let consultoria = document.getElementById('consultoria');
let buttonOne = document.getElementById('buttonOne');
let buttonTwo = document.getElementById('buttonTwo');
let buttonThree = document.getElementById('buttonThree');

// function sitiosWebShow(){
//     aplicaciones.style.display = "block";
//     sitiosWeb.style.display = "none";
//     consultoria.style.display = "none";
//     console.log("Hola");
// }
buttonOne.addEventListener('click' ,function () {
    aplicaciones.style.display = "block";
    sitiosWeb.style.display = "none";
    consultoria.style.display = "none";

    buttonOne.style.background ="#FFF";
    buttonOne.style.border = "#000 solid";

    buttonTwo.style.background ="#F22";
    buttonTwo.style.border = "none";
    buttonThree.style.background ="#F22";
    buttonThree.style.border = "none";
});
buttonTwo.addEventListener('click' ,function () {
    aplicaciones.style.display = "none";
    sitiosWeb.style.display = "block";
    consultoria.style.display = "none";

    buttonTwo.style.background ="#FFF";
    buttonTwo.style.border = "#000 solid";

    buttonOne.style.background ="#F22";
    buttonOne.style.border = "none";
    buttonThree.style.background ="#F22";
    buttonThree.style.border = "none";
});
buttonThree.addEventListener('click' ,function () {
    aplicaciones.style.display = "none";
    sitiosWeb.style.display = "none";
    consultoria.style.display = "block";

    buttonThree.style.background ="#FFF";
    buttonThree.style.border = "#000 solid";

    buttonOne.style.background ="#F22";
    buttonOne.style.border = "none";
    buttonTwo.style.background ="#F22";
    buttonTwo.style.border = "none";
});

let buttonForm = document.getElementById('buttonForm');
let form = document.getElementById('form');

buttonForm.addEventListener('click',function (){
    if(form.style.display != "flex"){
        form.style.display = "flex";
        buttonForm.style.background = "#FFF";
        buttonForm.style.border = "#000 solid";
    }else{
        form.style.display = "none";
        buttonForm.style.background = "#F22";
        buttonForm.style.border = "none";
    }
})



