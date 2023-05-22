import { GetArticleDetail } from "../queries/getArticleBySlug";
import client from "../services/apollo-client";

export default function Article({ article }) {
    return (
      <>
        <h1 >
          { article.title }
        </h1>

        //Loop through content types in article content
  
        {article.content.map((contentType) => {

          //Display image if it exists
            if (contentType.__typename === 'Assets' && contentType.items.length) {
              return (
                <div className="my-10">
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
                <div dangerouslySetInnerHTML={{ __html: contentType.body }}></div>
              )
            }
          })}
      </>
    )
  }
  
  export async function getServerSideProps({ params }) {

    // Get the slug in the URL
    const { slug } = params;
  
    // Request an article by the slug
    const { data } = await client.query({
      query: GetArticleDetail,
      variables: {
        slug,
      },
    });
  
  // Pass Article data as props to the visited page
    return {
      props: {
        article: data.Article,
      }, 
    };
  }