import "./style.css";
import { capitalize, capitalizeFirstWord } from "./helper.js";
import FetchWrapper from "./fetch-wrapper";
const zip = document.querySelector('#zip');
const zipButton = document.querySelector('.zip-button');

const weatherAPI = new FetchWrapper("http://api.weatherapi.com/v1");

const getData = async (error) => {
  try {
    const zipData = await weatherAPI.get(`/current.json?key=${process.env.KEY}&q=${zip.value}`);
    console.log(zipData.location.name);
  } catch {
    console.error("Error fetching data:", error);
  }
};

const checkInput = () => {
  const regex = /[0-9]{5}/;
  if (regex.test(zip.value)) {
      getData();
  } else {
    alert('Please add 5-digit zip code(numbers ONLY)')
  }
}

zipButton.addEventListener('click', checkInput);

