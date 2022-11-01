import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Container from "../components/container";
import Layout from "../components/layout";

import clientPromise from "../lib/mongodb";

export default function Guess({ guesses, correctGuesses, hasGuessed }) {
  const router = useRouter();

  console.log("correctGuesses", correctGuesses);
  console.log("guesses", guesses);

  return (
    <Layout>
      <Head>
        <title>&lt; Lambda /&gt; | Guesses</title>
      </Head>
      <Container>
        {guesses.map((guess, i) => {
          const color =
            correctGuesses[0]["Words"].indexOf(guess.toLowerCase().trim()) > -1
              ? "bg-green-700"
              : "bg-yellow-400";
          return (
            <>
              <div className={`${color} m-3 rounded-3xl text-center p-2 tracking-tight md:tracking-tighter leading-tight`}>
                {`${guess}`}
              </div>
            </>
          );
        })}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    console.log("id", id);

    const client = await clientPromise;
    const db = client.db("bingo");
    const collection = db.collection("users");

    const data = await collection.findOne({ _id: id });

    console.log("fetched data", data);
    const hasGuessed = data?.guesses?.length > 0;
    const guesses = hasGuessed ? data?.guesses : [];

    if (!hasGuessed) {
      // redirect to submit guesses page
      return {
        redirect: {
          destination: "/submit",
          permanent: false,
        },
      };
    }

    let correctGuesses = undefined;
    if (hasGuessed) {
      // User hasGuessed, fetch correct guesses
      correctGuesses = await db
        .collection("words")
        .find({ _id: "0" })
        .toArray();
      console.log("correctGuesses", correctGuesses);
    }

    return {
      props: {
        guesses: hasGuessed ? JSON.parse(JSON.stringify(guesses)) : null,
        hasGuessed: hasGuessed,
        correctGuesses: hasGuessed
          ? JSON.parse(JSON.stringify(correctGuesses))
          : null,
      },
    };
  } catch (e) {
    console.error(e);
  }
}
