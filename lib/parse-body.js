'use strict';

const parseJson = (request, cb) => {
    const { headers, method, url } = request;
    let body = [];

    request.on('error', (err) => {
        cb(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body);

        if (Buffer.byteLength(body) > 0) {
            request.body = JSON.parse(body.toString());
            cb();
        }
        else {
            request.body = {};
            cb();
        }
    });
};

module.exports.parse = (request, cb) => {
    switch (request.headers['content-type']) {
        case 'application/json':
            parseJson(request, cb);
            break;
    
        default:
            cb(new Error(`Content-type: ${request.headers['content-type']} not suported.`));
            break;
    }
};

