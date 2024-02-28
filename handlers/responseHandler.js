const handleResponse = (req, res, next) => {
    res.sendResponse = (status, message, data) => {
        return res.status(status).send({
            status: status < 400 ? 'SUCCESS' : 'FAILED',
            message: message,
            data: data
        });
    };
    next();
};

module.exports = handleResponse