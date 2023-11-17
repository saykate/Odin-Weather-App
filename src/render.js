const display = document.querySelector('.display');

const renderWeather = (fetchedData) => {
    const town = document.createElement('p');
    const degrees = document.createElement('p');
    const conditions = document.createElement('p');

    town.classList.add('town');
    degrees.classList.add('degrees');
    conditions.classList.add('conditions');

    town.textContent = `The weather in ${fetchedData.location.name} is:`;
    degrees.textContent = `${fetchedData.current.temp_f} degrees Farenheit`;
    conditions.innerHTML = `${fetchedData.current.condition.text} <img src="${fetchedData.current.condition.icon}">`;

    display.appendChild(town);
    display.appendChild(degrees);
    display.appendChild(conditions);
}

const clearDisplay = () => {
 display.innerHTML = ""
}

export { renderWeather, clearDisplay };