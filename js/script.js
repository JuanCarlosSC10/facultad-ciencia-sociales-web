
// Esperamos a que todo el documento HTML este cargado en el navegador
document.addEventListener('DOMContentLoaded', function () {
  
  const formulario = document.getElementById('formAdmision');
  const mensajeExito = document.getElementById('mensajeExito');

  // Verificamos que el formulario exista en la pagina actual
  if (formulario) {
    
    formulario.addEventListener('submit', function (event) {
      
      event.preventDefault();
      event.stopPropagation();

      // Comprobamos que cumple con todas las reglas HTML5 required, pattern, email
      if (formulario.checkValidity()) {
        
        mensajeExito.classList.remove('d-none');

        formulario.reset();

        formulario.classList.remove('was-validated');
        mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });

      } else {
        formulario.classList.add('was-validated');
        mensajeExito.classList.add('d-none');
      }

    });
  }

});