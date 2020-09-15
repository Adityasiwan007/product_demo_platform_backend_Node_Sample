let mongoose = require("mongoose");
let Product = require("./models/product");
let pro_data = require("./products.json");
async function loadData() {
  await Product.deleteMany({});

  pro_data.products.forEach(async data => {
    let doc = new Product(data);
    await doc.save();
    console.log(`saved Product name: ${data.name}`);
  });
}
mongoose.connect(
  "mongodb://localhost:27017/InfluencerStreamingDB",
  { server: { reconnectTries: Number.MAX_VALUE } },
  function(err) {
    if (err) {
      console.log("info", "Couldnt connect to MongoDB:", err);
    } else {
      console.log("info", "Connected to MongoDB");
      loadData();
    }
  }
);


