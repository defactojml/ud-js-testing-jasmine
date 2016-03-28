function AddressBook() {
 this.books = [];
}

AddressBook.prototype.addBook = function(contact) {
  return this.books.push(contact);
};

AddressBook.prototype.getBook = function(index) {
  return this.books[index];
};

AddressBook.prototype.delete = function(index) {
  return this.books.slice(this.books[index], 1);
};