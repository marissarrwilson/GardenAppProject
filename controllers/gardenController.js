const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getPosts: async function() {
    const results = await db.Post.find({}).sort( { postDate: -1 } )
    console.log(`[getPosts]...`, results)
    return results
  },
  createPost: async function(postData) {
    const data = await db.Post.create({ 
      title: postData.title,
      name: postData.name,
      imageUrl: postData.imageUrl,
      status: postData.status,
      sqft: postData.sqft,
      description: postData.description,
      postDate: postData.postDate,
      plantedDate: postData.plantedDate,
      harvestDate: postData.harvestDate,
    })
    console.log(`[createPost]....`, data)
    return data
  },
  removePost: async function(postId) {
    const data = await db.Post.findByIdAndDelete(postId);
    return data._id ? true : false
  },
  updatePost: async function(postId, postData) {
    const data = {
      title: postData.title,
      name: postData.name,
      imageUrl: postData.imageUrl,
      status: postData.status,
      sqft: postData.sqft,
      description: postData.description,
      postDate: postData.postDate,
      plantedDate: postData.plantedDate,
      harvestDate: postData.harvestDate,
    }
    const result = await db.Post.findByIdAndUpdate({_id: postId}, data, {new:true})
    return result._id ? result._id : false
  }
}