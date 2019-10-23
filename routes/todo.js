const todoHelper = require('../helpers/todos');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(todoHelper.getAllTodos)
    .post(todoHelper.addTodo)

router.route('/:id')
    .get(todoHelper.getTodo)
    .put(todoHelper.updateTodo)
    .delete(todoHelper.deleteTodo)

module.exports = router;