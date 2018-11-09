import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import jwtMiddleware from "express-jwt";
import jwt from "jsonwebtoken";

import Repository from "./repository.mjs";

const app = express();
const SECRET_TOKEN = "ZEBRA";
const repository = new Repository();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/protected", jwtMiddleware({
    secret: SECRET_TOKEN, // Use the same token that we used to sign the JWT above
    // Let's allow our clients to provide the token in a variety of ways
    getToken(req) {
        if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
            // Handle token presented as a Bearer token in the Authorization header
            return req.headers.authorization.split(" ")[1];
        }

        // If we return null, we couldn't find a token.
        // In this case, the JWT middleware will return a 401 (unauthorized) to the client for this request
        return null;
    },
}));

app.post("/login", (req, res) => {
    const { body } = req;
    const id = body.id;

    const token = jwt.sign({
        _id: id,
    }, SECRET_TOKEN);

    res.send({
        id,
        token,
    });
});

app.get("/todos", (req, res) => {
    res.send(repository.getAll());
});

app.post("/protected/add", (req, res) => {
    console.log(`user id: ${req.user._id} method: add`);

    const entry = req.body;
    repository.add(entry);
    res.send(entry);
});

app.delete("/protected/delete", (req, res) => {
    console.log(`user id: ${req.user._id} method: delete`);

    const id = req.body.id;
    if (id > 0) {
        repository.delete(id);
        res.send(req.body);
    } else {
        res.sendStatus(400);
    }
});

app.patch("/protected/update", (req, res) => {
    console.log(`user id: ${req.user._id} method: update`);

    if (req.body.id > 0) {
        repository.update(req.body);
        res.send(req.body);
    } else {
        res.sendStatus(400);
    }
});

app.put("/protected/replace", (req, res) => {
    console.log(`user id: ${req.user._id} method: replace`);

    if (req.body.id > 0) {
        repository.replace(req.body);
        res.send(req.body);
    } else {
        res.sendStatus(400);
    }
});

app.listen(3000, () => console.log("started"));
