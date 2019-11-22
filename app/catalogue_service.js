// eslint-disable-next-line no-unused-vars
const catalogue = [
  { title: "The Catcher in the Rye", Author: " J.D. Salinger", stock: "10" },
  { title: "Dracula", Author: "Bram Stoker", stock: "0" },
  { title: "Between the Assassinations", Author: "Aravind Adiga", stock: "9" },
  { title: "Wolf Hall", Author: "Hilary Mantel", stock: "33" },
  { title: "Bring Up The Bodies", Author: "Hilary Mantel", stock: "31" },
  { title: "A Place of Greater Safety", Author: "Hilary Mantel", stock: "11" },
  { title: "Giving Up the Ghost", Author: "Hilary Mantel", stock: " 8" },
  { title: "The Assassination of Margaret Thatcher", Author: "Hilary Mantel", stock: "43" },
  { title: "The Yellow Wallpaper", Author: "Charlotte Perkins Gilman", stock: "12" },
  { title: "Conversations With Friends", Author: "Sally Rooney", stock: "1" },
  { title: "Normal People", Author: "Sally Rooney", stock: "2" },
  { title: "Everything I Never Told You", Author: "Celeste Ng", stock: "6" },
  { title: "2666", Author: "Robert Bolaño", stock: "17" },
  { title: "By Night In Chile", Author: "Robert Bolaño", stock: "8" },
  { title: "A Tale of Two Cities", Author: "Charles Dickens", stock: "3" },
  { title: "Oliver Twist", Author: "Charles Dickens", stock: "7" },
  { title: "Great Expectations", Author: "Charles Dickens", stock: "1" },
  { title: "The Blind Assassin", Author: "Margaret Atwood", stock: "8" },
  { title: "Why Be Happy When You Could Be Normal?", Author: "Jeanette Winterson", stock: "19" },
  { title: "The Origin of Species", Author: "Charles Darwin", stock: "50" }
]


function countBooksByAuthor(author) {

  let selectedBooksAuthor = [];
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue[i].Author === author) {
      selectedBooksAuthor.push(catalogue[i])
    }
  };
  //console.log(selectedBooksAuthor.length)
  return selectedBooksAuthor.length
};

function checkBookByTitle(title) {
  let selectedBooksTitle = [];
  for (i = 0; i < catalogue.length; i++) {

    if (catalogue[i].title === title) {
      selectedBooksTitle.push(catalogue[i])
    }
  };

  if (selectedBooksTitle.length !== 0) {
    return true;
  }
  return false;
};

function countBooksByFirstLetter(letter) {
  let selectedBooksFl = [];
  for (i = 0; i < catalogue.length; i++) {
    let firstLetter = catalogue[i].title[0]
    if (firstLetter === letter) {
      selectedBooksFl.push(catalogue[i])
    }};
  
  return selectedBooksFl.length
};

function getQuantity(title) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

function checkQuantity(title, quantity) {
  // Your code here
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
