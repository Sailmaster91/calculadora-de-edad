import getYear from 'date-fns/getYear';
const regexDia = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const regexMes = /^(0?[1-9]|1[0-2])$/;
const regexAnio = /^\d{4}$/;
const validarInputs = () => {
	const year = document.querySelector('#year');
	const month = document.querySelector('#month');
	const day = document.querySelector('#day');
	const anoActual = getYear(new Date());

	const validarDia = (dayValue) => {
		if (!regexDia.test(dayValue)) {
			day.parentElement.querySelector('label').classList.add('texto--error');
			day.parentElement.querySelector('.error-msj').classList.remove('hidden');
			day.classList.add('input--error');

			return false;
		} else {
			day.parentElement.querySelector('.error-msj').classList.add('hidden');
			day.classList.remove('input--error');
			day.parentElement.querySelector('label').classList.remove('texto--error');

			return true;
		}
	};

	const validarMes = (monthValue) => {
		if (!regexMes.test(monthValue)) {
			month.parentElement.querySelector('label').classList.add('texto--error');
			month.parentElement.querySelector('.error-msj').classList.remove('hidden');
			month.classList.add('input--error');
			return false;
		} else {
			month.parentElement.querySelector('.error-msj').classList.add('hidden');
			month.classList.remove('input--error');
			month.parentElement.querySelector('label').classList.remove('texto--error');
			return true;
		}
	};

	const validarAnio = (yearValue) => {
		if (!regexAnio.test(yearValue) || yearValue >= anoActual) {
			if (yearValue >= anoActual) {
				year.parentElement.querySelector('label').classList.add('texto--error');
				year.parentElement.querySelector('.error-msj').classList.remove('hidden');
				year.parentElement.querySelector('.error-msj').innerText =
					'pleae a yerar less than the current year';
				year.classList.add('input--error');
				return false;
			} else if (yearValue < 1900) {
				year.parentElement.querySelector('label').classList.add('texto--error');
				year.parentElement.querySelector('.error-msj').classList.remove('hidden');
				year.parentElement.querySelector('.error-msj').innerText = 'please enter a valid year';
				year.classList.add('input--error');
				return false;
			}
		} else {
			year.parentElement.querySelector('.error-msj').classList.add('hidden');
			year.classList.remove('input--error');
			year.parentElement.querySelector('label').classList.remove('texto--error');
			return true;
		}
	};

	day.addEventListener('keyup', (e) => {
		e.preventDefault();
		let inputValue = e.target.value;
		validarDia(inputValue);
	});
	month.addEventListener('keyup', (e) => {
		e.preventDefault();
		let inputValue = e.target.value;
		validarMes(inputValue);
	});
	year.addEventListener('input', (e) => {
		e.preventDefault();
		let inputValue = e.target.value;
		validarAnio(inputValue);
	});

	if (
		!validarDia(day.value) ||
		!validarMes(month.value) ||
		!validarAnio(year.value) ||
		year.value > anoActual
	) {
		return false;
	} else {
		return true;
	}
};

const validarFecha = (validarDia, validarMes, validarAnio) => {
	if (!regexDia.test(day.value) || !regexMes.test(month.value) || !regexAnio.test(year.value)) {
		return false;
	} else {
		return true;
	}
};

export { validarInputs, validarFecha };
