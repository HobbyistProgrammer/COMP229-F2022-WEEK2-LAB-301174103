/** * * * * * * * * * * * * * * * * * *
 * Author: Benton Le
 * Date: 09/16/2022
 * Professor: Thiago Vitor De Castilho
 * Lab: Lab 2 - Week 2
 * Course: COMP229 - 402
 * * * * * * * * * * * * * * * * * * **/
const connect = require('connect');

const app = connect();


function Message(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
    next();
};

function HTMLMessage(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>');
};

function JSONMessage(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.end('{ message: "Hello from NodeJS Application as json" }');
};

app.use('/html', HTMLMessage);
app.use('/json', JSONMessage);
app.use('/', Message);

app.listen(3000);

console.log('Server running at http://localhost:3000');