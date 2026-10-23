const Joi = require("joi");

const validateTicketType = (ticketType) => {
    const schema = Joi.object({
        ticket_type: Joi.string().min(1),
    });
    return schema.validate(ticketType);
};

module.exports = { validateTicketType };
