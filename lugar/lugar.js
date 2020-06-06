const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': '250443fd62mshfde3518abfbfaf5p172795jsn7b6ef0a3ae25' }
    });

    //Objeto auxiliar pues no funciona la api
    const data = {
        name: 'Ottawa, Canada',
        type: 'city',
        c: 'CA',
        zmw: '00000.285.71063',
        tz: 'America/Toronto',
        tzs: 'EST',
        l: '/q/zmw:00000.285.71063',
        ll: '45.419998 -75.690002',
        lat: '45.419998',
        lon: '-75.690002'
    };

    // const resp = await instance.get();

    // if(resp.data.Results.length === 0){
    //     throw new Error(`No hay resultados para ${ dir }`);
    // }

    // const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}