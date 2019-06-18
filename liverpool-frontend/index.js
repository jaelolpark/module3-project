document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content has loaded")
    let url = "http://localhost:3000/users"
    fetch (url)
    .then(resp => resp.json())
    .then(data => data.forEach(user => {displayRow(user)
    }))

  function displayRow(row){
    const table = document.querySelector("#users-table")
    table.innerHTML +=
    `<tr>                                                                               
      <td>${row.name}</td>
    </tr>` 
  }

  function displayPost(post) {
    
  }

  function displayBook(book) {
    const ul = document.getElementById("list")
    const li = document.createElement("li")
    li.id = book.id
    li.innerText = book.title
        li.addEventListener("click", () => {
            const showPanel = document.getElementById("show-panel")

            const h1 = document.createElement("h1")
            h1.innerText = book.title

            const img = document.createElement("img")
            img.src = book.img_url

            const p = document.createElement("p")
            p.innerText = book.description

            const likeButton = document.createElement("button")
            likeButton.innerText = "Like...Subscribe: "

            const btn_span = document.createElement("span")
            btn_span.innerText = book.likes
            likeButton.append(btn_span)

                likeButton.addEventListener("click", () => {
                    btn_span.innerText = parseInt(btn_span.innerText) + 1
                    fetch(`http://localhost:3000/books/${book.id}`,{
                        method: "PATCH",
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify({"likes": btn_span.innerText})
                    })
                })

            const deleteButton = document.createElement("button")
            deleteButton.addEventListener("click", deleteBook)
            deleteButton.innerText = "Delete Book"
            deleteButton.id = "delete"
            deleteButton.dataset.bookId = book.id

            showPanel.innerHTML = ""
            showPanel.append(h1, img, p, likeButton, deleteButton)  
    })
    ul.append(li)
}




})