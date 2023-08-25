import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import TextBox from "../components/textbox";
import Layout from "../components/layout";
import Container from "../components/container";
import { useRouter } from "next/router";
const getpoint = "/api/getans";
const QUESTION_COUNT = 7;

/* 
TODO:
  show answers
  check why slow fetch

*/

export default function SubmitGuesses() {
  const [questions, setQuestions] = useState(Array(QUESTION_COUNT).fill(""));
  const [answered, setAnswered] = useState(Array(QUESTION_COUNT).fill(false));
  const [data1, setData1] = useState([]);
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const router = useRouter();


  async function getanswers() {
    const options1 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session?.user.email }),
    };
    try {
      const response = await fetch(getpoint, options1);
      if (response.ok) {
        let data1 = await response.json();
        setData1(data1);
      } else {
        console.error("Failed to get answer");
      }
    } catch (error) {
      console.log("jg", error);
    }
  }
  // function MyComponent() {
  //   useEffect(() => {
  //     getanswers();
  //   }, []);}
    
    useEffect(() => {
      if (session && router.isReady) {
        getanswers();
      }
    }, [router, session]);
    
    useEffect(() => {
      const a = Array(QUESTION_COUNT).fill(false);
      for (let answ = 0; answ<data1.length;answ++) {
        console.log(data1[answ].questionIndex);
        a[data1[answ].questionIndex] = true;
      }
      setAnswered(a);
      console.log(questions);
      
    }, [data1]);
  // const fetchData = async () => {
  //   const response = await getanswers();
  //   let answ;
  //   for (answ in response) {
  //     console.log(response)
  //     console.log(response[answ].questionIndex);
  //     answered[response[answ].questionIndex] = true;
  //   }
  // };

  // function workData(response){
  //   MyComponent()
  //   let answ;
  //   for (answ in response) {
  //     console.log(response)
  //     console.log(response[answ].questionIndex);
  //     answered[response[answ].questionIndex] = true;
  //   }
    
  // }
  // workData(data1);

  
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
          ...answered.slice(questionIndex+1),
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
