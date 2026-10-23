const Joi = require("joi");

const validateCart = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number(),
        createdAt: Joi.date(),
        finishedAt: Joi.date(),
        status_id: Joi.number(),
    });
    return schema.validate(cart);
};

module.exports = { validateCart };
