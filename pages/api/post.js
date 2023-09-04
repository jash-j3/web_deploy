import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("bingo");
  const users = db.collection("users");

  switch (req.method) {
    case "POST": {
      console.log("POST", req.body);
      let date=new Date();
      let send={...req.body,time:date};
      console.log("SEND  ", send);
      let myPost=await users.insertOne(req.body);
      //   let bodyObject = JSON.parse(req.body);
      //   let myPost = await users.insertOne(bodyObject);
      // let myPost = await users.insertOne(req.body);
      console.log("myPost", myPost);
      // res.json(myPost);
      break;
    }
  }
}
