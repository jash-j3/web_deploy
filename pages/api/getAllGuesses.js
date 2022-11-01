import clientPromise from "../../lib/mongodb";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("LambdaSite");

    console.log("db", db);
    // const movies = await db
    //   .collection("movies")
    //   .find({})
    //   .sort({ metacritic: -1 })
    //   .limit(10)
    //   .toArray();

    res.json("movies");
  } catch (e) {
    console.error(e);
  }
};
