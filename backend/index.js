const express = require("express");
require("dotenv").config();
require("./db/database");
const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const discountRoutes = require("./routes/discountRoutes");
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/discount", discountRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is connected");
});
