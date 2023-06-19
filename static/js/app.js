let numbers = document.querySelectorAll('.num')
let text = document.querySelectorAll('text')
let plus = document.querySelectorAll('plus')
let minus = document.querySelectorAll('minus')
let multi = document.querySelectorAll('multi')
let odd = document.querySelectorAll('odd')
let ac = document.querySelectorAll('clear')
let res = document.querySelectorAll('equal')

let nums = []

function clear() {
    text.innerHTML = '0'
}

function add_num() {
    text.innerHTML = num
}

for (let num of numbers) {
    num.addEventListener('click', () => {text.innerHTML += num.innerHTML})
}

ac.addEventListener('click', clear)