const Joi = require("joi");

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name: Joi.string().min(1),
        last_name: Joi.string().min(1),
        phone: Joi.string(),
        hashed_password: Joi.string(),
        email: Joi.string().email(),
        birth_date: Joi.date(),
        gender_id: Joi.number(),
        lang_id: Joi.number(),
        hashed_refresh_token: Joi.string(),
    });
    return schema.validate(customer);
};

module.exports = { validateCustomer };
