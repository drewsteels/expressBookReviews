const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;

public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;
    
  // check if username already exists
  if { username && password} {
  if(!doesExist(username)){
  users.push({ "username": username, "password": password });
  return res.status(200).JSON({ message: "User successfully registered, you can now login" });

}else { 
  return res.status(404).JSON({ message: "User already exists"});
}
return res.status(404).JSON({ message: "Unable to register user." });

});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  const get_books = new Promise((resolve, reject) => {
    resolve(res.send(JSON.stringify({ books }, null, 4)));
  });

  get_books.then(() => console.log("Promise for Task 10 resolved"));

});


// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //let isbn = req.params.isbn
  //res.send(books[isbn])
  const get_isbn = new Promise((resolve, reject) => {
    resolve(res.send(JSON.stringify({ isbn }, null, 4)));
  });

  get_isbn.then(() => console.log("Promise for Task 11 resolved"));

 });
  

// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //const author = req.params.author
  //let filtered_book = book.filter((bookFound) => bookFound.author = author);
  const get_books_author = new Promise((resolve, reject) => {

    let booksbyauthor = [];
    let isbns = Object.keys(books);
    isbns.forEach((isbn) => {
      if (books[isbn]["author"] === req.params.author) {
        booksbyauthor.push({
          "isbn": isbn,
          "title": books[isbn]["title"],
          "reviews": books[isbn]["reviews"]
        });
        resolve(res.send(JSON.stringify({ booksbyauthor }, null, 4)));
      }


    });
    reject(res.send("The mentioned author does not exist "))

  });

  get_books_author.then(function () {
    console.log("Promise for Task 12 resolved");
  }).catch(function () {
    console.log('The mentioned author does not exist');
  });


  res.send(filtered_book);
});


// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //const title = req.params.title;
  //let filtered_title = book.filter((titleFound) => titleFound.title = title);

  //res.send(filtered_title);
  const get_title = new Promise((resolve, reject) => {
    resolve(res.send(JSON.stringify({ title }, null, 4)));
  });

  get_title.then(() => console.log("Promise for Task 13 resolved"));

});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
 let isbn = req.params.isbn
    res.send(books[isbn].reviews)
});

module.exports.general = public_users;
