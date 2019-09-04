'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./app/routes/routes');

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3001,
        routes: {
            cors: true
        },
    });
    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
