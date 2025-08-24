const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong. Please try again later.",
  });
};

module.exports = errorHandler;
