const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}`);
    console.log(`Request handled by worker ${process.pid}`);
});

server.listen(8000, () => {
    console.log(`Server started by worker ${process.pid}`);
})