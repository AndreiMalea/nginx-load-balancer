const express = require('express'),
    app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = 3000
app.get('/',
    (req, res) => res.send('Response sent from Service 1 running on port ' + port))
app.listen(port,
    () => console.log(`⚡️[bootup]: Server is running at port: `+ port));