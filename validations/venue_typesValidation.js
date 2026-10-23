const Joi = require("joi");

const validateVenueTypes = (venueTypes) => {
    const schema = Joi.object({
        venueId: Joi.number(),
        typeId: Joi.number(),
    });
    return schema.validate(venueTypes);
};

module.exports = { validateVenueTypes };
