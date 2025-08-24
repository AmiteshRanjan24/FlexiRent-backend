const z = require("zod");

const authSchema = z.object({
  name: z.string().min(3),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
  role: z.enum(["user", "provider"]).optional().default("user"),
});

module.exports = authSchema;
