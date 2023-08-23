import clientPromise from "../../lib/mongodb";
import { useSession } from "next-auth/react";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("bingo");
  const users = db.collection("users");
  const words = db.collection("words");
  

  switch (req.method) {
    
    case "POST": {
      await users.find({"email":req.body.email}).toArray(function(err, results){
        res.send(results)
    });
      
    }
  }
}
