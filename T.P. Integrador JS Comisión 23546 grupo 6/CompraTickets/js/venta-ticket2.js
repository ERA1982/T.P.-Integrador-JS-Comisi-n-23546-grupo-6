document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos del DOM necesarios
    const cantidadInput = document.getElementById('cantidad');
    const categoriaSelect = document.getElementById('categoria');
    const totalInput = document.getElementById('total');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const correoInput = document.getElementById('correo');

    // Valor base del ticket
    const precioBase = 200;

    // Función para calcular y actualizar el precio del ticket
    function calcularPrecio() {
        // Validar campos de nombre, apellido y correo
        const nombre = nombreInput.value.trim();
        const apellido = apellidoInput.value.trim();
        const correo = correoInput.value.trim();

        if (nombre === '' || apellido === '' || correo === '') {
            // Al menos uno de los campos está vacío, mostrar mensaje de error
            // si el siguiente renglon (alert) te da problemas, lo anulas y listo
            alert('No se puede hacer el cálculo, ya que alguno de los campos está vacío.');
            return;
        }

        // Continuar con el cálculo si los campos están completos
        // Obtener la cantidad de tickets
        const cantidad = parseFloat(cantidadInput.value) || 0;

        // Calcula el descuento en función de la categoría
        let descuento = 0;
        switch (categoriaSelect.value) {
            case 'opcion1': // Estudiante
                descuento = 0.8; // 80% de descuento
                break;
            case 'opcion2': // Trainee
                descuento = 0.5; // 50% de descuento
                break;
            case 'opcion3': // Junior
                descuento = 0.15; // 15% de descuento
                break;
            default:
                descuento = 1; // Sin descuento
        }

        // Calcula el precio final teniendo en cuenta la cantidad
        const precioFinal = cantidad * (precioBase - (precioBase * descuento));

        // Actualiza el valor en el campo "Total a Pagar"
        //totalInput.value = precioFinal.toFixed(2);
        totalInput.value = parseFloat(precioFinal.toFixed(2));  // valor numerico tiene totalInput.value
    }

    // Asocio el evento "submit" al formulario para calcular el precio
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        calcularPrecio(); // Calcula el precio al hacer clic en Resumen
    });
});
