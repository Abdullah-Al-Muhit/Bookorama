
// from lecture 3
var titles = document.getElementsByClassName('title');

console.log(titles);

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
    console.log(item);
})

// from lecture 4
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);

books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
})

// from lecture 5
var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += '(book title';
})

const bookLsit = document.querySelector('#book-list');
bookLsit.innerHTML = '<h2>Hello good people</h2>';
bookLsit.innerHTML += '<p>Hello good people</p>';

