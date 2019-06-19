// GLOBAL VARIABLES
const usersUrl = "http://localhost:3000/users"
const postsUrl = "http://localhost:3000/posts"
const commentsUrl = "http://localhost:3000/comments"
const likesUrl = "http://localhost:3000/likes"
let user_id = null
let post_id = null


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded")
  fetchPosts()
  fetchUsers()
  const postForm = document.getElementById("post_form")
  postForm.addEventListener("submit", createPost)

  const userForm = document.getElementById("userForm")
  userForm.addEventListener("submit", createUser)
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

// WORKING
function createUser(e) {
  e.preventDefault()
  let user = {name: e.target.name.value}
  fetch(usersUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
  }, 
    body: JSON.stringify(user)
  }).then(res => res.json())
  .then(e.target.reset())
  .then(res => {
    console.log("This is my user: ", res)
    user_id = res.id
    console.log("This is the user_id: ", user_id)
    displayUser(res)
  })
}

// WORKING BUT NEED LOGIN FIRST
function createPost(e) {
  e.preventDefault()
  
  if(user_id === null) {
    alert('You have to be logged in to post!')
  }
  else {
    let postInput = {
      title: e.target.title.value,
      content: e.target.content.value,
      media: e.target.media.value,
      user_id: user_id
    }
    fetch(postsUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInput)
    }).then(res => res.json())
    .then(res => displayPost(res))
  }
  document.getElementById("post_form").reset()
}

function displayPost(post) {
  const postList = document.getElementById("post-list")
  // postList.innerHTML += 
  //   `<div id=${post.id} class="posts">
  //     <h2>${post.title}</h2>
  //     <p>${post.content}</p>
  //     <button id="btn-detail" type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
  //       Post Details
  //     </button>
  //   </div><br><br>`
    const divPost = document.createElement("div")
    divPost.id = post.id
    divPost.className = "posts"

    const h2 = document.createElement("h2")
    h2.innerText = post.title

    const p = document.createElement("p")
    p.innerText = post.content 

    const postButton = document.createElement("button")
    postButton.id = post.id
    postButton.className = "btn btn-danger"
    postButton.dataset.target = "#exampleModal"
    postButton.innerText = "Post Details"

    divPost.append(h2, p, postButton)
    postList.append(divPost)
    
    postButton.addEventListener("click", postDetailsModal)
}

// POST DETAILS MODAL
function postDetailsModal(e) {
  console.log(e.target.id)
  post_id = e.target.id
    fetch(`http://localhost:3000/posts/${post_id}`)
    .then(resp => resp.json())
    .then(console.log)
    .then(post => displayPostModal(post))
}

// NOT WORKING YET
function displayPostModal(post) {
  console.log(post)
  const postModal = document.getElementById("post-modal")
  postModal.innerHTML += 
      `<div class="modal fade" id="post-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${post.title.value}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id=post-details class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
    </div>
    </div>`
}

// Display Users in a modal when clicked on
function displayUser(user){
  const modalBody = document.getElementById("userModal")
  modalBody.innerHTML +=
    `<li>${user.name}</li>`   
}

// WANT TO ADD TO DISPLAY POST H2 TAG
// by ${user.name}