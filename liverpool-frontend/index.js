const usersUrl = "http://localhost:3000/users"
const postsUrl = "http://localhost:3000/posts"

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

// function displayPost(post) {
//   const 

// }

function displayUser(user){
  const table = document.querySelector("#users-table")
  table.innerHTML +=
  `<tr>                                                                               
    <td>${user.name}</td>
  </tr>` 
}