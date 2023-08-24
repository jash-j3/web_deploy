// import { useState } from "react";
// import { useSession } from "next-auth/react";
// import Head from "next/head";
// import Link from "next/link";
// import TextBox from "../components/textbox";
// import Layout from "../components/layout";
// import Container from "../components/container";
// import { useRouter } from "next/router";
// const GUESS_COUNT = 10;
// export default function SubmitGuesses() {
//   let [guesses, setGuesses] = useState(Array(GUESS_COUNT).fill(""));
//   const placeholders =
//     "what do you think we'll talk about in today's orientation".split(" ");
//   const { data: session } = useSession();
//   console.log(session);
//   const router = useRouter();
//   async function uploadGuesses(guesses, email) {
//     if (guesses.indexOf("") > -1) {
//       alert("Please fill out all the guesses");
//       return;
//     }
//     const endpoint = "/api/post";
//     //   let email = "cs20btech11001@iith.ac.in";
//     const data = {
//       _id: email,
//       guesses: guesses,
//     };
//     const jsondata = JSON.stringify(data);
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: jsondata,
//     };
//     // const response = await fetch(endpoint, options);
//     const response = await fetch(endpoint, options)
//       .then((res) => {
//         console.log("res", res);
//         router.push("/orientation");
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   }
//   return (
//     <Layout>
//       <Head>
//         <title>&lt; Lambda /&gt; | Submit</title>
//       </Head>
//       <Container>
//         <>
//           <div className="mb-10 content-center">
//             {guesses.map((guess, i) => {
//               return (
//                 <>
//                   <div className="pt-5 dark:text-gray-50/80">Guess {i + 1}</div>
//                   <TextBox
//                     placeholder={placeholders[i]}
//                     value={guess}
//                     onChange={(e) => {
//                       const copiedArray = Array.from(guesses);
//                       copiedArray[i] = e.target.value;
//                       setGuesses(copiedArray);
//                     }}
//                   />
//                 </>
//               );
//             })}
//           </div>
//           <div className="mb-5">
//             <button
//               type="button"
//               className="px-4 py-2 bg-neutral-900 dark:text-gray-50/80 rounded-3xl"
//               onClick={() => uploadGuesses(guesses, session.user.email)}
//             >
//               Submit
//             </button>
//           </div>
//         </>
//       </Container>
//     </Layout>
//   );
// }

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import TextBox from "../components/textbox";
import Layout from "../components/layout";
import Container from "../components/container";
import { useRouter } from "next/router";
const getpoint = "/api/getans";
const QUESTION_COUNT = 7;

export default function SubmitGuesses() {
  const [questions, setQuestions] = useState(Array(QUESTION_COUNT).fill(""));
  const [answered, setAnswered] = useState(Array(QUESTION_COUNT).fill(false));
  const { data: session } = useSession();
  const router = useRouter();

  const options1 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "cs22btech11028@iith.ac.in" }),
  };
  async function getanswers() {
    try {
      const response = await fetch(getpoint, options1);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.error("Failed to get answer");
      }
    } catch (error) {
      console.log("jg", error);
    }
  }

  const fetchData = async () => {
    const response = await getanswers();
    let answ;
    for (answ in response) {
      console.log(response)
      console.log(response[answ].questionIndex);
      answered[response[answ].questionIndex] = true;
    }
  };

  fetchData();
  async function uploadAnswer(questionIndex, answer) {
    if (!session) {
      router.push("/orientation");
    } else {
      if (!answer) {
        alert("Please fill out the answer");
        return;
      }

      if (answered[questionIndex]) {
        alert("You've already submitted an answer for this question");
        return;
      }

      setAnswered((answered) => {
        return [
          ...answered.slice(0, questionIndex),
          true,
          ...answered.slice(questionIndex),
        ];
      });

      const endpoint = "/api/post";

      const data = {
        email: session.user.email,
        name: session.user.name,
        questionIndex,
        answer,
        submissionTime: new Date().toISOString(),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      // const ans=await fetch(getpoint,options1)
      try {
        const response = await fetch(endpoint, options);
        if (response.ok) {
          const updatedAnswered = [...answered];
          updatedAnswered[questionIndex] = true;
          setAnswered(updatedAnswered);
        } else {
          console.error("Failed to submit answer");
        }
      } catch (error) {
        console.error("Error submitting answer:", error);
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>&lt; Lambda /&gt; | Submit</title>
      </Head>
      <Container>
        <>
          <div className="mb-10 content-center">
            {questions.map((question, i) => {
              fetchData();
              return (
                <div key={i} className="mb-5">
                  <div className="pt-5 dark:text-gray-50/80">
                    Question {i + 1}
                  </div>
                  {!answered[i] ? (
                    <>
                      <TextBox
                        placeholder={`Enter your answer for question ${i + 1}`}
                        value={question}
                        onChange={(e) => {
                          const updatedQuestions = [...questions];
                          updatedQuestions[i] = e.target.value;
                          setQuestions(updatedQuestions);
                        }}
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-neutral-900 dark:text-gray-50/80 rounded-3xl mt-2"
                        onClick={() => uploadAnswer(i, questions[i])}
                      >
                        Submit Answer
                      </button>
                    </>
                  ) : (
                    <div className="text-green-500 mt-2">
                      Answer submitted successfully!
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      </Container>
    </Layout>
  );
}
