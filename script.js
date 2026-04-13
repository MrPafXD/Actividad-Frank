function verificar() {
    const inputs = document.querySelectorAll('input');
    let correctas = 0;

    // Función para ignorar tildes, mayúsculas y espacios extras
    const normalizar = (str) => 
        str.normalize("NFD")
           .replace(/[\u0300-\u036f]/g, "")
           .toLowerCase()
           .trim();

    inputs.forEach(input => {
        const correcta = normalizar(input.dataset.ans);
        const usuario = normalizar(input.value);

        if (usuario === correcta && usuario !== "") {
            correctas++;
            input.style.backgroundColor = "#d4edda"; // Verde éxito
            input.style.color = "#155724";
        } else {
            input.style.backgroundColor = "#f8d7da"; // Rojo error
            input.style.color = "#721c24";
        }
    });

    const porcentaje = ((correctas / inputs.length) * 100).toFixed(0);
    
    document.getElementById('juego').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('puntaje').innerText = porcentaje;

    const mensaje = document.getElementById('mensaje');
    if(porcentaje == 100) mensaje.innerText = "¡Investigador Maestro del Higienismo!";
    else if(porcentaje >= 70) mensaje.innerText = "Buen trabajo, la ciudad respira mejor.";
    else mensaje.innerText = "Los miasmas persisten. Debes revisar los archivos.";
}