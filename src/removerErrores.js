const removerErrores = () => {
	day.parentElement.querySelector('.error-msj').classList.add('hidden');
	day.classList.remove('input--error');
	day.parentElement.querySelector('label').classList.remove('texto--error');
	month.parentElement.querySelector('.error-msj').classList.add('hidden');
	month.classList.remove('input--error');
	month.parentElement.querySelector('label').classList.remove('texto--error');
	year.parentElement.querySelector('.error-msj').classList.add('hidden');
	year.classList.remove('input--error');
	year.parentElement.querySelector('label').classList.remove('texto--error');

	document.querySelector('#day').value = '';
	document.querySelector('#month').value = '';
	document.querySelector('#year').value = '';
};

export default removerErrores;
