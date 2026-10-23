const Joi = require("joi");

const validateCartItem = (cartItem) => {
    const schema = Joi.object({
        ticket_id: Joi.number(),
        cart_id: Joi.number(),
    });
    return schema.validate(cartItem);
};

module.exports = { validateCartItem };
