import { MongoClient } from "mongodb";

const uri = "mongodb+srv://lambda:logos1234@logo-quiz.f2txqai.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

console.log("uri", uri);

let client;
let clientPromise;

if (!uri) {
  throw new Error("Add Mongo URI to .env");
}


  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;


export default clientPromise;
