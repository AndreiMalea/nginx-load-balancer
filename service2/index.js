const express = require('express'),
    app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = 3001
app.get('/',
    (req, res) => res.send('Response sent from Service 2 running on port ' + port))
app.listen(port,
    () => console.log(`⚡️[bootup]: Server is running at port: `+ port));