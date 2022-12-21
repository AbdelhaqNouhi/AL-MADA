const express = require('express')();
// const dotenv = require('dotenv').config()


const app = (express)


app.get('/', (req, res) => {
    res.json({ message: 'Docker is easy!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});