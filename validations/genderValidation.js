const Joi = require("joi");

const validateGender = (gender) => {
    const schema = Joi.object({
        name: Joi.string().min(1),
    });
    return schema.validate(gender);
};

module.exports = { validateGender };
