import './calculo';
import { validarInputs } from './validarInputs';
import './resetearCalculo';
import './validaciones/validarDiaDelMes';
// import validarDiaDelMes from './validaciones/validarDiaDelMes';

// validarDiaDelMes();
validarInputs();
day.parentElement.querySelector('.error-msj').classList.add('hidden');
day.classList.remove('input--error');
day.parentElement.querySelector('label').classList.remove('texto--error');
month.parentElement.querySelector('.error-msj').classList.add('hidden');
month.classList.remove('input--error');
month.parentElement.querySelector('label').classList.remove('texto--error');
year.parentElement.querySelector('.error-msj').classList.add('hidden');
year.classList.remove('input--error');
year.parentElement.querySelector('label').classList.remove('texto--error');
