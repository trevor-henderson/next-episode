const Hapi = require('@hapi/hapi');
const Path = require('path');

const index = new Hapi.Server({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 5000,
});

const start = async () => {
  // eslint-disable-next-line global-require
  await index.register([require('@hapi/inert')]);

  await index.start();

  index.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../dist'),
        listing: false,
        index: true,
      },
    },
  });
};
// eslint-disable-next-line no-console
start().catch((e) => console.log('error', e));
