import HeroPost from "./hero-post";
import MoreStories from "./more-stories";

export default function Trio({ heroPost, morePosts}) {
    return (
        <>
        {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
    );
}