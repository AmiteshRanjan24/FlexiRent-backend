const z = require("zod");

const vehicleSchema = z.object({
  providerId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid providerId"),
  vehicleCompany: z.string().min(2, "vehicle company is required"),
  type: z.enum(["car", "bike", "scooter", "other"]),
  model: z.string().min(1, "Model is required"),
  pricePerDay: z.number().positive("Price must be greater than 0"),
  availability: z.boolean(),
});

module.exports = vehicleSchema;
