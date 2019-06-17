document.addEventListener("DOMContentLoaded", () => {console.log("DOM content has loaded")
   let url = "http://localhost:3000/users"
   fetch (url)
   .then(resp => resp.json())
   .then(data => console.log(data))
})

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content has loaded")
    let url = "http://localhost:3000/users"
    fetch (url)
    .then(resp => resp.json())
    .then(data => data.forEach(user => {
      displayRow(user)}))
  })
  ​
  function displayRow(row){
    const table = document.querySelector("#users-table")
    table.innerHTML +=
    `
    <tr>
      <td>${row.name}</td>
    </tr>
    `
}