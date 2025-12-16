const validateBody = (request, response, next) => {

    const { body } = request;

    if(!body.title) {
        response.status(400).json({
            message: "Title is a field required",
        });
    }

    if(!body.description) {
        response.status(400).json({
            message: "Description is a field required",
        })
    }

    next();
};

export {
    validateBody
}