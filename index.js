const {hello, world} = require('./module')

const http = require('http');
const moment = require('moment')

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/welcome': welcome(res); break;
        case '/': home(res); break;
        default: page404(res); break;
    }
   
});

const welcome = res => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'successfully',
        message: 'Welcome to MERN class',
        loginAt: moment(),
        study: 'Node JS'
    }));
    res.end();
}

const page404 = res => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'failed',
        message: 'Resource Not Found'
    }));
    res.end();
}
const home = res => {
    res.end('<h1>Home Page</h1>');
}

server.listen(3000, () => console.log('server running at http://127.0.0:3000'))