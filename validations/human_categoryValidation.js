const Joi = require("joi");

const validateHumanCategory = (humanCategory) => {
    const schema = Joi.object({
        name: Joi.string().min(1),
        start_age: Joi.number(),
        finish_age: Joi.number(),
        gender_id: Joi.number(),
    });
    return schema.validate(humanCategory);
};

module.exports = { validateHumanCategory };
