// API
let btnResp  = document.getElementById('button');
let entrada = document.getElementById('input');
let respuesta = document.getElementById('answer');
let res;


btnResp.addEventListener('click', function () {
    if (entrada.value.length <= 0) {
        window.alert('Ingresa una pregunta');
    } else {
        fetch('https://yesno.wtf/api', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => (respuesta.innerHTML = 
                `${data.answer}`));
    } //else
});





/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
