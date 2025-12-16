import connection from "../database/connection.js";

const getAll = async (fields = "*") => {
    const [tasks] = await connection.execute(`SELECT ${fields} FROM tasks`);
    return tasks;
};

const createTask = async (task) => {

    const { title, description } = task;

    const query = "INSERT INTO tasks(title, description, status) VALUES (?, ?, ?)";

    const [createdTask] = await connection.execute(query, [
        title, description, "pending"
    ]);

    return { insertId: createdTask.insertId };
};

const updateTask = async (id, task) => {

    const { title, description, status } = task;

    const query = "UPDATE tasks SET title = ?, description = ?, status = ? WHERE ID = ?";

    return await connection.execute(query, [
        title, description, status, id
    ]);
};

const deleteTask = async (id) => {
    const [deletedTask] = await connection.execute("DELETE FROM tasks WHERE id = ?", [id]);
    return deletedTask;
}

export {
    getAll, createTask, updateTask, deleteTask
}