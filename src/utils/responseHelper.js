const successResponse = (
  res,
  statusCode = 200,
  message = "Success",
  data = null
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const resourceNotFound = (res, resourceName = "Resource") => {
  return res.status(404).json({
    success: false,
    message: `${resourceName} not found`,
  });
};

const errorResponse = (
  res,
  statusCode = 400,
  message = "An error occurred"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { successResponse, resourceNotFound, errorResponse };
