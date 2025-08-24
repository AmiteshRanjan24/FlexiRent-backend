const z = require("zod");

const bookingSchema = z.object({
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid userId"),
  vehicleId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid vehicleId"),
  providerId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid providerId"),
  status: z
    .enum(["pending", "completed", "approved", "declined"])
    .default("pending"),
});

module.exports = bookingSchema;
