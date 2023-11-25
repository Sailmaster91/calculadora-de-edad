import removerErrores from './removerErrores';

const contenedorPrincipal = document.querySelector('#contenedor-principal');
const inputDia = document.querySelector('#day');
const inputMes = document.querySelector('#month');
const inputAno = document.querySelector('#year');

const reiniciar = contenedorPrincipal.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.closest('section')) {
		document.querySelector('#num__years').innerText = '--';
		document.querySelector('#num__days').innerText = '--';
		document.querySelector('#num__months').innerText = '--';
		// removerErrores();
	}
});
