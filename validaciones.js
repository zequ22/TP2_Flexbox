window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formu');
    const nombreC = document.getElementById('nombreC');
    const correoE = document.getElementById('correoE');
    const pass1 = document.getElementById('pass1');
    const pass2 = document.getElementById('pass2');
    const edad = document.getElementById('edad');
    const tel = document.getElementById('tel');
    const direcc = document.getElementById('direcc');
    const ciudad = document.getElementById('ciudad');
    const codpost = document.getElementById('codpost');
    const DNI = document.getElementById('DNI');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (nombreC.value.length < 6 || !nombreC.value.includes(' ')) {
        alert('El nombre completo debe tener más de 6 letras y al menos un espacio entre medio.');
        return;
      }
      if (!validateEmail(correoE.value)) {
        alert('El email debe tener un formato válido.');
        return;
      }  
      if (pass1.value.length < 8 || !pass1.value.match(/^[a-zA-Z0-9]+$/)) {
        alert('La contraseña debe tener al menos 8 caracteres, formados por letras y números.');
        return;
      }  
      if (pass1.value !== pass2.value) {
        alert('Las contraseñas no coinciden.');
        return;
      }  
      if (parseInt(edad.value) < 18 || !Number.isInteger(parseFloat(edad.value))) {
        alert('La edad debe ser un número entero mayor o igual a 18.');
        return;
      }  
      if (!tel.value.match(/^\d{7,}$/)) {
        alert('El teléfono debe tener al menos 7 dígitos y no debe contener espacios, guiones ni paréntesis.');
        return;
      }  
      if (direcc.value.length < 5 || !direcc.value.match(/^[a-zA-Z0-9]+ [a-zA-Z0-9]+$/)) {
        alert('La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.');
        return;
      }  
      if (ciudad.value.length < 3) {
        alert('La ciudad debe tener al menos 3 caracteres.');
        return;
      }  
      if (codpost.value.length < 3) {
        alert('El código postal debe tener al menos 3 caracteres.');
        return;
      }  
      if (!DNI.value.match(/^\d{7,8}$/)) {
        alert('El DNI debe ser un número de 7 u 8 dígitos.');
        return;
      }
  
      // Si todas las validaciones pasan, puedes enviar el formulario
      form.submit()
      alert('Registro exitoso.');
    });
  
    // Función para validar el formato del email
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  