const Joi = require("joi");

const validateCustomerAddress = (customerAddress) => {
    const schema = Joi.object({
        customer_id: Joi.number(),
        name: Joi.string().min(1),
        region_id: Joi.number(),
        district_id: Joi.number(),
        street: Joi.string(),
        house: Joi.string(),
        flat_id: Joi.number(),
        location: Joi.string(),
        post_index: Joi.string(),
        info: Joi.string(),
    });
    return schema.validate(customerAddress);
};

module.exports = { validateCustomerAddress };
