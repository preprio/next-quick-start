// ./pages/index.js

import { GetArticles } from "../queries/getArticles";
import client from "../services/apollo-client";

//Import next links to enable linking 
import Link from "next/link";

function Home({ articles }) {
  return (
    <div>
      <h1>My blog site</h1>
      <ul>
        {articles.map((article) => (

          //Add link to each article in the list
          <li key={article._id}>
            <Link href={`${article._slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Home;
 
// Function for server-side rendered app
// Articles are retrieved when the the page is opened

export async function getServerSideProps(context) {
  // Run GetArticles query using apollo client
  const { data } = await client.query({
    query: GetArticles,
  })
  const articles = data.Articles.items

  // Pass Articles as props to the visited page
  return {
    props: { articles },
  };
}
