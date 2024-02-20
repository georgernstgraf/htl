const express = require('express');
const app = express();
app.use('/', express.static('.'));
app.get('/trigger_delay', (req, res) => {
    const data = JSON.stringify(req.query);
    return res.send(`query: ${data}!`);
});
app.get('/clicked', (req, res) => {
    return res.send(`/clicked ${new Date().valueOf()}`);
});
app.get('/news', (req, res) => {
    return res.send(`/news: ${new Date().valueOf()}`);
});
app.listen(3000, () => console.log('Server running on http://localhost:3000/'));
