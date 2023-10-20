const  express =require ("express");
const taskController =require ("../controllers/TaskController.js");

const router = express.Router();

router.post("/tasks", taskController.addTask);
router.get("/tasks", taskController.getAllTasks);
router.get("/tasks/:id",taskController.getTaskById);
router.put("/tasks/:id",taskController.updateTask);
router.delete('/tasks/:id',taskController.deleteTask)
router.patch('/tasks/:id',taskController.updateOneItem)

module.exports=  router ;