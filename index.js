const displayValorAnterior = document.getElementById('Valor-anterior');
const displayValorActual = document.getElementById('Valor-actual');
const botonesNumeros = document.querySelectorAll('.Numero');
const botonesoperadores = document.querySelectorAll('.operador');
const botonesoperadores = document.querySelectorAll('.borrador');

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(function boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
    alert (boton.innertext);
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});