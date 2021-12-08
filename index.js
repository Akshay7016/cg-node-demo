const express = require('express');
const app = express();
const port = 8084;

app.get('/',(request, response) => {
    response.send(`Welcome to my first node app.`);
    console.log(`Welcome`);
});

app.get('/home',(request, response) => {
    response.send(`Welcome to Home.`);
    console.log(`Home`);
});

app.get('/register',(request, response) => {
    response.send(`Welcome to Registration page.`);
    console.log(`Register`);
});

app.get('/login',(request, response) => {
    response.send(`Welcome to login page.`);
    console.log(`Login`);
});

app.get('/emp', (request, response) => {
    axios.get('http://localhost:8082/getallemps')
        .then((res) => {
            response.send(res.data);
        })
        .catch((err) => {
            response.send(err);
        });
    console.log(`emp`);
});

//---------------------------------------------------------

app.listen(port, () => {
    console.log(`App is running...`);

});

// go to CMD and run - 
// NPM start 