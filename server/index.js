const app = require("./app.js");
const config = require("./src/config/config.js");

// Home Route
app.get("/", (req, res) => res.send({ name: "server active" }));
// App Listening heare
app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});
