db.produtos.updateMany(
  { name: { $not: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
