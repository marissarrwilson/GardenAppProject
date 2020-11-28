import React, {useEffect, useState } from "react";
import Card from "../components/Card";
import { Container } from "react-bootstrap";
import "./Feed.css";
import API from "../utils/API"

function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    const results = await API.getPosts()
    setPosts(results.data)
  };

  return (
    <div className="wrapper">
      <Container>
        <div className="row">
          {posts.map((post) => {
            return (
              <Card key={post.id}
                title={post.title}
                image={post.image}
                name={post.name}
                sqft={post.sqft}
                datePlanted={post.datePlanted}
                status={post.status}
                description={post.description}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Feed;