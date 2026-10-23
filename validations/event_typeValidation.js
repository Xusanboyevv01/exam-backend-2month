const Joi = require("joi");

const validateEventType = (eventType) => {
    const schema = Joi.object({
        name: Joi.string().min(1),
        parent_event_type_id: Joi.number(),
    });
    return schema.validate(eventType);
};

module.exports = { validateEventType };
