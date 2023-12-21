const countButton = document.getElementById('countButton')
const resetButton = document.getElementById('resetButton')

async function contar() {
    let display = document.getElementById('display')
    display.innerHTML ="";

    for (let i = 1; i<= 10;i++) {
        display.innerHTML += `<p>${i}</p>`;
        await new Promise(r => setTimeout(r, 1000));
    }
}

function reset() {
    let display = document.getElementById('display')
    display.innerHTML = '...'
}

countButton.addEventListener('click', contar);
resetButton.addEventListener('click', reset);