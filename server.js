const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let counter = 0;

const todoList = [
    { name: "eat", done: true, id: ++counter },
    { name: "sleep", done: false, id: ++counter }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
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

app.put('/update', (req, res) => {
    const id = req.body.id;

    const found = todoList.find((x) => x.id === id);
    found.name = req.body.name;
    found.done = req.body.done;

    res.send(req.body);
})



app.listen(8080, () => console.log("started"));