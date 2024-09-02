class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    // Method to log a brief description of the book
    describe() {
      console.log(`Title: ${this.title} - \n Author: ${this.author} ( Year of publish: ${this.year})`);
    }
  
    // Method to log the genre of the book
    displayGenre() {
      console.log(`Genre: ${this.genre}`);
    }
  }
  
  // Example usage:
  const myBook = new Book("Five Point Someone", "Chetan Bhagat", 2004, "Fiction");
  
  // Logging the description and genre
  myBook.describe();       
  myBook.displayGenre();   
  