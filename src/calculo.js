import animarNumeros from './animarNumeros';
import calcularEdad from './calcularEdad';
import validarDiaDelMes from './validaciones/validarDiaDelMes';
import { validarInputs, validarFecha } from './validarInputs';

const btnCalculo = document.querySelector('.btn-calculo');
let birthYear;
let birtMonth;
let birthDay;

btnCalculo.addEventListener('click', async (e) => {
	e.preventDefault();

	document.querySelector('#num__years').innerText = '--';
	document.querySelector('#num__days').innerText = '--';
	document.querySelector('#num__months').innerText = '--';

	if (validarInputs()) {
		birthDay = document.querySelector('#day').value;
		birtMonth = document.querySelector('#month').value;
		birthYear = document.querySelector('#year').value;

		if (validarDiaDelMes(`${birthDay} ${birtMonth} ${birthYear}`) === true) {
			const edad = calcularEdad(`${birthDay} ${birtMonth} ${birthYear}`);
			const { days, months, years } = edad;
			document.querySelector('#num__months');
			document.querySelector('#num__years');

			await animarNumeros(years, document.querySelector('#num__years'));
			await animarNumeros(months, document.querySelector('#num__months'));
			await animarNumeros(days, document.querySelector('#num__days'));

			return;
		} else {
			return;
		}
	} else {
		return;
	}
});
