'use strict';

// Load modules

const Azure = require('azure-storage');
const Hoek = require('hoek');


exports.register = function (server, options, next) {

    // Azure Storage requires env variables containing credentials to be set. Otherwise,
    // credentials must be passed into the constructor
    Hoek.assert(process.env.AZURE_STORAGE_ACCOUNT, 'An Azure Storage Account Name is required.');
    Hoek.assert(process.env.AZURE_STORAGE_ACCESS_KEY, 'An Azure Storage Account Key is required.');

    // Expose the Azure Storage client, which can be referenced via
    // `server.plugins['hapi-azure-storage'].client`
    server.expose('client', Azure);

    next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};
