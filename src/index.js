import './style.css';
import { capitalize, capitalizeFirstWord } from './helper.js';
import FetchWrapper from './fetch-wrapper';

console.log('it is working')

const weatherAPI = new FetchWrapper('http://api.weatherapi.com/v1');	


weatherAPI.get('/current.json?key=db4ae2a50d4c48ca86c205041231511&q=96746')
.then(data => {
  console.log(data)
})

// create a zip input ${zip}