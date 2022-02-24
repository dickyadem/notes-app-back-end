const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '54.84.208.43',
        routes: {
          cors: {
            origin: ['*'],
          },
        },
      });
 
  server.route(routes);
 
  await server.start();
  console.log(`Server Bergama pad ${server.info.uri}`);
};
 
init();