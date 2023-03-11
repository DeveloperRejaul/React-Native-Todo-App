const app = require("./app.js");
const config = require("./src/config/config.js");
const errorHandlerMiddleware = require("./src/middleware/errorhandle.middleware.js");
app.use(errorHandlerMiddleware);

// Home Route
app.get("/", (req, res) => res.send({ message: "server active" }));
app.get("*", (req, res) => res.send({ message: "invalid route" }));

// App Listening heare
app.listen(config.PORT, () => {
  console.log(` server runing at http://localhost:${config.PORT}`);
});
