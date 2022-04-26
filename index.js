const {hello, world} = require('./module')

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'successfully',
        message: 'Welcome to MERN class'
    }));
    res.end();
});

server.listen(3000, () => console.log('server running at http://127.0.0:3000'))