const usersUrl = "http://localhost:3000/users"
const postsUrl = "http://localhost:3000/posts"
const commentsUrl = "http://localhost:3000/comments"

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded")
  fetchUsers()
  fetchPosts()
})

function fetchUsers() {
  fetch (usersUrl)
  .then(resp => resp.json())
  .then(data => data.forEach(user => {displayUser(user)
  }))
}

function fetchPosts() {
  fetch (postsUrl)
  .then(resp => resp.json())
  .then(data => data.forEach(post => {displayPost(post)
  }))
}

function displayPost(post) {
  const postList = document.getElementById("post-list")
  postList.innerHTML += 
    `<div style="background-color:black;color:white;padding:20px;">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    </div>`
}

function displayUser(user){
  const table = document.querySelector("#users-table")
  table.innerHTML +=
    `<li>${user.name}</li>`
}