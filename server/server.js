import Fastify from "fastify";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/userRoute.js";
import fastifyCors from "@fastify/cors";
import dbConnector from "./config/dbconnector.js";
import fastifyFormbody from "@fastify/formbody";

const port = 5000;

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyFormbody);
fastify.register(dbConnector);
fastify.register(authRouter);
fastify.register(userRouter);

fastify.register(fastifyCors, {
  origin: "*",
  methods: "GET, PUT, POST, DELETE",
});
const start = async () => {
  try {
    await fastify.listen({ port });
    console.log(`server is running on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
