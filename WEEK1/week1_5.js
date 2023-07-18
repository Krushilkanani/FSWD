function bookfun(books) {
  
    for (var i = 1; i < books.length; i++) {
      document.write(books[i]);
      document.write("<br>");
    }
  }

  var books = ["aaa" , "bbb" , "ccc" , "ddd" , "eee"];
  bookfun(books);