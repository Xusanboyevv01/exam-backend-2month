const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const PaymentMethod = require('./payment_method.model')(sequelize, DataTypes);
const Discount = require('./discount.model')(sequelize, DataTypes);
const DeliveryMethod = require('./delivery_method.model')(sequelize, DataTypes);
const Booking = require('./booking.model')(sequelize, DataTypes);
const CartItem = require('./cart_item.model')(sequelize, DataTypes);
const TicketStatus = require('./ticket_status.model')(sequelize, DataTypes);
const Cart = require('./cart.model')(sequelize, DataTypes);
const TicketType = require('./ticket_type.model')(sequelize, DataTypes);
const CustomerCard = require('./customer_card.model')(sequelize, DataTypes);
const Customer = require('./customer.model')(sequelize, DataTypes);
const Admin = require('./admin.model')(sequelize, DataTypes);
const CustomerAddress = require('./customer_address.model')(sequelize, DataTypes);
const Flat = require('./flat.model')(sequelize, DataTypes);
const Event = require('./event.model')(sequelize, DataTypes);
const Ticket = require('./ticket.model')(sequelize, DataTypes);
const Seat = require('./seat.model')(sequelize, DataTypes);
const EventType = require('./event_type.model')(sequelize, DataTypes);
const HumanCategory = require('./human_category.model')(sequelize, DataTypes);
const Lang = require('./lang.model')(sequelize, DataTypes);
const Venue = require('./venue.model')(sequelize, DataTypes);
const VenuePhoto = require('./venue_photo.model')(sequelize, DataTypes);
const VenueTypes = require('./venue_types.model')(sequelize, DataTypes);
const Types = require('./types.model')(sequelize, DataTypes);
const District = require('./district.model')(sequelize, DataTypes);
const Region = require('./region.model')(sequelize, DataTypes);
const Country = require('./country.model')(sequelize, DataTypes);
const SeatType = require('./seat_type.model')(sequelize, DataTypes);
const Gender = require('./gender.model')(sequelize, DataTypes);
const Sector = require('./sector.model')(sequelize, DataTypes);

const models = {
  PaymentMethod,
  Discount,
  DeliveryMethod,
  Booking,
  CartItem,
  TicketStatus,
  Cart,
  TicketType,
  CustomerCard,
  Customer,
  Admin,
  CustomerAddress,
  Flat,
  Event,
  Ticket,
  Seat,
  EventType,
  HumanCategory,
  Lang,
  Venue,
  VenuePhoto,
  VenueTypes,
  Types,
  District,
  Region,
  Country,
  SeatType,
  Gender,
  Sector,
};

Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") model.associate(models);
});

module.exports = { sequelize, ...models };
