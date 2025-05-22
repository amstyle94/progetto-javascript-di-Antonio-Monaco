const numero = document.getElementById('numero')
const buttonaggiungi = document.getElementById('aggiungi')
const buttonsottrai = document.getElementById('sottrai')

buttonaggiungi.addEventListener('click', add)
buttonsottrai.addEventListener('click', subtract)

let value = 0

function add() {
  value++
  numero.innerHTML = value
  }

function subtract() {
  value--
  numero.innerHTML = value
}