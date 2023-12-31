import "./normalize.css";
import "./style.css";
import FetchWrapper from "./fetch-wrapper";
import { renderWeather, clearDisplay } from "./display.js";
import { toggleDegrees } from "./toggle.js";
const zip = document.querySelector('#zip');
const zipButton = document.querySelector('.zip-button');

const weatherAPI = new FetchWrapper("http://api.weatherapi.com/v1");

const getData = async () => {
  try {
    const zipData = await weatherAPI.get(`/current.json?key=${process.env.KEY}&q=${zip.value}`);
    clearDisplay();
    renderWeather(zipData);
  } catch(error) {
    console.error("Error fetching data:", error);
  }
};

const checkInput = () => {
  const regex = /[0-9]{5}/;
  if (regex.test(zip.value)) {
      getData();
      zip.value = ''
  } else {
    alert('Please add 5-digit zip code(numbers ONLY)')
  }
}

zipButton.addEventListener('click', checkInput);


