const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://ames28:yoobee01@happykiwicluster.2n1xe9r.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {

    if (err) throw err;

});
const collection = client.db("HappyKiwiPosts").collection("posts");

module.exports = { collection, ObjectId }