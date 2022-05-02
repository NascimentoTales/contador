const dec = document.getElementById('dec')
const reset = document.getElementById('reset')
const inc = document.getElementById('inc')
const span = document.getElementById('number')

let contador = 0

init()

function init() {
    inc.addEventListener('click', incrementar)
    reset.addEventListener('click', resetar)
    dec.addEventListener('click', decrementar)
}

function incrementar() {
    contador++
    span.textContent = contador
    console.log(contador);
    if (contador > 0) {
        removeClasse()
        span.classList.add('positivo')
    }
    if (contador === 0) {
        removeClasse()
    }
}

function resetar() {
    contador = 0
    span.textContent = contador
    removeClasse()
}

function decrementar() {
    contador--
    span.textContent = contador
    if (contador < 0) {
        removeClasse()
        span.classList.add('negativo')
    }if (contador === 0) {
        removeClasse()
    }
}

function removeClasse() {
    span.classList.remove('positivo')
    span.classList.remove('negativo')
}