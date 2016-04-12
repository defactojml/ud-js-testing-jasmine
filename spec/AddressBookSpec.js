describe('Address Book', function(){

  var addressBook;
  var contact;

  beforeEach(function(){
    addressBook = new AddressBook();
    contact = new Contact();
  });

  it('should be able to add a contact', function() {

    addressBook.addBook(contact);
    expect(addressBook).not.toBeNull();
    expect(addressBook.getBook(0)).toEqual(contact);
  });

  it('should be able to delete a contact', function() {
    var contact2 = new Contact();
    addressBook.addBook(contact);
    addressBook.addBook(contact2);
    addressBook.delete(0);
    expect(addressBook.getBook(0)).toEqual(contact2);
  });
});