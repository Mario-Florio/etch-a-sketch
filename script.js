const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    div.className ='grid-block'
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black'
    })
    container.appendChild(div)
}

let gridBlock = document.querySelectorAll('.grid-block')

erase = document.querySelector('#erase')

erase.addEventListener('click', () => {
    gridBlock.forEach(elem => [
        elem.style.backgroundColor = 'white'
    ])
})