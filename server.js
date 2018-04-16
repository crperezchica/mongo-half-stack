const http = require('http');
const app = require('./lib/app');
require('./lib/mongodb');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listening(PORT, () => {
    console.log('server running on', server.address().port);
});

// server.listen(3000);
