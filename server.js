const express = require('express');

const app = express();

app.use(express.static('./dist/j-portfolio'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/j-portfolio/'}),
);

app.listen(process.env.PORT || 8080);
