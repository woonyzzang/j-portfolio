const express = require('express');

const app = express();

app.set('host', process.env.HOST || '127.0.0.1');
app.set('port', process.env.PORT || 8080);

app.use(express.static('./dist/j-portfolio'));

// if (process.env.NODE_ENV == 'development') {
//     console.log('Development Mode');
// } else if (process.env.NODE_ENV == 'production') {
//     console.log('Production Mode');
// } else {
//     console.log('Empty Mode');
// }

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/j-portfolio/'}),
);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`'Server listening on ${app.get('host')} : ${app.get('port')}`);
});
