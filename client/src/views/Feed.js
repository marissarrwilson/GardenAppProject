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

  async function removePost(id) {
    const result = await API.deletePost(id)
    console.log(`[removePost]`, result)
    loadPosts()

    // add code here to remove a book using API
  }

  return (
    <div className="wrapper">
      <Container>
        <div className="pageTitle">
          <center>
            <h1>News Feed</h1>
          </center>
        </div>
        <div className="row">
          {posts.map((post) => {
            return (
              <Card key={post.id}
                title={post.title}
                image={post.imageUrl}
                name={post.name}
                sqft={post.sqft}
                datePlanted={post.plantedDate}
                status={post.status}
                description={post.description}
                function={() => removePost(post._id)}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Feed;