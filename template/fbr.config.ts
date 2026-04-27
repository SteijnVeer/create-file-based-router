import defineConfig, { USE_ENV } from '@steijnveer/file-based-router/defineConfig';

export default defineConfig({
  logLevel: {
    dev: 'debug',
    prod: 'info',
  },
  paths: {
    srcDir: 'src',
    buildDir: 'dist',
  },
  server: {
    port: USE_ENV,
    hostname: USE_ENV,
    allowedOrigins: null,
    staticFilesDir: 'public',
  },
  router: {
    routesDir: 'routes',
    routesBasePath: '/',
  },
  plugins: [],
});
