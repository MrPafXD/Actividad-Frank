function verificar() {
    const inputs = document.querySelectorAll('input');
    let aciertos = 0;

    inputs.forEach(input => {
        const respuestaCorrecta = input.dataset.ans.toLowerCase();
        const respuestaUsuario = input.value.toLowerCase().trim();

        if (respuestaUsuario === respuestaCorrecta) {
            aciertos++;
            input.style.color = "green";
            input.style.borderBottom = "1px solid green";
        } else {
            input.style.color = "red";
            input.style.borderBottom = "1px solid red";
        }
    });

    const porcentaje = ((aciertos / inputs.length) * 100).toFixed(0);
    
    document.getElementById('juego').style.display = 'none';
    const resSection = document.getElementById('resultado');
    resSection.style.display = 'block';
    
    document.getElementById('puntaje').innerText = porcentaje;
    
    const mensaje = document.getElementById('mensaje');
    if(porcentaje == 100) {
        mensaje.innerText = "¡Excelente Ciudadano Higiénico!";
    } else if (porcentaje > 50) {
        mensaje.innerText = "Buen intento, pero aún quedan miasmas por limpiar.";
    } else {
        mensaje.innerText = "Debes estudiar más el Manual de Urbanidad.";
    }
}