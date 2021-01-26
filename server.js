const PORT = 3000;
const HOST = 'localhost';

const Express = require('express');
const Cors = require('cors');

const app = Express();

// Middleware.
app.use(Cors());


// Routing.
app.get('/site', (req, res) => {
    res.json({
        ok: true,
        data: {
            theme: 'default'
        }
    });
})

// Application handler.
app.listen(PORT, HOST, function () {
    console.log('API Server is running.');
})