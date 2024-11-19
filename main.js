// Función para verificar si una cadena es un palíndromo
function esPalindromo(texto) {
    // Elimina espacios y convierte todo a minúsculas
    const textoLimpio = texto.replace(/\s+/g, '').toLowerCase();
    // Compara el texto con su reverso
    return textoLimpio === textoLimpio.split('').reverse().join('');
}
  
// Obtén el botón y el input
const boton = document.getElementById("btn-palin");
const input = document.getElementById("input-palin");
const respuesta = document.getElementById("respuesta");
  
// Event listener para el clic en el botón
boton.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto) {
      // Verifica si el texto es palíndromo
      if (esPalindromo(texto)) {
        respuesta.textContent = "¡Es un palíndromo!";
        respuesta.style.color = "#5af78d";
      } else {
        respuesta.textContent = "No es un palíndromo.";
        respuesta.style.color = "red";
      }
    } else {
      respuesta.textContent = "Por favor ingresa un texto.";
      respuesta.style.color = "orange";
    }
});
  

  // Función para comparar los dos números
function compararNumeros(num1, num2) {
    if (num1 > num2) {
      return `${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
      return `${num2} es mayor que ${num1}`;
    } else {
      return "Ambos números son iguales";
    }
}
  
// Obtén los elementos del DOM
const btn = document.getElementById("btn-2");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultado = document.getElementById("mayor");
  
// Event listener para el clic en el botón
btn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const mensaje = compararNumeros(num1, num2);
      // Llama a la función de comparación y muestra el resultado
        resultado.textContent = compararNumeros(num1, num2);
        resultado.style.color = "#5af78d";

      if (mensaje === "Ambos números son iguales") {
        resultado.style.color = "orange"; // Si son iguales, color naranja
      }
    } else {
      resultado.textContent = "Por favor ingresa números válidos.";
      resultado.style.color = "red";
    }
});

// Función para obtener las vocales presentes en una frase
function obtenerVocales(frase) {
    // Define las vocales que nos interesan
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    // Convierte la frase a minúsculas y filtra las vocales
    const vocalesPresentes = [...new Set(frase.toLowerCase().split('').filter(letra => vocales.includes(letra)))];
    
    return vocalesPresentes.join(', ') || "No se encontraron vocales";
  }
  
  // Obtén los elementos del DOM
  const boton1 = document.getElementById("vocals");
  const fraseInput = document.getElementById("frase");
  const resultado1 = document.getElementById("vocales");
  
  // Event listener para el clic en el botón
  boton1.addEventListener("click", () => {
    const frase = fraseInput.value.trim();
    if (frase) {
      // Llama a la función para obtener las vocales y muestra el resultado
      const vocales = obtenerVocales(frase);
      resultado1.textContent = `Vocales presentes: ${vocales}`;
      resultado1.style.color = "#5af78d";
    } else {
      resultado1.textContent = "Por favor ingresa una frase.";
      resultado1.style.color = "orange"; // Color naranja si no se ingresa una frase
    }
  });
  



// Función para contar las vocales presentes en una frase
function contarVocales(frase) {
    // Define las vocales que nos interesan
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    // Crear un objeto para almacenar las cantidades
    const conteo = {a: 0, e: 0, i: 0, o: 0, u: 0};
    
    // Recorre cada letra de la frase y cuenta las vocales
    for (let letra of frase.toLowerCase()) {
      if (vocales.includes(letra)) {
        conteo[letra]++;
      }
    }
    
    return conteo;
  }
  
  // Función para mostrar el resultado
  function mostrarResultado(conteo) {
    const resultado = [];
    for (let vocal in conteo) {
      if (conteo[vocal] > 0) {
        resultado.push(`${vocal.toUpperCase()}: ${conteo[vocal]}`);
      }
    }
    return resultado.length > 0 ? resultado.join(', ') : "No se encontraron vocales";
  }
  
  // Obtén los elementos del DOM
  const boton2 = document.getElementById("vocals2");
  const fraseInput2 = document.getElementById("frase2");
  const resultadoDiv = document.getElementById("vocales2");
  
  // Event listener para el clic en el botón
  boton2.addEventListener("click", () => {
    const frase = fraseInput2.value.trim();
    if (frase) {
      // Llama a la función para contar las vocales y muestra el resultado
      const conteo = contarVocales(frase);
      resultadoDiv.textContent = mostrarResultado(conteo);
      resultadoDiv.style.color = "#5af78d";
    } else {
      resultadoDiv.textContent = "Por favor ingresa una frase.";
      resultadoDiv.style.color = "orange"; // Color naranja si no se ingresa una frase
    }
  });
  

 // Usamos fetch para obtener la URL actual y asignarla al input
 fetch(window.location.href)
 .then(response => response.text())  // Obtenemos la respuesta como texto
 .then(data => {
     // Asignamos la URL actual al input con id 'url'
     document.getElementById('url').value = window.location.href;
 })
 .catch(error => console.error('Error en la solicitud AJAX:', error));


var states_list = ['UNSET', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'];
var initial_time = 0;
var CORS_reference = "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS";
 
 document.addEventListener('DOMContentLoaded', () => {
	// obtencion de los elementos HTTML para su posterior interaccion
	let input_recurso = document.getElementById("url");
	let btn_enviar = document.getElementById("enviar");
	let output_contenidos = document.getElementById("contenidos");
	let output_cabeceras = document.getElementById("cabeceras");
	let output_estados = document.getElementById("estados");
	let output_codigo = document.getElementById("codigo");

	btn_enviar.addEventListener("click", event => {
		if (input_recurso.value.length > 0) {
			/* EJERCICIOS 2, 3, 4 y 5 */
			load_process( 
				input_recurso.value, // url, se espera una API de preferencia
				output_contenidos, 
				output_cabeceras, 
				output_estados, 
				output_codigo 
			);
		} else {
			document.getElementById("msg").value = `
				Debe ingresar una URL válida.
				Ejemplos de URL(APIs) válidas:

					https://api.frankfurter.app/latest
					https://mindicador.cl/api/dolar
					https://api.chucknorris.io/jokes/random
			`;
		}
	});
});



// Proceso de carga de información
function load_process(url, o_contents, o_headers, o_states, o_codes) {
  // Limpieza del contenido
  document.getElementById("msg").value = ``;
  o_contents.value = ''; 
  o_headers.value = ''; 
  o_states.value = ''; 
  o_codes.value = ''; 

  let request;
  if (window.XMLHttpRequest) 
      request = new XMLHttpRequest();

  let message_error = `
      Error al comunicarse con la URL ingresada.
      Por favor, ingrese una URL válida, que no rechace una petición por errores 
      Ejemplos de URL(APIs) válidas:

          https://api.frankfurter.app/latest
          https://mindicador.cl/api/dolar
          https://api.chucknorris.io/jokes/random

  `;

  request.onreadystatechange = function() {
      show_request_statuses(request, o_states);
      show_status_codes(request, o_codes);
      if (request.status == 200) {
          show_contents(request, o_contents);
          show_headers(request, o_headers);
      } 
      if ((request.readyState != 1 && request.status == 0) || request.status == 404) {
          document.querySelector("#msg").value = message_error;
      }
  }
  
  initial_time = new Date();
  request.open('GET', url, true);
  request.send();
}

// Ejercicio 2: Mostrar los contenidos en el input correspondiente
function show_contents(response, output) {
  output.value = response.responseText; // Asignar a input
}

// Ejercicio 3: Mostrar cabeceras en el input correspondiente
function show_headers(response, output) {
  output.value = response.getAllResponseHeaders(); // Asignar a input
}

// Ejercicio 4: Mostrar estado de la solicitud
function show_request_statuses(response, output) {
  let final_time = new Date();
  let miliseconds = final_time - initial_time;

  output.value += `${response.readyState} - [ ${miliseconds} ms.] ${states_list[response.readyState]} `;
}

// Ejercicio 5: Mostrar el código de estado
function show_status_codes(response, output) {
  output.value += response.statusText.length > 0 
                      ? `${response.status} / ${response.statusText} `
                      : `${response.status} `;
}
