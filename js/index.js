const form = document.getElementById('github-form')
const userName = document.querySelector('#search')
const userList = document.querySelector('#user-list') 


form.addEventListener('submit', (event) => {
    event.preventDefault();
fetch(`https://api.github.com/search/users?q=${userName}`)
    .then((response) => response.json())
    .then((data) => {
        userList.innerHTML = ""
        data.items.forEach((user) => {
            const userDetails = document.createElement('div')
            userDetails.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login} avatar">
          <a href="${user.html_url}" target="_blank">${user.login}</a>
            `;
            userList.appendChild(userDetails)
        });
        
    })

    .catch((error) => {
        console.error(error)
    })
})

/* 
    const form = document.getElementById("github-form");
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("user-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") return;

  fetch(`https://api.github.com/search/users?q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults.innerHTML = "";
      data.items.forEach((user) => {
        const userElement = document.createElement("div");
        userElement.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login} avatar">
          <a href="${user.html_url}" target="_blank">${user.login}</a>
        `;
        searchResults.appendChild(userElement);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
 */