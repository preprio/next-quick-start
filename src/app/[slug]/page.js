import client from "@/apollo-client";
import {GetPostBySlug} from "@/queries/get-post-by-slug";

export const revalidate = 0;

async function getData(slug) {
  const {data} = await client.query({
    query: GetPostBySlug,
    variables: {
      slug
    }
  })

  return data.Post
}

export default async function PostPage(props) {
  const params = await props.params;
  const {slug} = params;
  const post = await getData(slug);


  return (
    <>
      <h1>
        { post?.title }
      </h1>

      {/* Loop through content types in article content */}

      {post?.content.map((contentType) => {

        //Display image if it exists
        if (contentType.__typename === 'Assets' && contentType.items.length) {
          return (
            <div className="my-10" key={contentType.items[0]?._id}>
              <img
                src={contentType.items[0]?.url}
                width="300"
                height="250"
              />
            </div>
          )
        }

        //Display text as HTML

        if (contentType.__typename === 'Text') {

          return (
            <div key={contentType._id} dangerouslySetInnerHTML={{ __html: contentType.body }}></div>
          )
        }
      })}
    </>
  )
}
