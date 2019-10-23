const models = require('../models');

module.exports.getAllTodos = function(req, res){
    models.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(error){
        res.send(error)
    })
}

module.exports.getTodo = function(req, res){
    models.Todo.find({_id: req.params.id})
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(error){
        res.send(error)
    })
}

module.exports.addTodo = function(req, res){
    const todo = req.body;
    console.log('todo')
	console.log(todo)
    models.Todo.create(todo)
    .then(todo => {
		console.log('+++++')
		console.log(todo)
        res.status(201).json(todo);
    })
    .catch(err => {
        res.send(err);
    })
}

module.exports.updateTodo = function(req, res){
    models.Todo.updateOne({_id: req.params.id}, req.body)
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(error){
        res.send(error)
    })
}

module.exports.deleteTodo = function(req, res){
    models.Todo.remove({_id: req.params.id})
    .then(function() {
        res.send("Deleted!!!");
    })
    .catch(function(error){
        res.send(error)
    })
}