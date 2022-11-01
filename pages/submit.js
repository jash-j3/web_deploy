import { useState } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import TextBox from "../components/textbox";
import Layout from "../components/layout";
import Container from "../components/container";
import { useRouter } from "next/router";

const GUESS_COUNT = 10;

export default function SubmitGuesses() {
  let [guesses, setGuesses] = useState(Array(GUESS_COUNT).fill(""));

  const placeholders =
    "what do you think we'll talk about in today's orientation".split(" ");

  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();

  async function uploadGuesses(guesses, email) {
    if (guesses.indexOf("") > -1) {
      alert("Please fill out all the guesses");
      return;
    }

    const endpoint = "/api/post";
    //   let email = "cs20btech11001@iith.ac.in";
    const data = {
      _id: email,
      guesses: guesses,
    };
    const jsondata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsondata,
    };
    // const response = await fetch(endpoint, options);
    const response = await fetch(endpoint, options)
      .then((res) => {
        console.log("res", res);
        router.push("/orientation");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <Layout>
      <Head>
        <title>&lt; Lambda /&gt; | Submit</title>
      </Head>
      <Container>
        <>
          <div className="mb-10">
            {guesses.map((guess, i) => {
              return (
                <>
                  <div className="pt-5 dark:text-gray-50/80">Guess {i + 1}</div>
                  <TextBox
                    placeholder={placeholders[i]}
                    value={guess}
                    onChange={(e) => {
                      const copiedArray = Array.from(guesses);
                      copiedArray[i] = e.target.value;
                      setGuesses(copiedArray);
                    }}
                  />
                </>
              );
            })}
          </div>
          <div className="mb-5">
            <button
              type="button"
              className="px-4 py-2 bg-neutral-900 dark:text-gray-50/80 rounded-3xl"
              onClick={() => uploadGuesses(guesses, session.user.email)}
            >
              Submit
            </button>
          </div>
        </>
      </Container>
    </Layout>
  );
}
