import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json({ message: "Hello World !" });
});
app.listen(3333);
