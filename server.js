const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.post('/env/var', async (req, res) => {
    let resp = {}

    req.body?.keys?.forEach(key => resp[key] = process.env[key])

    res.json(resp)
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
