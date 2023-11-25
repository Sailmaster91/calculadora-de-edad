import { parse } from 'date-fns';
import { intervalToDuration } from 'date-fns';

const calcularEdad = (fechaNacimiento) => {
	const hoy = new Date();

	const cumpleanos = parse(fechaNacimiento, 'dd MM yyyy', new Date());
	if (isNaN(cumpleanos)) {
		return false;
	} else {
		const { days, months, years } = intervalToDuration({ start: cumpleanos, end: hoy });

		return { days, months, years };
	}
};
export default calcularEdad;
