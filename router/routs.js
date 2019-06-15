'use strict';

class Routs {
    constructor() {
        this._routs = {};
    };

    on(url, cb) {
        this._routs[url] = cb;
    };

    route(url) {
        return this._routs[url];
    };
}

module.exports = Routs;