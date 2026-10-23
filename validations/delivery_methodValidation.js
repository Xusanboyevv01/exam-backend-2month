const Joi = require("joi");

const validateDeliveryMethod = (deliveryMethod) => {
    const schema = Joi.object({
        name: Joi.string().min(1),
    });
    return schema.validate(deliveryMethod);
};

module.exports = { validateDeliveryMethod };
