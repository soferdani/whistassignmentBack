const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/whistAssignment', { useNewUrlParser: true })
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)
const port = process.env.PORT || 8889;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});