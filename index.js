const express = require('express'); //importing express

//using express. Single app may contain multiple express apps but usually only single express object is used including this app.
const app = express(); 

// This section is a get route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(5000); //listen to the port 5000