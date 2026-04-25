import defineConfig, { USE_ENV } from '@steijnveer/file-based-router/defineConfig';

export default defineConfig({
  logLevel: {
    dev: 'debug',
    prod: 'info',
  },
  paths: {
    src: 'src',
    build: 'dist',
  },
  server: {
    port: USE_ENV,
    hostname: USE_ENV,
    allowedOrigins: null,
  },
  router: {
    routesDir: 'routes',
    routesBasePath: '/',
  },
  plugins: [],
});
