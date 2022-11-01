import { useState } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import TextBox from "../components/textbox";
import Layout from "../components/layout";
import Container from "../components/container";

const GUESS_COUNT = 10;

async function uploadGuesses(guesses) {
    const endpoint = "/api/post";
    let email = "cs20btech11001@iith.ac.in";
    const data = {
        _id: email,
        guesses: guesses
    }
    const jsondata = JSON.stringify(data)
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsondata
    }
    const response = await fetch(endpoint, options)
    // const result = await response.json()
}

export default function SubmitGuesses() {
  let [guesses, setGuesses] = useState(Array(GUESS_COUNT).fill(""));

  const placeholders =
    "what do you think we'll talk about in today's orientation".split(" ");

  const { data: session } = useSession();
  console.log(session);

  return (
    <Layout>
        <Head>
            <title>&lt; Lambda /&gt; | Submit</title>
        </Head>
        <Container>
            <>
            <div className="mb-10">
                {session ? (
                guesses.map((guess, i) => {
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
                })
                ) : (
                <>
                    Not signed in <br />
                    <button
                    type="button"
                    class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                    onClick={() => signIn()}
                    >
                    Sign in with Google
                    </button>
                </>
                )}
                {}
            </div>
            <div className="mb-5">
                <button
                type="button"
                className="px-4 py-2 bg-neutral-900 dark:text-gray-50/80 rounded-3xl"
                onClick={() => uploadGuesses(guesses)}
                >
                Submit
                </button>
            </div>
            </>
        </Container>
    </Layout>
  );
}
