const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log('server started');

    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch (req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/home':
            res.statusCode = 301;
            res.setHeader('Location', 'index.html');
            res.end();
            break;

        case '/infopalace':
            res.statusCode = 301;
            res.setHeader('Location', 'index.html');
            res.end();
            break;

        case '/compiler':
            path+= '/FirstPage/OtherPages/html/compiler.html';
            res.statusCode = 200;
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () =>{
    console.log('server listening on port 3000');
});