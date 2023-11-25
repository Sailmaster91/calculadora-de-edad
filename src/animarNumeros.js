const animarNumeros = (Target, container) => {
	let numeroActual = 0;

	const generarNumero = (num) => {
		return Math.floor(Math.random() * num);
	};
	// Creo un intervalo para cambiar numero aleatoriamente
	const intevalos = setInterval(() => {
		numeroActual = generarNumero(Target);
		// Actualizo el html

		container.innerText = numeroActual;
	}, 100);

	container.style.opacity = 1;
	setTimeout(() => {
		clearInterval(intevalos);
		container.innerText = Target;
	}, 2000);
	generarNumero(Target);

	return new Promise((resolve) => setTimeout(resolve, 2000));
	// numeroDias.innerText = daysTarget;
};

export default animarNumeros;
