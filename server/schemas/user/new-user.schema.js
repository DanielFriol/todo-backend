const { z } = require("zod");

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(8),
});

module.exports = schema;
