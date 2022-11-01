import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("bingo");
    const users = db.collection("users");
    const words = db.collection("words");

    switch (req.method) {
        case "POST": {
            let bodyObject = JSON.parse(req.body);
            let myPost = await users.insertOne(bodyObject);
            res.json(myPost.ops[0]);
            break;
        }
        case "GET":
            
    }

}