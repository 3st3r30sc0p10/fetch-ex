const resPerro = document.getElementById('resultadosPerro')
const resGato = document.getElementById('resultadosGato')
const perro_btn = document.getElementById('botonPerros')
const gato_btn = document.getElementById('botonGatos')

perro_btn.addEventListener('click', llamarPerros);
gato_btn.addEventListener('click', llamarGatos);

function llamarPerros() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            resPerro.innerHTML = `<img src="${data.message}"/>`;
            console.log(data);
        })
}

function llamarGatos() {
    fetch('http://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            resGato.innerHTML = `<img src="${data.file}"/>`;
            console.log(data);
        })
}