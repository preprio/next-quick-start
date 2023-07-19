import { GetArticles } from "@/queries/getArticles";
import client from "@/services/apollo-client";

import Link from "next/link";

export const revalidate = 0;

async function getData() {
  const {data} = await client.query({
    query: GetArticles,
  });
  return data.Articles.items;
}

export default async function Home() {
  const articles = await getData();

  return (
    <div>
      <h1>My blog site</h1>
      <ul>
        {articles.map((article) => (

          //List the fetched articles
          <li key={article._id}>
            <Link href={article._slug}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
