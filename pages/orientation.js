import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import Container from "../components/container";
import SubmitGuesses from "../components/SubmitGuesses";
import ViewGuesses from "../components/ViewGuesses";

import clientPromise from "../lib/mongodb";

// function SubmitGuesses({ uploadGuesses }) {
//   let [guesses, setGuesses] = useState(Array(GUESS_COUNT).fill(""));

//   const { data: session } = useSession();
//   console.log(session);

//   return (
//     <>
//       <div className="mb-10">
//         {session ? (
//           guesses.map((guess, i) => {
//             return (
//               <>
//                 <div className="pt-5 dark:text-gray-50/80">Guess {i + 1}</div>
//                 <TextBox
//                   placeholder={placeholders[i]}
//                   value={guess}
//                   onChange={(e) => {
//                     const copiedArray = Array.from(guesses);
//                     copiedArray[i] = e.target.value;
//                     setGuesses(copiedArray);
//                   }}
//                 />
//               </>
//             );
//           })
//         ) : (
//           <>
//             Not signed in <br />
//             <button
//               type="button"
//               class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
//               onClick={() => signIn()}
//             >
//               Sign in with Google
//             </button>
//           </>
//         )}
//         {}
//       </div>
//       <div className="mb-5">
//         <button
//           type="button"
//           className="px-4 py-2 bg-neutral-900 dark:text-gray-50/80 rounded-3xl"
//           onClick={() => uploadGuesses(guesses)}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// }

// function ViewGuesses({ guessStatus }) {
//   return (
//     <>
//       {guessStatus.map((guess, i) => {
//         let color = guess.correct ? "bg-green-700" : "bg-yellow-400";
//         return (
//           <>
//             <div className={`${color} m-3 rounded p-1 text-center`}>
//               {`${i + 1}. ${guess.guess}`}
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// }

function SubmitGuesses()
{
  const router = useRouter();
  router.push("/submit")
}

export default function Orientation({ guesses, hasGuessed, correctGuesses }) {
  const { data: session } = useSession();

  console.log("guesses", guesses);
  console.log("hasGuessed", hasGuessed);

  return (
    <Layout>
      <Head>
        <title>&lt; Lambda /&gt; | Orientation</title>
      </Head>
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
          <Link href="/">
            <a className="hover:underline text-purple-400 cursor-alias">
              $ cd ~
            </a>
          </Link>
        </h2>
        {session ? (
          hasGuessed ? (
            <ViewGuesses guesses={guesses} correctGuesses={correctGuesses} />
          ) : (
            <SubmitGuesses />
          )
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
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("bingo");
    const collection = db.collection("users");

    const data = await collection.findOne({ _id: "cs20btech11001@iith.ac.in" });

    console.log("fetched data", data);
    const hasGuessed = data.guesses?.length > 0;
    const guesses = hasGuessed ? data.guesses : [];

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
        guesses: JSON.parse(JSON.stringify(guesses)),
        hasGuessed: hasGuessed,
        correctGuesses: JSON.parse(JSON.stringify(correctGuesses)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
