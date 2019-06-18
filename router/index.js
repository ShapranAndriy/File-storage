'use strict';

const Routs = require('./routs');

class Router {
    /**@constructor */
    constructor() {
        this._routs = {
            GET: new Routs(),
            POST: new Routs(),
        }

        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
    }

    /**
     * Submit on GET request
     * @param {String} url - Request on URL.
     * @param {Function} callback - Submit on request url.
     */
    get(url, callback) {
        this._routs.GET.on(url, callback);
    }

    /**
     * Submit on POST request
     * @param {String} url - Request on URL
     * @param {Function} callback - Submit on request url
     */
    post(url, callback) {
        this._routs.POST.on(url, callback);
    }

    /**
     * Call handller at this URL
     * @param {Request} request
     * @param {Response} response
     */
    route(request, response) {
        const { url, method } = request;

        const routs = this._routs[method];

        if(routs) {
            const fn = this._routs[method].route(url);
            fn ? fn(request, response) : this.error(new Error(`doesn't exist this URL: "${url}" in method: ${method}.`), response);
        }
        else {
            this.error(new Error(`method: ${method} not found.`), response);
        }
    }

    /**
     * If URL not found
     * @param {Request} request
     * @param {Response} response
     */
    error(error, response) {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write(error.toString());
        response.end();
    }
}

module.exports = Router;