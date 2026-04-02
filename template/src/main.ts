import ready from '@steijnveer/file-based-router';

const server = await ready;

// initialize things like database connections, etc. here

await server.start();
