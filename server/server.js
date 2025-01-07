const app = require("./server-config.js");
const userRoutes = require("./routes/users.route.js");
const port = process.env.PORT || 5000;

app.use("/users", userRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
