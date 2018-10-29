const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

let counter = 0;

const todoList = [
    { name: "eat", done: true, id: ++counter },
    { name: "sleep", done: false, id: ++counter }
];

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