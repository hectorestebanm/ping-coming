// Variables usadas para acceder al form
var input = document.querySelector(".formulario__input");
var label = document.querySelector(".formulario__label");
var submit = document.querySelector(".formulario__submit");

// buttons.forEach(function(number)
// {
//     number.addEventListener("click", function()
//     {
//         span.innerHTML = number.innerHTML;
//     });
// });

// Función original usada originalmente
// submit.addEventListener("click", function()
// {
//     label.style.display = "block";
//     input__submit.style.display = "block";
// });

submit.addEventListener("click", (e)=>
{
    // Prevengo efecto default de página
    e.preventDefault();
    // Pregunto si se ingresó un mail válido
    if(!input.value.includes("@"))
    {
        // Mail incorrecto o no válido
        label.style.display = "block";
        input.placeholder = "example@email/com";
        input.style.borderColor = "#ff5263";
    }
    else
    {
        // Mail correcto y enviado
        label.style.display = "none";
        input.value = "";
        input.placeholder = "Your email address...";
        // Definir color para el envio de datos
        input.style.borderColor = "#c2d3ff";
        alert("Envío correcto de Email");
    }
});
