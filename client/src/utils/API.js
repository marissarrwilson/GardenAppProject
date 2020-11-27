/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/garden");
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/garden/" + id);
  },
  // Saves a post to the database
  savePost: function(plantData) {
    console.log(`[saveBook....]`, plantData)
    return axios.post("/api/garden", plantData);
  }
};
