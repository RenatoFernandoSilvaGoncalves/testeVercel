import express from "express";

const host = "0.0.0.0";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("<h1>O pai tá on!</h1>");
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})


