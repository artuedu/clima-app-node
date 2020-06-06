const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=84942734d2912e77f5e6a1585f755ac9&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}