import Container from "../components/container";
import Layout from "../components/layout";
// import Table from "../components/table";
import Head from "next/head";
import HomeRedirect from "../components/home-redirect";
import Link from "next/link";

// people[0] -> mentors
// people[1] -> coords
// people[2] -> cores
const people = [
  [
    {
      name: "Divyansh Kharbanda",
      contact: "ep19btech11002@iith.ac.in",
      githubUsername: "Aayush2492",
    },
    {
      name: "Rachit Keerti Das",
      contact: "cs19btech@iith.ac.in",
      githubUsername: "Aayush2492",
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
      githubUsername: "Aayush2492",
    },
  ],
];

const rolename = ["Mentors", "Coordinators", "Cores"];

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
          <div className="flex flex-col items-center justify-center">
            {people.map((role, index) => (
              <>
                <div className="container mx-auto px-5 text-purple-400 text-xl">
                  {rolename[index]}
                  <div className="container mx-auto px-5 text-white text-lg">
                    {" "}
                    <ul className="list-disc pt-2 pl-2 pb-4">
                      {role.map((person) => (
                        <>
                          <li>
                            <Link
                              href={
                                "https://github.com/" + person.githubUsername
                              }
                            >
                              <a className="hover:underline hover:text-purple-400">
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
