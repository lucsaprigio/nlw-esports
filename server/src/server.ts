import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.get('/games', (req, res) => {
    const games = prisma.game.findMany()

    return res.json([]);
});

app.get('/games/:id/ads', (req, res) => {
    return res.json({ message: "Hello World !" })
});

app.get('/games/:id/discord', (req, res) => {
    return res.json({ message: "Hello World !" })
});

app.post('/ads', (req, res) => {
    return res.json([]);
});


app.listen(3333);

