const errorHandlerMiddleware = async (error, req, res, next) => {
  console.log(error.message);
  res.status(400).send({ message: "server error" });
};

module.exports = errorHandlerMiddleware;
