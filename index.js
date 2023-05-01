const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <button onclick="window.location.href='/signup'">Sign Up</button>
    </br>
    <button onclick="window.location.href='/login'">Login</button>`);
});

app.listen(port, () => {
    console.log("Node application listening on port " + port);
}); 