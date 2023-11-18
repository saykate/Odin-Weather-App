const toggleButton = document.querySelector('.toggle-button');

const toggleDegrees = () => {
    const deg = document.querySelector('.deg');
    const type = document.querySelector('.type');

    if (toggleButton.classList.contains('far')) {
        toggleButton.classList.remove('far');
        toggleButton.classList.add('cel');
        deg.textContent = `${((deg.textContent - 32) * 5 / 9).toFixed(1)}`;
        type.textContent = 'Celsius';

    } else {
        toggleButton.classList.remove('cel');
        toggleButton.classList.add('far');
        deg.textContent = `${((deg.textContent * 9 / 5) + 32).toFixed(1)}`;
        type.textContent = 'Fahrenheit';
    }
}

toggleButton.addEventListener('click', toggleDegrees);