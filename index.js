const express = require('express');
const todoRoutes = require('./routes/todo');
const bodyParser = require('body-parser');
const todoHelper = require('./helpers/todos');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));

app.use('/api/todos', todoRoutes);
app.use('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})
 
app.listen(3000, () =>{
    console.log('Server started....')
});