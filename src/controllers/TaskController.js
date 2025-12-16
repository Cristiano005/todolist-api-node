import * as TaskModel from "../model/TaskModel.js";

const index = async (_request, response) => {
    const tasks = await TaskModel.getAll();
    return response.status(200).json(tasks);
}

const store = async (request, response) => {
    const createdTask = await TaskModel.createTask(request.body);
    return response.status(201).json({
        data: createdTask,
        message: "Task created successfully!"
    });
}

const update = async (request, response) => {
    const { id } = request.params;
    await TaskModel.updateTask(id, request.body)
    return response.status(204).json();
};

const destroy = async (request, response) => {
    const { id } = request.params;
    await TaskModel.deleteTask(id);
    return response.status(204).json();
};

export {
    index, store, update, destroy
}