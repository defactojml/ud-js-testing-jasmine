describe('Address Book', function(){
  it('should be able to add a contact', function() {
    var addressBook = new AddressBook();
    var contact = new Contact();
    addressBook.addBook(contact);
    expect(addressBook).not.toBeNull();
    expect(addressBook.getBook(0)).toEqual(contact);
  });

  it('should be able to delete a contact', function() {
    var addressBook = new AddressBook();
    var contact = new Contact();
    var contact2 = new Contact();

    addressBook.addBook(contact);
    addressBook.addBook(contact2);
    addressBook.delete(0);
    expect(addressBook.getBook(0)).toEqual(contact2);
  });
});