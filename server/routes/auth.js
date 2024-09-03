import fastifyJwt from "fastify-jwt";
async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection("auth");

  const authBodyJsonSchema = {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: { type: "string" },
      password: { type: "string" },
    },
  };
  const schema = {
    body: authBodyJsonSchema,
  };
  fastify.register(fastifyJwt, {
    secret: "secretKey",
    sign: { expiresId: "1h" },
  });
  fastify.post("/register", { schema }, async (req, res) => {
    const insertData = [
      {
        email: req.body.email,
        password: req.body.password,
      },
    ];
    const result = await collection.insertMany(insertData);
    return result;
  });

  fastify.post("/login", async (req, res) => {
    const user = await collection.findOne({ email: req.body.email });
    if (user) {
      if (user.password === req.body.password) {
        const token = fastify.jwt.sign(user);
        return token;
      } else {
        return res.code(401).send({ msg: "password" });
      }
    } else {
      return res.code(401).send({ msg: "email" });
    }
  });
}

export default routes;
