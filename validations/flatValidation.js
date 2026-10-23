const Joi = require("joi");

const validateFlat = (flat) => {
    const schema = Joi.object({
        eta: Joi.number(),
        condition: Joi.string(),
    });
    return schema.validate(flat);
};

module.exports = { validateFlat };
