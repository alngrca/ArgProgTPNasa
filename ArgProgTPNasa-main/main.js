// window.addEventListener('load', obtenerDatos);

// function obtenerDatos(){
//     const Nasa_api = 'vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T';
//     const fechapod = document.querySelector('fecha').value;
//     const ruta = `https://api.nasa.gov/planetary/apod?date=${fecha}&api_key=${Nasa_api}`;

//     fetch(ruta)
//     .then(respuesta => respuesta.json())
//     .then(resultado => mostrarDatos(resultado))
// }
// function mostrarDatos({date, title, media_type, url, copyright}) {
//     const titulo = document.querySelector('#titulo-apod');
//     titulo.innerHTML = title;
//     const fecha = document.querySelector('#fecha-apod');
//     fecha.innerHTML = date;
//     const copy = document.querySelector('#copy-apod');
//     copy.innerHTML = copyright;
    

//     const multimedia = document.querySelector('#c_multimedia');
//     if (media_type == 'video') {
//         multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`

//     } else {
//         multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
//     }

// }



// window.addEventListener('load', obtenerDatos);
// function obtenerDatos() {
//     // const fecha = fechaInput.value;
//     // const titulo = document.querySelector('#titulo-apod');
//     // const copy = document.querySelector('#copy-apod')
//     // const urlnew = `https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T&date=${fechaActual}`;
// }

window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loader');
  var mainContent = document.getElementById('spinner');
  var body = document.querySelector('body');
  
  setTimeout(function() {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
    body.style.overflow = 'auto'; // Vuelvo a activar el scroll
    body.style.overflowX = 'hidden';
    
    let readyElement = document.getElementById('loading-text');
    typeWriter(readyElement, readyElement.textContent);
  }, 900);
});



window.addEventListener('load', obtenerImagenDelDia);

function obtenerImagenDelDia() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T';
  const titulo = document.querySelector('#titulo-apod');
  const copy = document.querySelector('#copy-apod');
  const imagen = document.getElementById('imagen');
  const loader = document.getElementById('loader');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      imagen.src = data.url;
      titulo.innerHTML = data.title;
      copy.innerHTML = data.copyrigth;
    })
    .catch(error => console.log(error));
}

const fechaInput = document.getElementById('fecha');
const loader = document.getElementById('loader');

// Establecer la fecha actual como valor por defecto del input
const fechaActualISO = new Date().toISOString().split("T")[0];
fechaInput.setAttribute("value", fechaActualISO);

fechaInput.onchange = function() {
  // Muestra el spinner cuando se cambia la fecha
  loader.style.display = 'block';

  fechaInput.addEventListener('change', () => {
    const fecha = fechaInput.value;
    const titulo = document.querySelector('#titulo-apod');
    const copy = document.querySelector('#copy-apod')
    const url = `https://api.nasa.gov/planetary/apod?api_key=vZQVBQWVQr1EmRgO2Avwlnjrau0SaX9szdgjnI8T&date=${fecha}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        imagen.src = data.url;
        titulo.innerHTML = data.title;
        copy.innerHTML = data.copyright;
      })
      .catch(error => console.log(error));

    
  });

  // carga para el ejemplo
  setTimeout(function() {
    // Oculta el spinner después de 3 segundos
    loader.style.display = 'none';
  }, 1000);
};
// funcion enviar mail
function sendMail() {
    var link = 'mailto:alan.garciag10@outlook.com?subject=Message from '
             +document.getElementById('mail').value + ' | Doubt: '+document.getElementById('dudas').value
             +'&body='+document.getElementById('message').value;
    window.location.href = link;
}

// maximo para el calendario

const fechaActual = new Date().toISOString().split("T")[0];
fechaInput.setAttribute("max", fechaActual);


// spinner

window.addEventListener("load", function () {
    var loader = document.querySelector("#loader");
    var text = document.querySelector(".loader-text");
  
    // Ocultar el spinner después de 3 segundos
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
})


var audio = new Audio('music/musica.mp3');
let detector = 1;
function asd() {
  let btn = document.getElementById("playBtn");
  if (detector === 1) {
    audio.play();
    btn.innerHTML = "<i class='material-icons'>pause_circle</i>";
    detector = 0;
  } else if ( detector === 0){
    audio.pause();
    btn.innerHTML = "<i class='material-icons'>play_circle</i>";
    detector = 1;
  }
}

function updateVolume() {
  audio.volume = document.getElementById("volCtrl").value;
}
