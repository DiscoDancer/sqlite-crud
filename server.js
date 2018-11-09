const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const jwtMiddleware = require('express-jwt');

var SECRET_TOKEN = "ZEBRA";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.use('/protected', jwtMiddleware({
    secret: SECRET_TOKEN, // Use the same token that we used to sign the JWT above
    // Let's allow our clients to provide the token in a variety of ways
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer g1jipjgi1ifjioj
            // Handle token presented as a Bearer token in the Authorization header
            return req.headers.authorization.split(' ')[1];
        }

        // If we return null, we couldn't find a token.
        // In this case, the JWT middleware will return a 401 (unauthorized) to the client for this request
        return null;
    }
}));


let counter = 0;

const todoList = [
    { name: "eat", done: true, id: ++counter },
    { name: "sleep", done: false, id: ++counter }
];

// A simple protected route for demo purposes
app.get('/protected/data', function (req, res) {
    console.log(req.user); // => { _id: <Some ID attached to the JWT signed in the login route above> }

    res.status(200).send({
        text: 'Hello world!'
    })
});

app.post('/login', (req, res) => {
    const { body } = req;
    const id = body.id;

    const token = jwt.sign({
        _id: id
    }, SECRET_TOKEN);

    res.send({
        id,
        token
    });
})

app.get('/todos', (req, res) => {
    res.send(todoList);
})

app.post('/add', (req, res) => {
    const entry = req.body;
    entry.id = ++counter;
    todoList.push(req.body);
    res.send(entry);
})

app.delete('/delete', (req, res) => {
    const id = req.body.id;

    const found = todoList.find((x) => x.id === id);
    const index = todoList.indexOf(found);
    todoList.splice(index, 1);

    res.send(req.body);
})

app.patch('/update', (req, res) => {
    const id = req.body.id;

    const found = todoList.find((x) => x.id === id);
    if (req.body.name) {
        found.name = req.body.name;
    }
    found.done = req.body.done;
    res.send(req.body);
})

app.put('/replace', (req, res) => {
    const id = req.body.id;
    const found = todoList.find((x) => x.id === id);
    const index = todoList.indexOf(found);
    todoList.splice(index, 1);

    todoList.push({
        name: req.body.name,
        done: req.body.done,
        id
    });

    res.send(req.body);
})



app.listen(3000, () => console.log("started"));