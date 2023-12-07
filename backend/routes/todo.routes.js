const {Router}=require("express");
const { getTodo } = require("../controllers/todo.controller");
const {saveTodo} = require("../controllers/todo.controller");

const router=Router()

router.get('/',getTodo)
router.post('/save',saveTodo)

module.exports=router;
