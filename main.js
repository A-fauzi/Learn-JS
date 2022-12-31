import { log } from './logger'

log('Import works!')

function alert(msg) {
alert(msg)
}


function txtChange(name) {
// Change text when user click button
var getText = document.getElementById('txtChangeConfirmAlert')

getText.innerHTML = `Hello ${name}`
}


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alertBootstrap = (message, type) => {
const wrapper = document.createElement('div')
wrapper.innerHTML = [
`<div class="alert alert-${type} alert-dismissible" role="alert">`,
    ` <div>${message}</div>`,
    ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
].join('')

alertPlaceholder.append(wrapper)
}

function confirmTxtChange(nama) {
  var confrm = confirm("Apakah nama kamu mau di tampilin?");

if (confrm) {
txtChange(nama)
alertBootstrap(`Thankyou ${nama} :)`, 'success')
} else {
alertBootstrap('Baiklah, kami tidak memaksa!')
}
}

let confirmName = prompt("Siapa nama anda?")
let confirmPassword = prompt('Masukan password anda!')
if (confirmName === 'admin' && confirmPassword === 'admin') {
  confirmTxtChange(confirmName)
} else {
  window.location.href = '/noauth.html'
}



var counter = 0
function textCounter() {
counter++
console.log(counter);

document.getElementById('txtCounter').innerHTML = counter
}

const btnCounter = document.getElementById('btnCounter')

btnCounter.addEventListener('click', () => {
console.log('clicked');

textCounter()

})

let countBanana = 0
let priceBanana = 0
const btnBanana = document.getElementById('btnBanana')
btnBanana.addEventListener('click', () => {
countBanana++
priceBanana += 200
document.getElementById('resultShopBanana').innerHTML = `Buy ${countBanana} Pcs | Total: $${priceBanana}`
})

let countKiwi = 0
let priceKiwi = 0
const btnKiwi = document.getElementById('btnKiwi')
btnKiwi.addEventListener('click', () => {
countKiwi++
priceKiwi += 200
document.getElementById('resultShopKiwi').innerHTML = `Buy ${countKiwi} Pcs | Total: $${priceKiwi}`
})
