const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: "Something went wrong. Please try again later.",
    err: err.message,
  });
};

module.exports = errorHandler;
