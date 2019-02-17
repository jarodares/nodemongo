const express = require('express');

const config = require('./server/config');
//start database
require('./database')
//start server
const app = config(express());

app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});