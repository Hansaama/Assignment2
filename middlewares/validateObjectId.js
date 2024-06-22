const mongoose = require('mongoose');

const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: "Invalid ObjectId" });
    }
    next();
};

module.exports = validateObjectId;
