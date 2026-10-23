const Joi = require("joi");

const validateSector = (sector) => {
    const schema = Joi.object({
        sector_name: Joi.string().min(1),
    });
    return schema.validate(sector);
};

module.exports = { validateSector };
