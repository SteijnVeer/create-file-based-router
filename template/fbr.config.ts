export default {
  logLevel: 'debug',
  server: {
    port: 3000,
    hostname: 'localhost',
    allowedOrigins: null,
  },
  router: {
    rootDir: '.\\src\\routes',
    basePath: '/',
    allowedExtensions: ['.ts', '.js'],
  },
};