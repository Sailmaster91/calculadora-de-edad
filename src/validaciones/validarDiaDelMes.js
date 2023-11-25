import { isValid, set } from 'date-fns';
import { parse } from 'date-fns';
import { getDay, getYear, getMonth } from 'date-fns';

const validarDiaDelMes = (fechaNacimiento) => {
	const cumpleanos = parse(fechaNacimiento, 'dd MM yyyy', new Date());
	let dia = getDay(cumpleanos);
	let mes = getMonth(cumpleanos);
	let anio = getYear(cumpleanos);
	const fecha = set(new Date(), { year: anio, month: mes, date: dia });

	if (isValid(fecha)) {
		return true;
	} else {
		year.parentElement.querySelector('label').classList.add('texto--error');
		year.parentElement.querySelector('.error-msj').classList.remove('hidden');
		year.parentElement.querySelector('.error-msj').innerText = '';
		year.classList.add('input--error');

		month.parentElement.querySelector('label').classList.add('texto--error');
		month.parentElement.querySelector('.error-msj').classList.remove('hidden');
		month.parentElement.querySelector('.error-msj').innerText = '';
		month.classList.add('input--error');

		day.parentElement.querySelector('label').classList.add('texto--error');
		day.parentElement.querySelector('.error-msj').classList.remove('hidden');
		day.parentElement.querySelector('.error-msj').innerText = 'Please enter a valid date';
		day.classList.add('input--error');

		return false;
	}
};

export default validarDiaDelMes;
