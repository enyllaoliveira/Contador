let bottons = document.querySelectorAll('.btn')
let value = document.getElementById('value')
let counter = 0

for (let i = 0; i <= bottons.length-1; i++){
bottons[i].addEventListener('click', function(e){
    let classList = e.target.classList
    if (classList.contains('diminuir')) {counter--}
    else if (classList.contains('aumentar')) {counter++}
    else {counter = 0}
    if (counter > 0) {
        value.style.color = 'green'
    }
    else if (counter < 0) {
        value.style.color = 'red'
    } else {
        value.style.color = 'black'
    }

value.textContent = counter
}) 
}

