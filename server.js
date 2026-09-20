// Простой серверный скрипт с уязвимостью
const express = require('express');
const app = express();

app.get('/run', (req, res) => {
    // ОПАСНОСТЬ: eval() исполняет любой ввод пользователя как код!
    let userInput = req.query.code || "Guest";
    res.send('Hello, ${userInput}!');
});

app.listen(3000);
