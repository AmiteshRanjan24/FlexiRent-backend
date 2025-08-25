const z = require("zod");

const vehicleSchema = z.object({
  vehicleCompany: z.string().min(2, "Vehicle company is required"),
  type: z.enum(["car", "bike", "scooter", "other"]),
  model: z.string().min(1, "Model is required"),
  pricePerDay: z.number().positive("Price must be greater than 0"),
  availability: z.boolean().optional().default(true),
});

const updateVehicleSchema = vehicleSchema.partial();

module.exports = { vehicleSchema, updateVehicleSchema };
