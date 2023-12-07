const {Router}=require("express");
const { getTodo, deleteTodo, updateTodo } = require("../controllers/todo.controller");
const {saveTodo} = require("../controllers/todo.controller");

const router=Router()

router.get('/',getTodo)
router.post('/save',saveTodo)
router.post('/delete',deleteTodo)
router.post('/update',updateTodo)

module.exports=router;
