import Container from "../components/container";
import Layout from "../components/layout";
// import Table from "../components/table";
import Head from "next/head";
import HomeRedirect from "../components/home-redirect";
import Link from "next/link";
import HorizontalRule from "../components/HorizontalRule";

// people[0] -> mentors
// people[1] -> coords
// people[2] -> senior cores
// people[3] -> cores

/* Team 2022-23 (might be used later)
// Harsha
// DEVULAPALLI SAI PRACHODHAN
// R V B R N AASEESH
// Pragna Mamidipaka
// Arun Siddardha

const people = [
  [
    {
      name: "Divyansh Kharbanda",
      contact: "ep19btech11002@iith.ac.in",
      githubUsername: "DivyanshK12",
    },
    {
      name: "Rachit Keerti Das",
      contact: "cs19btech@iith.ac.in",
      githubUsername: "RachitKeertiDas",
    },
  ],
  [
    {
      name: "Aayush Patel",
      contact: "ep19btech11002@iith.ac.in",
      githubUsername: "Aayush2492",
    },
    {
      name: "Vikhyath K.",
      contact: "cs19btech@iith.ac.in",
      githubUsername: "Vikhyath-vec",
    },
  ],
  [
    {
      name: "Harsha",
      githubUsername: "",
    },
    {
      name: "DEVULAPALLI SAI PRACHODHAN",
      githubUsername: "",
    },
    {
      name: "R V B R N AASEESH",
      githubUsername: "",
    },
    {
      name: "Pragna Mamidipaka",
      githubUsername: "",
    },
    {
      name: "Arun Siddardha",
      githubUsername: "",
    },
  ],
  [
    {
      name: "Dishank",
      githubUsername: "",
    },
    {
      name: "Gunjit Mittal",
      githubUsername: "",
    },
    {
      name: "Himanshu Kumar Gupta",
      githubUsername: "",
    },
    {
      name: "Boda Premchand",
      githubUsername: "",
    },
    {
      name: "Jaswanth Beere",
      githubUsername: "",
    },
    {
      name: "Ganesh Bombatkar",
      githubUsername: "",
    },
    {
      name: "K Vivek Kumar",
      githubUsername: "",
    },
    {
      name: "Maharshi Kadeval",
      githubUsername: "",
    },
    {
      name: "Kartheek Sriram Tammana",
      githubUsername: "",
    },
    {
      name: "Kushagra Gupta",
      githubUsername: "",
    },
    {
      name: "Rahul Ramachandran",
      githubUsername: "",
    },
    {
      name: "Rishit D",
      githubUsername: "",
    },
    {
      name: "Suryaansh Jain",
      githubUsername: "",
    },
    {
      name: "Varun Gupta",
      githubUsername: "",
    },
    {
      name: "Gaurang Dahad",
      githubUsername: "",
    },
    {
      name: "Dheeraj M",
      githubUsername: "",
    },
    {
      name: "Shreya Kumar",
      githubUsername: "",
    },
    {
      name: "Prajwaldeep Kamble",
      githubUsername: "",
    },
    {
      name: "Mallina Sri Pranav Seshu",
      githubUsername: "",
    },
    {
      name: "Rutv Kocheta",
      githubUsername: "",
    },
    {
      name: "Kartik Kalia",
      githubUsername: "",
    },
    {
      name: "Pradeep Mundlik",
      githubUsername: "",
    },
    {
      name: "Ankit Saha",
      githubUsername: "",
    },
    {
      name: "Prerit Yadav",
      githubUsername: "",
    },
    {
      name: "Kartik Srinivas",
      githubUsername: "",
    },
  ],
];
*/

const people = [
  [
    {
      name: "Aayush Patel",
      contact: "cs20btech@iith.ac.in",
      githubUsername: "Aayush2492",
    },
    {
      name: "Vikhyath K.",
      contact: "cs20btech@iith.ac.in",
      githubUsername: "Vikhyath-vec",
    },
  ],
  [
    {
      name: "Kushagra Gupta",
      contact: "cs21btech@iith.ac.in",
      githubUsername: "MistyRavager",
    },
    {
      name: "Kartheek Sriram Tammana",
      contact: "cs21btech@iith.ac.in",
      githubUsername: "kst164",
    },
    {
      name: "Jaswanth Beere",
      contact: "bm21btech@iith.ac.in",
      githubUsername: "frostedCupcake",
    },
    {
      name: "Varun Gupta",
      contact: "cs21btech@iith.ac.in",
      githubUsername: "procodervarun",
    },
  ],
  [
    {
      name: "To be announced",
      githubUsername: "",
    },
  ],
  [
    {
      name: "To be announced",
      githubUsername: "",
    },
  ],
];

const rolename = ["Mentors", "Heads", "Senior Cores", "Cores"];

const cores = [];

export default function Team() {
  return (
    <>
      <Layout>
        <Head>
          <title>&lt; Lambda /&gt; | Team</title>
        </Head>
        <Container>
          <HomeRedirect />
          {/* <Table teamMembers={teamMembers} /> */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl dark:text-gray-100 font-extrabold leading-9 sm:leading-10 md:leading-14 tracking-tight pb-2">
            Team
          </h1>
          <HorizontalRule />
          <div className="flex flex-col items-center justify-center mt-4">
            {people.map((role, index) => (
              <>
                <div className="container mx-auto px-5 text-purple-400 text-lg md:text-xl">
                  {rolename[index]}
                  <div className="container mx-auto px-5 text-white text-lg">
                    {" "}
                    <ul className="list-disc pt-2 pl-2 pb-4 text-base md:text-lg">
                      {role.map((person) => (
                        <>
                          <li>
                            <Link
                              href={
                                "https://github.com/" + person.githubUsername
                              }
                            >
                              <a
                                className="hover:underline hover:text-purple-400"
                                target="_blank"
                              >
                                {person.name}
                              </a>
                            </Link>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
