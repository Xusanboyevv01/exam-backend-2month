const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const payment_methodRouter = require("./routes/payment_methodRoute");
app.use("/api", payment_methodRouter);
const discountRouter = require("./routes/discountRoute");
app.use("/api", discountRouter);
const delivery_methodRouter = require("./routes/delivery_methodRoute");
app.use("/api", delivery_methodRouter);
const bookingRouter = require("./routes/bookingRoute");
app.use("/api", bookingRouter);
const cart_itemRouter = require("./routes/cart_itemRoute");
app.use("/api", cart_itemRouter);
const ticket_statusRouter = require("./routes/ticket_statusRoute");
app.use("/api", ticket_statusRouter);
const cartRouter = require("./routes/cartRoute");
app.use("/api", cartRouter);
const ticket_typeRouter = require("./routes/ticket_typeRoute");
app.use("/api", ticket_typeRouter);
const customer_cardRouter = require("./routes/customer_cardRoute");
app.use("/api", customer_cardRouter);
const customerRouter = require("./routes/customerRoute");
app.use("/api", customerRouter);
const adminRouter = require("./routes/adminRoute");
app.use("/api", adminRouter);
const customer_addressRouter = require("./routes/customer_addressRoute");
app.use("/api", customer_addressRouter);
const flatRouter = require("./routes/flatRoute");
app.use("/api", flatRouter);
const eventRouter = require("./routes/eventRoute");
app.use("/api", eventRouter);
const ticketRouter = require("./routes/ticketRoute");
app.use("/api", ticketRouter);
const seatRouter = require("./routes/seatRoute");
app.use("/api", seatRouter);
const event_typeRouter = require("./routes/event_typeRoute");
app.use("/api", event_typeRouter);
const human_categoryRouter = require("./routes/human_categoryRoute");
app.use("/api", human_categoryRouter);
const langRouter = require("./routes/langRoute");
app.use("/api", langRouter);
const venueRouter = require("./routes/venueRoute");
app.use("/api", venueRouter);
const venue_photoRouter = require("./routes/venue_photoRoute");
app.use("/api", venue_photoRouter);
const venue_typesRouter = require("./routes/venue_typesRoute");
app.use("/api", venue_typesRouter);
const typesRouter = require("./routes/typesRoute");
app.use("/api", typesRouter);
const districtRouter = require("./routes/districtRoute");
app.use("/api", districtRouter);
const regionRouter = require("./routes/regionRoute");
app.use("/api", regionRouter);
const countryRouter = require("./routes/countryRoute");
app.use("/api", countryRouter);
const seat_typeRouter = require("./routes/seat_typeRoute");
app.use("/api", seat_typeRouter);
const genderRouter = require("./routes/genderRoute");
app.use("/api", genderRouter);
const sectorRouter = require("./routes/sectorRoute");
app.use("/api", sectorRouter);

setupSwagger(app);

sequelize.sync()
  .then(() => {
    console.log("Bazaga ulandi✅");
    app.listen(PORT, "0.0.0.0", () => {
      console.log("Server ishlayapti");
      console.log(`Local: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Baza xatosi: ", err));
