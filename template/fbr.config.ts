export default {
  plugins: [],
  logLevel: 'debug',
  server: {
    port: 3000,
    hostname: 'localhost',
    allowedOrigins: null,
    forceNewImportMap: true,
  },
  router: {
    rootDir: '.\\src\\routes',
    basePath: '/',
    allowedExtensions: ['.ts'],
  },
};