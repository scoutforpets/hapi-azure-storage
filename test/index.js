'use strict';

// Load modules

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');

// Test shortcuts

const lab = exports.lab = Lab.script();
const before = lab.before;
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('hapi-azure-storage', () => {

    let server;

    before((done) => {

        // Set necessary env variables
        process.env.AZURE_STORAGE_ACCOUNT = 'testaccount';
        process.env.AZURE_STORAGE_ACCESS_KEY = 'testkey';

        // Create a new Hapi server
        server = new Hapi.Server();

        // Register the plugin
        server
            .register(require('../lib'))
            .then(() => done())
            .catch((err) => done(err));
    });

    it('azure storage client is accessible via server.plugins', (done) => {

        expect(server.plugins['hapi-azure-storage'].client).to.exist();
        done();
    });
});
