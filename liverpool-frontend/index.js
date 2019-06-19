// GLOBAL VARIABLES
const usersUrl = "http://localhost:3000/users"
const postsUrl = "http://localhost:3000/posts"
const commentsUrl = "http://localhost:3000/comments"
const likesUrl = "http://localhost:3000/likes"
let user_id = 0
let post_id = 0


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded")
  fetchPosts()
  fetchUsers()


  document.addEventListener('click', handleClickEvents)

  function handleClickEvents(e) {
		e.preventDefault()
    // console.log(e.target)
		if(e.target.id === 'userSubmit') createUser(e.target)
		else if(e.target.id === 'post_submit_button') createPost(e.target)
    else if(e.target.id === 'btn btn-primary') add_quote(e.target.parentElement)
	}





  // const postForm = document.getElementById("post_form")
  // postForm.addEventListener("submit", createPost)

  // const userForm = document.getElementById("userForm")
  // userForm.addEventListener("submit", createUser)


function fetchUsers() {
  fetch(usersUrl)
  .then(resp => resp.json())
  .then(json => {json.forEach(displayUser)})
}

function fetchPosts() {
  fetch(postsUrl)
  .then(resp => resp.json())
  .then(json => {json.forEach(displayPost)})
}

function fetchLikes() {
  fetch(likesUrl)
  .then(resp => resp.json())
  .then(json => {json.forEach(displaylike)})
}

function fetchComments() {
  fetch(commentsUrl)
  .then(resp => resp.json())
  .then(json => {json.forEach(displaycomment)})
}



// WORKING
function createUser(e) {
  // console.log(userName.name)
  let user = {name: userName.value}
  fetch(usersUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
     }, 
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(res => displayUser(res))
  userForm.reset()
}

// NOT WORKING BUT NEED LOGIN FIRST
function createPost(e) {
  let postInput = {
    title: title_input.value,
    content: content_input.value,
    media: media_input.value,
    user_id: user_id
  }
  fetch(postsUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postInput)
  })
  .then(res => res.json())
  .then(displayPost)
   post_form.reset()
}

// SETUP COMMENTS IN HTML
// function createComment(e) {
//   e.preventDefault()
//   let commentInput = {
//     text: e.target.text.value,
//     user_id: user_id,
//     post_id: post_id
//   }
//   fetch(commentsUrl, {
//     method: "POST",
//     headers: {
//       "Accept": "application/json",
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(commentInput)
//   }).then(res => res.json())
//   .then(res => {(displayComment(res))
//   })
// }

function displayPost(post) {
  const postList = document.getElementById("post-list")
  postList.innerHTML += 
    `<div>
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    </div>`
  // console.log(post)
}
// Display Users in a modal when clicked on
function displayUser(user){
  const modalBody = document.querySelector(".modal-body")
  modalBody.innerHTML +=
    `<li>${user.name}</li>`
}






})