import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getTaskById from "./endpoints/getTaskById";
import getUserById from "./endpoints/getUserById";



// enpoints para user
app.put('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)




// endpoints para tarefas
app.post('/task', createTask)
app.get('/task/:id', getTaskById)