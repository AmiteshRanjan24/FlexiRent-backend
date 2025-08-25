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

module.exports = { successResponse, resourceNotFound };
