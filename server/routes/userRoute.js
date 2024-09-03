async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection("users");
  const userBodyJsonSchema = {
    type: "object",
    required: ["name", "gender", "birthday", "address"],
    properties: {
      name: { type: "string" },
      gender: { type: "string" },
      birthday: { type: "string" },
      address: { type: "string" },
    },
  };
  const schema = {
    body: userBodyJsonSchema,
  };
  fastify.post("/dev", { schema }, async (req, res) => {
    const insertData = [
      {
        name: req.body.name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        address: req.body.address,
      },
    ];
    const result = await collection.insertMany(insertData);
    return result;
  });

  fastify.get("/devs", async (req, res) => {
    const result = await collection.find().toArray();
    return result;
  });

  fastify.delete("/dev/:id", async (req, res) => {
    const id = req.params.id;
    const result = await collection.deleteOne({
      _id: new fastify.mongo.ObjectId(id),
    });
    return result;
  });
  fastify.get("/dev/:id", async (req, res) => {
    const id = req.params.id;
    const result = await collection.findOne({
      _id: new fastify.mongo.ObjectId(id),
    });
    return result;
  });
  fastify.put("/dev/:id", async (req, res) => {
    const id = req.params.id;
    const result = await collection.updateOne(
      {
        _id: new fastify.mongo.ObjectId(id),
      },
      {
        $set: {
          name: req.body.name,
          gender: req.body.gender,
          birthday: req.body.birthday,
          address: req.body.address,
        },
      }
    );
    return result;
  });
}

export default routes;
