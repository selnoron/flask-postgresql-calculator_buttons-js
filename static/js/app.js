 const numbers = document.querySelectorAll('.calculator__key')
const text = document.querySelector('#text')
const opers = document.querySelectorAll('.calculator__key--operator')
const ac = document.querySelector('#clear')
const res = document.querySelector('#equal')

let nums = []

ac.addEventListener('click', () => {
    text.value= '0'
    nums = []
})

for(let num of numbers) {
    num.addEventListener('click', () => {
        if (text.value == '0' && num.innerHTML != '.') {
            text.value = ''
        }
        text.value += num.innerHTML
    })
}

for(let oper of opers) {
    oper.addEventListener('click', () => {
        let res = ''
        for(let n = text.value.length - 1; 0 <= n; n--) {
            if (Number(text.value[n]) || text.value[n] == '.') {
                res += text.value[n]
            }
            else {
                break
            }
        }
        nums.push(Number(res.split('').reverse().join('')))
        nums.push(oper.innerHTML)
        text.value += oper.innerHTML
        console.log(nums)
    })
}

function calculate(arr) {
    // умножение и деление
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*') {
    arr[i - 1] = arr[i - 1] * arr[i + 1];
    arr.splice(i, 2);
    i--;
    } else if (arr[i] === '/') {
    arr[i - 1] = arr[i - 1] / arr[i + 1];
    arr.splice(i, 2);
    i--;
    }
    }
    // плюс и минус
    let result = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === '+') {
    result += arr[i + 1];
    } else if (arr[i] === '-') {
    result -= arr[i + 1];
    }
    }
    return result;
    }

res.addEventListener('click', () => {
    let res = ''
    for(let n = text.value.length - 1; 0 <= n; n--) {
        if (Number(text.value[n]) || text.value[n] == '.') {
            res += text.value[n]
        }
        else {
            break
        }
    }
    nums.push(Number(res.split('').reverse().join('')))
    console.log(nums)
    text.value += '=' +  calculate(nums)
    nums = []

})