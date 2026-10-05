
// Esperamos a que todo el documento HTML este cargado en el navegador
document.addEventListener('DOMContentLoaded', function () {
  
  // Seleccionamos el formulario por su ID
  const formulario = document.getElementById('formAdmision');
  const mensajeExito = document.getElementById('mensajeExito');

  // Verificamos que el formulario exista en la pagina actual
  if (formulario) {
    
    // Escuchamos el evento cuando el usuario presiona el boton "Enviar"
    formulario.addEventListener('submit', function (event) {
      
      // Detenemos el envio automatico para poder validar primero con JavaScript
      event.preventDefault();
      event.stopPropagation();

      // Comprobamos si el formulario cumple con todas las reglas HTML5 (required, pattern, email)
      if (formulario.checkValidity()) {
        
        // SI ES VÁLIDO: Mostramos la alerta de exito
        mensajeExito.classList.remove('d-none');

        // Limpiamos los campos del formulario
        formulario.reset();

        // Ocultamos las marcas de validacion visual
        formulario.classList.remove('was-validated');

        // Desplazamos la vista hacia arriba para que el usuario vea el mensaje verde
        mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });

      } else {
        // SI NO ES VÁLIDO: Agregamos la clase de Bootstrap que muestra los mensajes de error en rojo
        formulario.classList.add('was-validated');
        
        // Ocultamos el mensaje de exito en caso estuviera visible
        mensajeExito.classList.add('d-none');
      }

    });
  }

});