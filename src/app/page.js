import { GetPosts } from "@/queries/get-posts";
import client from "@/apollo-client";

import Link from "next/link";

export const revalidate = 0;

async function getData() {
  const {data} = await client.query({
    query: GetPosts,
  });
  return data.Posts.items;
}

export default async function Home() {
  const posts = await getData();

  return (
    <div>
      <h1>My blog site</h1>
      <ul>
        {posts.map((post) => (

          //List the fetched articles
          <li key={post._id}>
            <Link href={post._slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
