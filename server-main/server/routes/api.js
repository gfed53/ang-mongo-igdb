// jshint esversion: 6

const express = require('express');
const router = express.Router();

const Todo = require('../schemas/Todo');

const config = require('../config');


// Grabs list of todos from db (if any)
router.get('/todos', function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log('todos are:', todos);
        res.json(todos);
    });
});

// Adds a new todo to the db
router.post('/todos', function(req, res){
	Todo.create({
        _description: req.body._description,
        _checked: false
    }, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});

// Alters the checked/unchecked state of todo of id param
router.put('/todos/:id', function(req,res) {
	console.log('put req params:', req.params);
	console.log('put req body:', req.body);
	if(req.params.id !== req.body._id){
		return res.status(400).json({
			message: 'Bad Request, Hombre'
		});
	}
	Todo.findOneAndUpdate({_id: req.params.id}, {_checked: req.body._checked}, function(err,item){
		console.log('updated item:', item);
		if(err || !item) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(item);
	});
});

// Deletes todo of id param from the db
router.delete('/todos/:id', function(req,res) {
	console.log(req.params);
	console.log(typeof req.params.id);
	Todo.findOneAndRemove({_id: req.params.id}, function(err, item){
		if(err || !item){
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(item);
	});
});

module.exports = router;

