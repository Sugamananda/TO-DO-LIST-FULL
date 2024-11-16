const { Router } = require("express");
const { getToDo, createToDo, updateToDo, deleteToDo } = require("../controller/ToDoController");

const router = Router();

router.get('/', getToDo);
router.post('/post', createToDo); // Correct route
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);

module.exports = router;
