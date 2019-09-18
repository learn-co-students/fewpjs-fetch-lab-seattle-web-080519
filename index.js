function fetchBooks() {
  // a fetch request to the Game of Thrones API:
  return fetch('https://anapioficeandfire.com/api/books')
  // then, returned response should be converted to JSON
  .then(response => response.json()) 
  // call the second function: renderBooks(), passing in the API's returned JSON data as the argument
  .then(json => renderBooks(json))
};

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
