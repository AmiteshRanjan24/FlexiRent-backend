const validateRequest = (schema, property = "body") => {
  return (req, res, next) => {
    const result = schema.safeParse(req[property]);
    if (!result.success) {
      return res.status(400).json({
        errors: result.error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }
    req[property] = result.data;
    next();
  };
};

module.exports = validateRequest;
