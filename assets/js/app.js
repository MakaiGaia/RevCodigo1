const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Corrección del indicador en name, para usarlo con ID
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
//Cambio de función a función asincrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //Try catch agregado para la función await
  try {    
    const response = await fetch(`${usersEndpoint}/${username}`);
    //Creación de la variable data para su uso posterior
    const data = await response.json();
    console.log(data);
    //Corrección de comilla simple a backticks
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    //Uso de la funcion handleError
    handleError(err);
  }
    
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);