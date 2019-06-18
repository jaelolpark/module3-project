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
  const comments = document.getElementById("comments")
  comments.innerHTML += 
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.content}</p>
        <a href="#" class="btn btn-primary">View Post Details!</a>
    </div>`
}

function displayUser(user){
  const table = document.querySelector("#users-table")
  table.innerHTML +=
  `<tr>                                                                               
    <td>${user.name}</td>
  </tr>` 
}