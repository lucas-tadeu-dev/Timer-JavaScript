function relogio (){
function getTimeFromSecond(seconds) {
  const data = new Date(seconds * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}
console.log(getTimeFromSecond(0))

const relogio = document.querySelector('.relogio')
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar') NÃO PRECISA MAIS MAN O DOM AQUI, JÁ QUE ESTÁ FEITO NO  ADDEVENTLISTENER
let seconds = 0
let timer;

function iniciaRelogio() {
   timer = setInterval(function () {
    seconds++
    relogio.innerHTML = getTimeFromSecond(seconds)
  }, 1000)
}

document.addEventListener('click', function(event){
  const element = event.target;

  
  if(element.classList.contains('iniciar')){ 
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio()
  }
  
  if(element.classList.contains('pausar')){ 
    clearInterval(timer);
    relogio.classList.add('pausado')
  }
  
  if(element.classList.contains('zerar')){ // se existe a classe zerar no meu elemento target ou seja clicado
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    seconds = 0;
    relogio.classList.remove('pausado')
  }
})
}
relogio()



// iniciar.addEventListener('click', function (event) {
//   relogio.classList.remove('pausado')
//   clearInterval(timer);
//   iniciaRelogio()
// })

// pausar.addEventListener('click', function(event){
//  clearInterval(timer);
//  relogio.classList.add('pausado')
// })

// zerar.addEventListener('click', function(event){
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00'
//   seconds = 0;
// })
