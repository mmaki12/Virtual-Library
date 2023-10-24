// import the Media class:
const Media = require("./Media.js");
// create your Movie class:
class Book extends Media {
  constructor(title, author, numPages, rating) {
    super(title);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Page Count: ${this.numPages}, Rating: ${this.rating}`;
  }

  static highestRating(books) {
    if (books.length === 0) {
      return null;
    }

    let highestRatedBook = books[0];
    for (let i = 1; i < books.length; i++) {
      if (books[i].rating > highestRatedBook.rating) {
        highestRatedBook = books[i];
      }
    }

    return highestRatedBook;
  }
}

// don't change below
module.exports = Movie;