import { useState, useEffect } from 'react';

const Content = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result.blogs);
        }, 
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }, []);

  if (error) {
    return (
      <div>Error Message: {error.message}</div>
    );
  } else if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Blog posts</h1>
        </div>
        {posts.map(post => {
          return (
            <div className="card" key={post.user_id}>
              <img src={post.photo_url} class="card-img-top" alt="blog photo" />
              <div className="card-body">
                <h5 className="card-title">
                  #{post.user_id} {post.title}
                </h5>
                <hr />
                <p className="card-text">{post.content_text}</p>
              </div>
            </div>
          );
         })}
      </div>
    );
  }
}

export default Content;