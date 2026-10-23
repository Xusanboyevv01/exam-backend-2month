const Joi = require("joi");

const validateTicket = (ticket) => {
    const schema = Joi.object({
        event_id: Joi.number(),
        seat_id: Joi.number(),
        price: Joi.number(),
        service_fee: Joi.number(),
        status_id: Joi.number(),
        ticket_type_id: Joi.number(),
    });
    return schema.validate(ticket);
};

module.exports = { validateTicket };
