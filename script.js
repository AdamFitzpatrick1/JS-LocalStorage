const textToStore = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput')

if (textToStore) {
    text.textContent = storedInput
}

textToStore.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)