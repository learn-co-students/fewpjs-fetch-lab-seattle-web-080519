function fetchBooks() {
  let url = 'https://anapioficeandfire.com/api/books'
 
  return fetch(url)
    .then(response => response.json())
    .then(demBooks => renderBooks(demBooks))
    .catch(function(error) {
        console.log('problem with ya fetch operation: ', error.message)
    });
}

function renderBooks(demBooks) {
  const main = document.querySelector('main')
  
  demBooks.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})