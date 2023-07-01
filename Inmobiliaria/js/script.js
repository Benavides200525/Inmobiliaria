document.getElementById("registro-formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var nombreInput = document.getElementById("nombre");
    var apellidoPaternoInput = document.getElementById("apellido-paterno");
    var apellidoMaternoInput = document.getElementById("apellido-materno");
  
    var nombre = nombreInput.value.trim();
    var apellidoPaterno = apellidoPaternoInput.value.trim();
    var apellidoMaterno = apellidoMaternoInput.value.trim();
  
    var nombreValido = /^[A-Z]{3,20}$/.test(nombre);
    var apellidoPaternoValido = /^[A-Z]{3,20}$/.test(apellidoPaterno);
    var apellidoMaternoValido = /^[A-Z]{3,20}$/.test(apellidoMaterno);
  
    if (nombreValido && apellidoPaternoValido && apellidoMaternoValido) {
      document.getElementById("mensaje-registro").textContent = "Registro exitoso";
      // Aquí puedes enviar el formulario o realizar otras acciones necesarias
    } else {
      document.getElementById("mensaje-registro").textContent = "Error: Verifica los datos ingresados.";
    }
  });
  