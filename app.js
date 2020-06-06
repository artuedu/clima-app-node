//Requireds
const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

// const getInfo = (dir) => {
//     return new Promise((resolve, reject) => {
//         lugar.getLugarLatLng(dir)
//             .then(resp1 => {
//                 clima.getClima(resp1.lat, resp1.lng)
//                     .then(resp2 => {
//                         resolve(`El clima de ${ dir } es de ${ resp2 }`);
//                     })
//                     .catch(error2 => {
//                         reject(`No se pudo determinar el clima de ${ dir }`);
//                     });
//             })
//             .catch(error1 => {
//                 reject(`No se pudo determinar el clima de ${ dir }`);
//             });

//     });
// }

const getInfo = async(dir) => {
    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ dir } es de ${ temp }.`;
    } catch {
        return `No se pudo determinar el clima de ${ dir }`;
    }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(error => {
        console.log(error);
    });


// lugar.getLugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// clima.getClima(40.750000, -74.000000)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(error => {
//         console.log(error);
//     });