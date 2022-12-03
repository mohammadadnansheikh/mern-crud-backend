const TodoModel = require('../models/todomodel');

module.exports.getTodo = async (req, res)=>{
    const todo = await TodoModel.find();
    res.send(todo);
}

module.exports.saveTodo = async(req, res)=>{
    const {text} = req.body;
    const todo = await TodoModel.create({text})
    .then((data)=>{
        console.log(`Added Successfully.........`)
        console.log(data);
        res.send(data);
    })
}

module.exports.updateTodo = async(req, res)=>{
    const {_id, text} = req.body;
    TodoModel.findByIdAndUpdate(_id, {text})
    .then(()=>{
        res.set(201).send("Updated Successfully...........")
    })
    .catch((err)=>{
        console.log('UPDATE ERROR', err);
    })
}

module.exports.deleteTodo = async(req, res)=>{
    const {_id} = req.body;
    TodoModel.findByIdAndDelete(_id)
    .then(()=>{
        res.set(201).send("Deleted Successfully...........")
    })
    .catch((err)=>{
        console.log('UPDATE ERROR', err);
    })
}