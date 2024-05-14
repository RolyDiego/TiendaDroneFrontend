const opciones = document.querySelector('.opciones');

opciones.style.display = 'none';

document.querySelector('.activo').addEventListener('click', () => {
    if (opciones.style.display === 'none') {
        opciones.style.display = 'block';
    } else {
        opciones.style.display = 'none';
    }
});
