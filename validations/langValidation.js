const Joi = require("joi");

const validateLang = (lang) => {
    const schema = Joi.object({
        name: Joi.string().min(1),
    });
    return schema.validate(lang);
};

module.exports = { validateLang };
