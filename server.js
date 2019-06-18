'use strict';

const http = require('http');
const body = require('./lib/parse-body');
let server = null;

/**
 * Runs a server on a predetermined port.
 * @param {Number} port - The port numner.
 * @param {Router} router - Router with method "route".
 */
module.exports.start = (port = 2000, router = {}) => {
    server = http.createServer((request, response) => {
        body.parse(request, (error) => {
            error ? router.error(error, response) : router.route(request, response);
        });
    });

    server.listen(port, () => 
        console.log(`Server listening at port: ${port}.`));
    server.on('close', () => console.log('server stoped'));
};

/**
 * Closes the port and stops the server.
 * */
module.exports.stop = () => {
    server.close();
    server = null;
}

/**
 * @returns {Boolean} - If the server doesn't work  "true".
 * */
module.exports.serverIsWork = () =>
    server ? true : false;