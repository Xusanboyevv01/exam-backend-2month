const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        customer_id: Joi.number(),
        name: Joi.string().min(1),
        phone: Joi.string(),
        number: Joi.string(),
        year: Joi.string(),
        month: Joi.string(),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    });
    return schema.validate(customerCard);
};

module.exports = { validateCustomerCard };
