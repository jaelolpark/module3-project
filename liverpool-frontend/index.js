// GLOBAL VARIABLES
const usersUrl = "http://localhost:3000/users"
const postsUrl = "http://localhost:3000/posts"
const commentsUrl = "http://localhost:3000/comments"
const likesUrl = "http://localhost:3000/likes"
let user_id = null
let post_id = null

// DOM, Fetch Method Calls, and Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded")
  fetchPosts()
  fetchUsers()
  const postForm = document.getElementById("post_form")
  postForm.addEventListener("submit", createPost)

  const userForm = document.getElementById("userForm")
  userForm.addEventListener("submit", createUser)
})

// FETCH REQUESTS
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
  console.log(e.target.name.value)
  if(e.target.name.value === "") {
    alert('Please enter your name!')
  } 
  else {
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
}

// WORKING BUT NEED TO LOGIN FIRST
function createPost(e) {
  e.preventDefault()
  
  if(user_id === null) {
    alert('You must be logged in to post!')
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

// DISPLAY POST 
function displayPost(post) {
  const postList = document.getElementById("post-list")

  const divPost = document.createElement("div")
  divPost.id = post.id
  divPost.className = "posts"

  const h2 = document.createElement("h2")
  h2.innerText = post.title

  const p = document.createElement("p")
  p.innerText = `${post.content}` 

  const author = document.createElement("p")
  author.className = 'author-tag'

  fetch(usersUrl+'/'+post.user_id)
  .then(resp => resp.json())
  .then(user => author.innerText = `- ${user.name}`)

  const postButton = document.createElement("button")
  postButton.id = post.id
  postButton.type = 'button'
  postButton.className = "btn btn-success"
  postButton.dataset.toggle = "modal"
  postButton.dataset.target = "#post-modal"
  postButton.innerText = "Post Details"

  const like_btn = document.createElement("button")
  like_btn.className = 'btn btn-primary'
  like_btn.innerText = "Likes: "

  const like_span = document.createElement("span")
  like_span.innerText = post.likes.length
  like_btn.append(like_span)

  like_btn.addEventListener("click", function (){
    like_span.innerText = parseInt(like_span.innerText) + 1
    fetch(likesUrl, {
      method: "POST",
      headers: {"Accept": "application/json",
      'Content-Type': 'application/json'},
      body: JSON.stringify({user_id: post.user_id, post_id: post.id})
    })    
  })

  const deleteBtn = document.createElement("button")
  deleteBtn.innerText = "Delete"
  deleteBtn.id = "deleteBtn"
  deleteBtn.className = "btn btn-danger"
  deleteBtn.addEventListener("click", ()=> {
    if(post.user_id === user_id) {
      fetch(postsUrl+"/"+post.id, {
        method: "DELETE"
      }).then(res => res.json())
      .then(divPost.remove())
      }
    else {
      alert('You must be the post author to delete this post!')
    } 
  })
  postList.append(divPost)
  divPost.append(h2, author, p, postButton, like_btn, deleteBtn)
  
  postButton.addEventListener("click", postDetailsModal)
}
 
// POST DETAILS MODAL
function postDetailsModal(e) {
  post_id = e.target.id
    fetch(`http://localhost:3000/posts/${post_id}`)
    .then(resp => resp.json())
    .then(displayPostModal)
}

//WORKING BUT NEEDS DESIGN/CSS
function displayPostModal(post) {
  console.log(post)
  const postModal = document.getElementById("post-modal")
  postModal.querySelector('h5').innerText = post.title
  postModal.querySelector('#post-content').innerText = post.content
  postModal.querySelector('#post-media').innerHTML = `<img id="postImg" src=${post.media}>`
  let postCommentsUl = document.getElementById("comments-ul")
  postCommentsUl.innerHTML = ""
  post.comments.forEach(comment=> {
    let postCommentLi = document.createElement("li")
    postCommentLi.innerText = comment.text
    postCommentsUl.append(postCommentLi)
  })
  const commentForm = document.getElementById("comment-form")
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if(post.user_id === null) {
        alert('You must be logged in to comment!')
    } 
    else {
      let postCommentLi = document.createElement("li")
      postCommentLi.innerText = e.target.text.value
      postCommentsUl.append(postCommentLi)
      fetch(commentsUrl, {
        method: "POST", 
        headers: {"Accept": "application/json",
        'Content-Type': 'application/json'},
        body: JSON.stringify({text: e.target.text.value, user_id: post.user_id, post_id: post.id})
      }).then(res => res.json())
      .then(e.target.reset())
    }
  })
}

// Display Users in a modal when clicked on
function displayUser(user){
  const modalBody = document.getElementById("userModal")
  modalBody.innerHTML +=
    `<li>${user.name}</li>`   
}