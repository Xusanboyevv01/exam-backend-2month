const Joi = require("joi");

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(1),
        address: Joi.string(),
        location: Joi.string(),
        site: Joi.string(),
        phone: Joi.string(),
        schema: Joi.object(),
        region_id: Joi.number(),
        district_id: Joi.number(),
    });
    return schema.validate(venue);
};

module.exports = { validateVenue };
