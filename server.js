const fastify = require("fastify")({ logger: true });

let status = {
  isOn: false,
  color: "red",
};

fastify.get("/status", async (request) => {
  return status;
});

fastify.post("/status", async (request) => {
  const { isOn, color } = request.body;

  status = { isOn, color };

  return status;
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 7989, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    console.log(err);
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
