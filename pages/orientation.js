import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import TextBox from "../components/textbox";

const GUESS_COUNT = 10;

const placeholders =
  "what do you think we'll talk about in today's orientation".split(" ");

function SubmitGuesses({ uploadGuesses }) {
  let [guesses, setGuesses] = useState(Array(GUESS_COUNT).fill(""));

  return (
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
          onClick={() => uploadGuesses(guesses)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

function ViewGuesses({ guessStatus }) {
  return (
    <>
      {guessStatus.map((guess, i) => {
        let color = guess.correct ? "bg-green-700" : "bg-yellow-400";
        return (
          <>
            <div className={`${color} m-3 rounded p-1 text-center`}>
              {`${i + 1}. ${guess.guess}`}
            </div>
          </>
        );
      })}
    </>
  );
}

export default function Orientation() {
  // guessStatus is either an array of guesses, or null
  //   if array, renders ViewGuesses
  //   else (aka null) renders SubmitGuesses
  let [guessStatus, setGuessStatus] = useState(
    // test array
    //Array(GUESS_COUNT)
    //  .fill({ guess: "insert unknown guess here", correct: false })
    //  .fill({ guess: "insert correct guess here", correct: true }, GUESS_COUNT / 2)
    null
  );

  // TODO: initialize guessStatus

  // guesses is just an array of 10 strings
  const uploadGuesses = (guesses) => {

    // TODO: upload guesses to db

    const guessStatus = guesses.map((guess) => ({ guess, correct: false }));
    setGuessStatus(guessStatus);
  };

  return (
    <Layout>
      <Head>
        <title>&lt; Lambda /&gt; | Orientation</title>
      </Head>
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
          <Link href="/">
            <a className="hover:underline text-purple-400 cursor-alias">
              $ cd ~/Lambda/fun
            </a>
          </Link>
        </h2>
        {guessStatus ? (
          <ViewGuesses guessStatus={guessStatus} />
        ) : (
          <SubmitGuesses
            uploadGuesses={uploadGuesses}
          />
        )}
      </Container>
    </Layout>
  );
}
